import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './table.css'

const ListPP=()=> {
    const rows = [
        {
          img:"https://cdn-icons-png.flaticon.com/512/4128/4128349.png",
          nombres: "Brando Lugger",
          apellidos: "Pinto Checya",
          cargo: "TI",
          dni: "70471667  ",
        },
        {
          img:"https://cdn-icons-png.flaticon.com/512/4128/4128262.png",
          nombres: "Brando Lugger",
          apellidos: "Pinto Checya",
          cargo: "TI",
          dni: "70471667  ",
        },
      ];
  return (
    <TableContainer component={Paper} className="table">
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell className='tableCell'>Nombres</TableCell>
          <TableCell className='tableCell'>Apellidos</TableCell>
          <TableCell className='tableCell'>Cargo</TableCell>
          <TableCell className='tableCell'>DNI</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow
            key={row.nombres}>
             <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  <a href="">{row.nombres}</a>
                </div>
            </TableCell>
            <TableCell className='tableCell'><a href="">{row.apellidos}</a></TableCell>
            <TableCell className='tableCell'><a href="">{row.cargo}</a></TableCell>
            <TableCell className='tableCell'><a href="">{row.dni}</a></TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  )
}

export {ListPP}