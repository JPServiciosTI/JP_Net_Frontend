import React from 'react'
import { Sidebar } from '../../components/Side/Sidebar'
import { Navbar } from '../../components/navbar/Navbar'
import './list_tareo.css'
import Tareo_List from '../../components/table_tareo/Tareo_List'

function ListTareo() {
  return (
    <div className='listT'>
      <Sidebar />
      <div className="lgeneral">
        <Navbar />
        <div className="listContainer">
          <div className="container-xl">
            <div className="table-responsive">
              <div className="table-wrapper"></div>
              <Tareo_List/>
            </div>
          </div>
        </div>
      </div>
    </div>
        
  )
}

export { ListTareo } 