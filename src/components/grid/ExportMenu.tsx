import { Menu, MenuItem } from "@mui/material";
import React from "react";
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'


export const ExportMenu = ({ table, anchorEl, onClose, exportToExcel }: any) => {
    const exportRowsToExcell = () => {
        var ColumnJson = [];
        for (let j = 0; j < table.options.data.length; j++) {
            const row = [];
            for (let i = 0; i < table.options.columns.length; i++) {
                if (i == 0)
                    row[table.options.columns[i].header] = (j + 1).toString();
                else {
                    if (table.options.columns[i].header != '') {
                        row[table.options.columns[i].header] = table.options.data[j][table.options.columns[i].accessorKey];
                    }
                }
            }
            ColumnJson.push(row);
        }

        const worksheet = XLSX.utils.json_to_sheet(ColumnJson);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
        XLSX.writeFile(workbook, "گزارش.xlsx");
        handleMenuItemClick();
    }

    const exportRowsToPDF = () => {
        const doc = new jsPDF();
        autoTable(doc, { html: '#my-table' })

        var ColumnJson = [];
        for (let j = 0; j < table.options.data.length; j++) {
            const row = [];
            for (let i = 0; i < table.options.columns.length; i++) {
                if (i == 0)
                    row[table.options.columns[i].header] = (j + 1).toString();
                else {
                    if (table.options.columns[i].header != '') {
                        row[table.options.columns[i].header] = table.options.data[j][table.options.columns[i].accessorKey];
                    }
                }
            }
            ColumnJson.push(row);
        }
        var RowJson = [];

        for (let i = 0; i < table.options.columns.length; i++) {
            if (table.options.columns[i].header != '')
            RowJson.push(table.options.columns[i].header)
        }

        doc.addFont('ArialMS', 'Arial', 'normal');
        doc.setFont('Arial');
        
        console.log('ColumnJson', RowJson)
        console.log('ColumnJson', ColumnJson)
        
        autoTable(doc, {
            head: [RowJson],
            headStyles: { font: "Arial" }, // For Arabic text in the table head
            bodyStyles: { font: "Arial" },
            body: [
                 ColumnJson
                // ...
            ],
            
        })
        
        doc.save('table.pdf')
        handleMenuItemClick();
    }

    const handleMenuItemClick = () => {
        onClose();
    };

    return <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={onClose}
        MenuListProps={{
            'aria-labelledby': 'lock-button',
            role: 'listbox',
        }}
    >
        <MenuItem onClick={exportRowsToExcell}>
            {'خروجی Excel'}
        </MenuItem>
        <MenuItem onClick={exportRowsToPDF} disabled={true}>
            {'خروجی PDF'}
        </MenuItem>
    </Menu>
};