import React from 'react'
import {Sidebar} from '../../components/Side/Sidebar'
import { Navbar } from '../../components/navbar/Navbar'
import {ListPP} from '../../components/table_personal/Table_Personal'
import './list.css'

function ListP() {
  return (
    <div className='list'>
        <Sidebar/>
      <div className="general">
        <Navbar/>
        <div className="listTitle">LISTADO DE PERSONAL</div>
        <div className="listContainer">
            
            <ListPP />
        </div>
       </div>
        
    </div>
  )
}

export {ListP}