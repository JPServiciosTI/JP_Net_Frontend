import React from 'react'
import { Sidebar } from '../../components/Side/Sidebar'
import {Navbar} from '../../components/navbar/Navbar'
import './home.css'
function Home() {
  return (
    <div className="home">
      <Sidebar/>
      
    <div className="homeContainer">
      <Navbar/> 
        
      </div>
    </div>
  )
}

export {Home}