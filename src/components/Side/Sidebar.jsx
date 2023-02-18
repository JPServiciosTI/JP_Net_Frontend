import React from 'react'
import {FaAddressBook, FaClipboardList, FaListUl, FaPlusCircle } from "react-icons/fa";
import { BiExit } from "react-icons/bi";

import './Sidebar.css'

function Sidebar() {
  return (
    <div class='sidebar'>
        <div class="top"><span className="logo">JP.NET</span></div>
        <hr />
        <div class="center">
            <ul>
              <p className="title">Recurso Humanos</p>
                <li>
                <FaAddressBook className='icon'/>
                <span>Ingresar Trabajador</span>
                </li>
                <li>
                  <FaPlusCircle className='icon'/>
                <span>Ingresar Candidato</span>
                </li> 
                <li>
                  <FaListUl className='icon'/>
                <span>Lista Trabajadores</span>
                </li> 
                <li>
                  <FaClipboardList className='icon'/>
                <span>Tareos</span>
                </li>  
              <p className="title">Planeamiento</p>
                <li>
                <FaAddressBook className='icon'/>
                <span>Ingresar Trabajador</span>
                </li>
                <li>
                <FaAddressBook className='icon'/>
                <span>Ingresar Candidato</span>
                </li>
              <p className="title">Contabilidad</p>
              <li>
              <FaAddressBook className='icon'/>
                <span>Ingresar Trabajador</span>
                </li>
                <li>
                <FaAddressBook className='icon'/>
                <span>Ingresar Candidato</span>
                </li>
                <p className="title">Proyectos</p>
              <li>
              <FaAddressBook className='icon'/>
                <span>Ingresar Trabajador</span>
                </li>
                <li>
                <FaAddressBook className='icon'/>
                <span>Ingresar Candidato</span>
                </li>
                <p className="title">Logistica</p>
              <li>
              <FaAddressBook className='icon'/>
                <span>Ingresar Trabajador</span>
                </li>
                <li>
                <FaAddressBook className='icon'/>
                <span>Ingresar Candidato</span>
                </li>
                <hr />
                <li>
                <BiExit className='icon'/>
                <span>Salir</span>
                </li>
            </ul>
        </div>
        
        <div class="bottom"></div>
    </div>
  )
}

export {Sidebar}