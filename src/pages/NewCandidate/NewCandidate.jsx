import React from 'react'
import { Navbar } from 'react-bootstrap'
import Candidato_modal from '../../components/modal_NCandidate/Candidato_modal'
import { Sidebar } from '../../components/Side/Sidebar'
import './newcandidate.css'

function NewCandidate() {
  return (
    <div className="newCandidate">
        <Sidebar/>
        <div className="newCandi">
            <Navbar/>
            <div className='candidate-title'>Ingrese los datos del nuevo candidato</div>
            <div className="newCandiCont">
                <Candidato_modal/>
            </div>
        </div>
    </div>
  )
}

export default NewCandidate