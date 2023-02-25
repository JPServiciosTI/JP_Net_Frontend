import React from 'react'
import { Sidebar } from '../../components/Side/Sidebar'
import { Navbar } from '../../components/navbar/Navbar'
import {Table_Tareo} from '../../components/table_tareo/Table_Tareo'
import './list_tareo.css'


function ListTareo() {
  return (
    <div className='listT'>
      <Sidebar />
      <div className="lgeneral">
        <Navbar />
        <div className="listContainer">
          <Table_Tareo/>
        </div>
      </div>
    </div>
        
  )
}

export { ListTareo } 