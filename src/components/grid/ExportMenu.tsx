import { Menu, MenuItem } from "@mui/material";
import React from "react";
import * as XLSX from 'xlsx';

export const ExportMenu = ({ table, anchorEl, onClose, exportToExcel }: any) => {
    const exportRowsToExcell = () => {

        console.log('table :',table.options.columns,table.options.data)
        const worksheet = XLSX.utils.json_to_sheet(table.options.columns);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
        XLSX.writeFile(workbook, "grid.xlsx");
         

        // const pagination = table.getState().pagination;
        // exportToExcel(pagination.pageIndex, pagination.pageSize);
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