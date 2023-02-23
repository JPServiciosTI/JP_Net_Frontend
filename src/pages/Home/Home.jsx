import React from 'react'
import { Sidebar } from '../../components/Side/Sidebar'
import {SideProbably} from '../../components/Side/SideProbably'
import {Navbar} from '../../components/navbar/Navbar'
import './home.css'
function Home() {
  return (
    <div className="home">
      <Navbar/>
      
    <div className="homeContainer">
      <SideProbably/> 
       <div className="homeMain">
       container
       </div>
        
      </div>
    </div>
  )
}

export {Home}