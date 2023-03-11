import React from 'react'
import { Sidebar } from '../../components/Side/Sidebar'
import { Navbar } from '../../components/navbar/Navbar'
import './style.css'
import { TableCandidatos } from './components/table_candidato/TableCandidatos'

function ListCandidatosMain() {
  return (
    <div className='listContainer'>
      <Sidebar />
      <div className="listGeneral">
        <Navbar />
        <div className="listBody">
          <TableCandidatos/>
        </div>
      </div>
    </div>
        
  )
}
export { ListCandidatosMain } 