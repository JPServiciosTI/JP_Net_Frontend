import {useContext, useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Modal, Button } from 'react-bootstrap'
import { BiAddToQueue } from "react-icons/bi";
import { TbReport } from "react-icons/tb";
import { NewExtraTime } from '../Modals/modal_Nhoraextra/NewExtraTime';
import { NewTareo } from '../Modals/modal_Ntareo/NewTareo';
import {LicenciaCon} from '../Modals/modal_LicenciaCon/LicenciaCon'
import './table_tareo.css'

const hoy = new Date();
let day=hoy.getDate();
let month=hoy.getMonth() +1;
let year=hoy.getFullYear();
day=('0' + day).slice(-2);
month=('0' + month).slice(-2);
let date = day +"/"+month+"/"+year;

function Table_Tareo() {

  const [show1,setshow1]=useState(false)
  const handleShow1=()=>setshow1(true)
  const handleClose1=()=>setshow1(false)

  const [show2,setshow2]=useState(false)
  const handleShow2=()=>setshow2(true)
  const handleClose2=()=>setshow2(false)

  const [show3,setshow3]=useState(false)
  const handleShow3=()=>setshow3(true)
  const handleClose3=()=>setshow3(false)

  
  const [show4,setshow4]=useState(false)
  const handleShow4=()=>setshow4(true)
  const handleClose4=()=>setshow4(false)

  const rows = [
    {
      img:"https://cdn-icons-png.flaticon.com/512/4128/4128349.png",
      nombres: "Brando Lugger",
      apellidos: "Pinto Checya",
      cargo: "TI",
      dni: "70471667  ",
      cell: () => <button>Registrar</button>,
    },
    {
      img:"https://cdn-icons-png.flaticon.com/512/4128/4128262.png",
      nombres: "Brando Lugger",
      apellidos: "Pinto Checya",
      cargo: "TI",
      dni: "70471667  ",
      cell: () => <button>Registrar</button>,
    },
  ];

  return (
    <TableContainer component={Paper} className="table">
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell className='tableCell'><span>Nombres</span></TableCell>
          <TableCell className='tableCell'><span>Apellidos</span></TableCell>
          <TableCell className='tableCell'><span>DNI</span></TableCell>
          <TableCell className='tableCell'><span>Tareo</span></TableCell>
          <TableCell className='tableCell'><span>Licencia con</span></TableCell>
          <TableCell className='tableCell'><span>Licencia sin</span></TableCell>
          <TableCell className='tableCell'><span>Horas extras</span></TableCell>
          <TableCell className='tableCell'><span>Tareo histórico</span></TableCell>
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
            <TableCell className='tableCell btn'><button onClick={handleShow2} data-toggle="modal2">{row.cell}<BiAddToQueue className='tablei'/></button></TableCell>
            <TableCell className='tableCell btn'><button onClick={handleShow3} data-toggle="modal3">{row.cell}<BiAddToQueue className='tablei'/></button></TableCell>
            <TableCell className='tableCell btn'><button onClick={handleShow4} data-toggle="modal4">{row.cell}<BiAddToQueue className='tablei'/></button></TableCell>
            <TableCell className='tableCell btn'><button onClick={handleShow1} data-toggle="modal1">{row.cell}<BiAddToQueue className='tablei'/></button></TableCell>
            <TableCell className='tableCell btn'><a  href="">{row.cell}<TbReport className='tablei'/></a></TableCell>
          </TableRow>
        ))}
        <Modal show={show1} onHide={handleClose1}>
                <Modal.Header>
                 <Modal.Title className='modalTittle'>Registrar Hora Extra</Modal.Title>
                 <div className="time">
                    <label htmlFor="">{date}</label>
                 </div>
               </Modal.Header>
                <Modal.Body>
                    <NewExtraTime/>
                </Modal.Body>
                 <Modal.Footer>
                  <Button variant="danger" onClick={handleClose1}>
                      Cerrar
                 </Button>
                </Modal.Footer>
             </Modal>
             <Modal show={show2} onHide={handleClose2}>
                <Modal.Header>
                 <Modal.Title className='modalTittle'>Registrar Nuevo Tareo</Modal.Title>
                 <div className="time">
                    <label htmlFor="">{date}</label>
                 </div>
               </Modal.Header>
                <Modal.Body>
                    <NewTareo/>
                </Modal.Body>
                 <Modal.Footer>
                  <Button variant="danger" onClick={handleClose2}>
                      Close
                 </Button>
                </Modal.Footer>
             </Modal>
             <Modal show={show3} onHide={handleClose3}>
                <Modal.Header>
                 <Modal.Title className='modalTittle'>Registrar Licencia con Goce</Modal.Title>
                 <div className="time">
                    <label htmlFor="">{date}</label>
                 </div>
               </Modal.Header>
                <Modal.Body>
                    <LicenciaCon/>
                </Modal.Body>
                 <Modal.Footer>
                  <Button variant="danger" onClick={handleClose3}>
                      Cerrar
                 </Button>
                </Modal.Footer>
             </Modal>
             <Modal show={show4} onHide={handleClose4}>
                <Modal.Header>
                 <Modal.Title className='modalTittle'>Registrar Licencia sin Goce</Modal.Title>
                 <div className="time">
                    <label htmlFor="">{date}</label>
                 </div>
               </Modal.Header>
                <Modal.Body>
                    <LicenciaCon/>
                </Modal.Body>
                 <Modal.Footer>
                  <Button variant="danger" onClick={handleClose4}>
                      Cerrar
                 </Button>
                </Modal.Footer>
             </Modal>
      </TableBody>
    </Table>
  </TableContainer>
   
  )
}

export  {Table_Tareo}