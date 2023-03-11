import React from 'react'
import { Sidebar } from '../../components/Side/Sidebar'
import { Navbar } from '../../components/navbar/Navbar'
import {Table_Tareo} from '../../pages/list_tareo/components/Table_Tareo'
import './list_tareo.css'


function ListTareo() {
  return (
    <div className='listContainerT'>
      <Sidebar />
      <div className="listGeneralT">
        <Navbar />
        <div className="listBodyT">
          <Table_Tareo/>
        </div>
      </div>
    </div>
        
  )
}

export { ListTareo } 