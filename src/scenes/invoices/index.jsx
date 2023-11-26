import { Typography, Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataInvoices } from "../../data/mockData";
import Header from "../../components/Header";

const Invoices = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const columns = [
        { field: "id", headerName: "ID" },
        { field: "name", headerName: "Name", flex: 1, cellClassName: "name-columns--cell" },
        { field: "phone", headerName: "Phone", flex: 1 },
        { field: "email", headerName: "Email", flex: 1 },
        {
            field: "cost", headerName: "Cost", flex: 1,
            renderCell: (params) => {
                <Typography color={colors.greenAccent[500]}>
                    ${params.row.cost}
                </Typography>
            }
        },
        { field: "date", headerName: "date", flex: 1 },
    ]


    return (
        <Box m="20px">
            <Header title="INVOICES" subtitle="List of Invoices" />
            <Box m="40px 0 0" height="75vh"
                sx={{
                    "& .MuiDataGrid-root": { border: "none" },
                    "& .MuiDataGrid-cell": { borderBottom: "none" },
                    "& .name-column--cell": { color: colors.greenAccent[300] },
                    "& .MuiDataGrid-columHeader": { backgroundColor: colors.blueAccent[700], borderBottom: "none" },
                    "& .MuiDataGrid-virtualScroller": { backgroundColor: colors.primary[400] },
                    "& .MuiDataGrid-footerContainer": { backgroundColor: colors.blueAccent[700], borderTop: "none" },
                    "& .MuiCheckbox-root": { color: `${colors.blueAccent[700]} !important` },
                }}>
                <DataGrid checkboxSelection rows={mockDataInvoices} columns={columns} />
            </Box>
        </Box>)
}

export default Invoices;