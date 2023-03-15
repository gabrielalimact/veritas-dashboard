import * as React from 'react';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Typography, Divider, InputAdornment } from '@mui/material';
import { Search } from '@mui/icons-material';
import { ButtonPending, ButtonSucess } from '../Button';
import { SearchInput } from '../SearchInput';

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

export const BasicTable: React.FC<TableProps> = ({ data }) => {
  return (
    <TableContainer sx={{ borderRadius: '20px', marginTop: '3rem', padding: '2rem', background: 'white', width: 'auto'}}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between'}}>
        <Typography fontSize="25px" fontWeight='bold' mb={2}>Transactions</Typography>
        <SearchInput
          hiddenLabel
          placeholder='Search'
          variant="standard"
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
        />
      </Box>
      <Divider />
      <Table  aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Reciever</TableCell>
            <TableCell align="left">Type</TableCell>
            <TableCell align="left">Status</TableCell>
            <TableCell align="left">Date</TableCell>
            <TableCell align="left">Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Box sx={{display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 'bold'}}>
                  <CardMedia component="img" image={row.image} sx={{ width: '40px', height: '40px', borderRadius: '20%'}} />
                  {row.name}
                </Box>
              </TableCell>
              <TableCell align="left">{row.type}</TableCell>
              <TableCell align="left">{row.status === 'done' ? <ButtonSucess>Done</ButtonSucess> : <ButtonPending>Pending</ButtonPending>}</TableCell>
              <TableCell align="left">{row.date}</TableCell>
              <TableCell align="left">{row.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}