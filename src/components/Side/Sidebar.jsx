import React from "react";
import {
  AiOutlineTeam,
  AiOutlineFundProjectionScreen,
  AiFillSetting,
} from "react-icons/ai";
import {
  BsFillGridFill,
  BsFillArrowDownCircleFill,
  BsFillDiagram2Fill,
  BsWalletFill,
  BsFillFileEarmarkBarGraphFill,
} from "react-icons/bs";
import { ImExit } from "react-icons/im";
import { MdOutlineSecurity } from "react-icons/md";
import "./Sidebar.css";




function Sidebar() {
    
let arrow = document.querySelectorAll(".arrow");
for (var i = 0; i < arrow.length; i++) {
  arrow[i].addEventListener("click", (e)=>{
 let arrowParent = e.target.parentElement.parentElement;//selecting main parent of arrow
 arrowParent.classList.toggle("showMenu");
  });
}

    
  return (
    <div className="containerSide">
      <div className="sidebar close">
        <div className="logo-details">
        <i>JP</i>
          <span className="logo_name">Ingenieria y Servicios</span>
        </div>
        <ul class="nav-links">
          <li>
            <a href="#">
                <i><BsFillGridFill /></i>
              
              <span class="link_name">Inicio</span>
            </a>
            <ul class="sub-menu blank">
              <li>
                <a class="link_name" href="#">
                  Inicio
                </a>
              </li>
            </ul>
          </li>
          <li>
            <div class="iocn-link">
              <a href="#">
                <i className="blank" >
                <AiOutlineTeam />
                </i>
                <span class="link_name">Recuros Humanos</span>
              </a>
              <i className="arrow">
                <BsFillArrowDownCircleFill />
              </i>
            </div>
            <ul class="sub-menu">
              <li>
                <a class="link_name" href="#">
                  Recursos Humanos
                </a>
              </li>
              <li>
                <a href="#">Nuevo Personal</a>
              </li>
              <li>
                <a href="#">Nuevo Candidato</a>
              </li>
              <li>
                <a href="#">Listado Personal</a>
              </li>
              <li>
                <a href="#">Tareo</a>
              </li>
            </ul>
          </li>
          <li>
            <div class="iocn-link">
              <a href="#">
                <i>
                  <BsFillDiagram2Fill />
                </i>
                <span class="link_name">Planeamiento</span>
              </a>
              <i className="arrow">
                <BsFillArrowDownCircleFill />
              </i>
            </div>
            <ul class="sub-menu">
              <li>
                <a class="link_name" href="#">
                  Planeamiento
                </a>
              </li>
              <li>
                <a href="#">Opción 1</a>
              </li>
              <li>
                <a href="#">Opción 2 </a>
              </li>
              <li>
                <a href="#">Opción 3</a>
              </li>
            </ul>
          </li>
          <li>
            <div class="iocn-link">
              <a href="#">
                <i>
                  <AiOutlineFundProjectionScreen />
                </i>
                <span class="link_name">Proyectos</span>
              </a>
              <i className="arrow">
                <BsFillArrowDownCircleFill />
              </i>
            </div>
            <ul class="sub-menu">
              <li>
                <a class="link_name" href="#">
                  Proyectos
                </a>
              </li>
              <li>
                <a href="#">Opción 1</a>
              </li>
              <li>
                <a href="#">Opción 2 </a>
              </li>
              <li>
                <a href="#">Opción 3</a>
              </li>
            </ul>
          </li>
          <li>
            <div class="iocn-link">
              <a href="#">
                <i>
                  <BsFillFileEarmarkBarGraphFill />{" "}
                </i>
                <span class="link_name">Logistica</span>
              </a>
              <i className="arrow">
                <BsFillArrowDownCircleFill />
              </i>
            </div>
            <ul class="sub-menu">
              <li>
                <a class="link_name" href="#">
                  Logistica
                </a>
              </li>
              <li>
                <a href="#">Opción 1</a>
              </li>
              <li>
                <a href="#">Opción 2 </a>
              </li>
              <li>
                <a href="#">Opción 3</a>
              </li>
            </ul>
          </li>
          <li>
            <div class="iocn-link">
              <a href="#">
                <i>
                  <BsWalletFill />
                </i>
                <span class="link_name">Contabilidad</span>
              </a>
              <i className="arrow">
                <BsFillArrowDownCircleFill />
              </i>
            </div>
            <ul class="sub-menu">
              <li>
                <a class="link_name" href="#">
                  Contabilidad
                </a>
              </li>
              <li>
                <a href="#">Opción 1</a>
              </li>
              <li>
                <a href="#">Opción 2 </a>
              </li>
              <li>
                <a href="#">Opción 3</a>
              </li>
            </ul>
          </li>
          <li>
            <div class="iocn-link">
              <a href="#">
                <i>
                  <MdOutlineSecurity />
                </i>
                <span class="link_name">Seguridad</span>
              </a>
              <i className="arrow">
                <BsFillArrowDownCircleFill />
              </i>
            </div>
            <ul class="sub-menu">
              <li>
                <a class="link_name" href="#">
                  Seguridad
                </a>
              </li>
              <li>
                <a href="#">Opción 1</a>
              </li>
              <li>
                <a href="#">Opción 2 </a>
              </li>
              <li>
                <a href="#">Opción 3</a>
              </li>
            </ul>
          </li>
          <li>
            <hr/>
            <a href="#">
              <i>
                {" "}
                <AiFillSetting />{" "}
              </i>
              <span class="link_name">Ajustes</span>
            </a>
            <ul class="sub-menu blank">
              <li>
                <a class="link_name" href="#">
                  Ajustes
                </a>
              </li>
            </ul>
          </li>
          <li>
            <div class="profile-details">
              <div class="profile-content"></div>
              <div class="name-job">
                <div class="profile_name">Salir</div>
              </div>
              <i ><ImExit/></i>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export { Sidebar };
