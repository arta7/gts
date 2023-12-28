import { Menu, MenuItem } from "@mui/material";
import React from "react";
import * as XLSX from 'xlsx';

export const ExportMenu = ({ table, anchorEl, onClose, exportToExcel }: any) => {
    const exportRowsToExcell = () => {
          var ColumnJson = [];
         for(let j =0;j<table.options.data.length;j++)
         {
            const row= [];
         for(let i =0;i<table.options.columns.length;i++)
            {
                if(i==0)
                row[table.options.columns[i].header] = (j + 1).toString();
                else
                {
                     if(table.options.columns[i].header != '')
                     {
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