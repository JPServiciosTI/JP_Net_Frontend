import {useContext, useEffect, useState } from 'react';
import { Modal, Button } from 'react-bootstrap'
import { NewTareo } from '../../components/modal_Ntareo/NewTareo'
import { Navbar } from '../../components/navbar/Navbar'
import { Sidebar } from '../../components/Side/Sidebar'
import './tareo.css'

const hoy = new Date();
let day=hoy.getDate();
let month=hoy.getMonth() +1;
let year=hoy.getFullYear();
day=('0' + day).slice(-2);
month=('0' + month).slice(-2);
let date = day +"/"+month+"/"+year;

function Tareo() {

  const [show,setshow]=useState(true)
  const handleShow=()=>setshow(true)
  const handleClose=()=>setshow(false)

  return (
    <div className="tareoContainer">
        <Sidebar/>
        <div className="tareoGeneral">
            <Navbar/>
            <div className="tareoBody">
             <Modal show={show} onHide={handleClose}>
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

export {Tareo}