import React from 'react'
import {Sidebar} from '../../components/Side/Sidebar'
import { Navbar } from '../../components/navbar/Navbar'
import {ListPP} from '../../components/table/Table'
import './list.css'

function ListP() {
  return (
    <div className='list'>
        <Sidebar/>
      <div className="general">
        <Navbar/>
        <div className="listContainer">
           
            <div className="listTitle">Lista de Personal</div>
            <ListPP />
        </div>
       </div>
        
    </div>
  )
}

export {ListP}