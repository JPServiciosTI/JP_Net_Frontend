import React from 'react'
import { NewPersonal_main } from '../../components/modal_NPersonal/NewPersonal_main'
import { Navbar } from '../../components/navbar/Navbar'
import { Sidebar } from '../../components/Side/Sidebar'
import './newpersonal.css'

function Newpersonal() {
  
  return (
   <div className="newPersonal">
    <Navbar/>
    <div className="newCont">
        <Sidebar/>
        <div className="personalContainer">
        <div className='personal-title'>Ingrese los datos del nuevo trabajador</div>
        <div className="newContainer">
            <NewPersonal_main/>
        </div>
        </div>
        
    </div>
   </div>
  )
}

export {Newpersonal}