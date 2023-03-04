import React from 'react'
import { Sidebar } from '../../components/Side/Sidebar'
import { Navbar } from '../../components/navbar/Navbar'
import './style.css'
import { TableCandidatos } from './components/table_candidato/TableCandidatos'
import {botonAgregarCandidato} from '../list_candidatos/components/botonAgregarCandidato/index'

function ListCandidatosMain() {
  return (
    <div className='listT'>
      <Sidebar />
      <div className="lgeneral">
        <Navbar />
        <div className="listContainer">
          <TableCandidatos/>
        </div>
      </div>
    </div>
        
  )
}
export { ListCandidatosMain } 