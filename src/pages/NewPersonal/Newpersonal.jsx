import React from 'react'
import { NewPersonal_main } from '../../components/modal_NPersonal/NewPersonal_main'
import { Navbar } from '../../components/navbar/Navbar'
import { Sidebar } from '../../components/Side/Sidebar'
import './newpersonal.css'

function Newpersonal() {
  return (
   <div className="newPersonal">
    <Sidebar/>
    <div className="newCont">
        <Navbar/>
        <div className='personal-title'>Ingrese los datos del nuevo trabajador</div>
        <div className="newContainer">
            <NewPersonal_main/>
        </div>
    </div>
   </div>
  )
}

export {Newpersonal}