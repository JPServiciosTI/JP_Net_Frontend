import React from 'react'
import {Sidebar} from '../../components/Side/Sidebar'
import { Navbar } from '../../components/navbar/Navbar'
import {ListPP} from './components/table_personal/Table_Personal'
import './list.css'

function ListPersonalMain() {
  return (
    <div className='listContainerP'>
        <Sidebar/>
      <div className="listGeneralP">
        <Navbar/>
        <div className="listTitle">LISTADO DE PERSONAL</div>
        <div className="listBodyP">
            
            <ListPP />
        </div>
       </div>
        
    </div>
  )
}

export {ListPersonalMain}