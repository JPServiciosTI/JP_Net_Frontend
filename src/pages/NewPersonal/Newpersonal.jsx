import React from 'react'
import Personal_modal from '../../components/modal_NPersonal/Personal_modal'
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
            <Personal_modal/>
        </div>
    </div>
   </div>
  )
}

export {Newpersonal}