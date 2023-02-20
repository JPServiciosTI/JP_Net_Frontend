import React from 'react'
import { Sidebar } from '../../components/Side/Sidebar'
import { Navbar } from '../../components/navbar/Navbar'
import {ListTT} from '../../components/table_tareo/Table_Tareo'
import './list_tareo.css'

function List_tareo() {
  return (
    <div className='listT'>
        <Sidebar/>
      <div className="general">
        <Navbar/>
        <div className="listTitle">TAREOS DIARIOS</div>
        <div className="listContainer">
            <ListTT/>
        </div>
       </div>
        
    </div>
  )
}

export default List_tareo