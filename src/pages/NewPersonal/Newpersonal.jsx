import React from 'react'
import Personal_modal from '../../components/Modal/Personal_modal'
import { Navbar } from '../../components/navbar/Navbar'
import { Sidebar } from '../../components/Side/Sidebar'
import './newpersonal.css'

function Newpersonal() {
  return (
   <div className="newPersonal">
    <Sidebar/>
    <div className="newCont">
        <Navbar/>
        <div className="newContainer">
            <Personal_modal/>
        </div>
    </div>
   </div>
  )
}

export {Newpersonal}