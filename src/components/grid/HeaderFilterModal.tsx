import { Box, Popover, useTheme } from "@mui/material";
import ClientFilter from "./ClientSideFilter";
import { Filter } from "./Filter";

export const HeaderFilterModal = ({ header, open, table, anchorEl, onClose, serverSideGrid }: any) => {
    const theme = useTheme();
    return <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={onClose}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
        }}
    >
        <Box sx={{ padding: 1, backgroundColor: theme.palette.primary.light }}>
            {serverSideGrid ?
                <Filter column={header.column} table={table} /> :
                <ClientFilter column={header.column} table={table} />
            }
        </Box>
    </Popover>
}