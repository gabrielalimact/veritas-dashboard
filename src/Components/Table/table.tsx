import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'reciever', headerName: 'Reciever', width: 130, sortable: false },
  { field: 'type', headerName: 'Type', width: 130, sortable: false },
  { field: 'status', headerName: 'Status', width: 130, sortable: false },
  { field: 'date', headerName: 'Date', width: 130, sortable: false },
  { field: 'amount', headerName: 'Amount', description: 'This column has a value getter and is not sortable.', sortable: false, width: 130 },
];

export type TableData = {
  id: number,
  image:string, 
  name: string,
  date: string, 
  value: string, 
  status: string, 
  type: string,
}
type TableProps = {
  data: TableData[]
}

export const DataTable: React.FC<TableProps> = ({ data }) => {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={data}
        columns={columns}
        // pageSize={5}
        // rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}