import {useContext, useEffect, useState } from 'react';
import { Modal, Button } from 'react-bootstrap'
import './extratime.css'
import { Navbar } from '../../components/navbar/Navbar';
import { NewExtraTime } from '../../components/modal_Nhoraextra/NewExtraTime'
import { Sidebar } from '../../components/Side/Sidebar'


const hoy = new Date();
let day=hoy.getDate();
let month=hoy.getMonth() +1;
let year=hoy.getFullYear();
day=('0' + day).slice(-2);
month=('0' + month).slice(-2);
let date = day +"/"+month+"/"+year;

function ExtraTime() {

  const [show,setshow]=useState(true)
  const handleShow=()=>setshow(true)
  const handleClose=()=>setshow(false)

  return (
    <div className="extraContainer">
      <Sidebar/>
      <div className="extraGeneral">
        <Navbar/>
        <div className="extraBody">
        <Modal show={show} onHide={handleClose}>
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
                  <Button variant="danger" onClick={handleClose}>
                      Close
                 </Button>
                </Modal.Footer>
             </Modal>
        </div>
      </div>
    </div>
  )
}

export {ExtraTime}