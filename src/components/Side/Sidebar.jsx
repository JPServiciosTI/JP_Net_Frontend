import React from 'react'
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { BiAnalyse, BiSearch } from "react-icons/bi";
import {
  AiOutlineTeam,
  AiOutlineFundProjectionScreen,
  AiFillSetting,
} from "react-icons/ai";
import { FaBars, FaHome, FaLock, FaMoneyBill, FaUser } from "react-icons/fa";
import {
  BsFillGridFill,
  BsFillArrowDownCircleFill,
  BsFillDiagram2Fill,
  BsWalletFill,
  BsFillFileEarmarkBarGraphFill,
} from "react-icons/bs";
import { ImExit } from "react-icons/im";
import { MdOutlineSecurity } from "react-icons/md";
import { AnimatePresence, motion } from "framer-motion";
import { SubMenu } from './SubMenu'
import './Sidebar.css';
const routes = [
  {
    path: "/home",
    name: "Inicio",
    icon: <BsFillGridFill />,
  },
  {
    path: "",
    name: "Recursos Humanos",
    icon: <AiOutlineTeam/>,
    subRoutes: [
      {
        path: "",
        name: "Nuevo Trabajador ",
        icon: <AiOutlineTeam />,
      },
      {
        path: "",
        name: "Nuevo Candidato",
        icon: <AiOutlineTeam />,
      },
      {
        path: "",
        name: "Listado Trabajadores",
        icon: <AiOutlineTeam />,
      },
      {
        path: "",
        name: "Tareo",
        icon: <AiOutlineTeam />,
      },
    ],
  },
  {
    path: "",
    name: "Planeamiento",
    icon: <BsFillDiagram2Fill />,
    exact: true,
    subRoutes: [
      {
        path: "",
        name: "Opción 1",
        icon: <BsFillDiagram2Fill />,
      },
      {
        path: "",
        name: "Opción 2",
        icon: <BsFillDiagram2Fill />,
      },
    ],
  },
  {
    path: "",
    name: "Contabilidad",
    icon: <BsWalletFill />,
    exact: true,
    subRoutes: [
      {
        path: "",
        name: "Opción 1",
        icon: <BsWalletFill />,
      },
      {
        path: "",
        name: "Opción 2",
        icon: <BsWalletFill />,
      },
    ],
  },
  {
    path: "",
    name: "Proyectos",
    icon: <AiOutlineFundProjectionScreen />,
    exact: true,
    subRoutes: [
      {
        path: "",
        name: "Opción 1",
        icon: <AiOutlineFundProjectionScreen />,
      },
      {
        path: "",
        name: "Opción 2",
        icon: <AiOutlineFundProjectionScreen />,
      },
    ],
  },
  {
    path: "",
    name: "Logística",
    icon: <BsFillFileEarmarkBarGraphFill />,
    exact: true,
    subRoutes: [
      {
        path: "",
        name: "Opción 1",
        icon: <BsFillFileEarmarkBarGraphFill />,
      },
      {
        path: "",
        name: "Opción 2",
        icon: <BsFillFileEarmarkBarGraphFill />,
      },
    ],
  },
  {
    path: "",
    name: "Seguridad",
    icon: <MdOutlineSecurity />,
    exact: true,
    subRoutes: [
      {
        path: "",
        name: "Opción 1",
        icon: <MdOutlineSecurity />,
      },
      {
        path: "",
        name: "Opción 2",
        icon: <MdOutlineSecurity />,
      },
    ],
  },
  {
    path: "",
    name: "Configuración",
    icon: <AiFillSetting />,
  },
];





const Sidebar=()=> {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);
  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "140px",
      padding: "5px 15px",
      transition: {
        duration: 0.2,
      },
    },
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "100%",
      transition: {
        duration: 0.5,
      },
    },
  };
    
  return (
    <>
      <div className="main-container">
        <motion.div
          animate={{
            width: isOpen ? "260px" : "45px",

            transition: {
              duration: 2,
              type: "spring",
              damping: 10,
            },
          }}
          className={`sidebar `}
        >
          <div className="top_section">
            <AnimatePresence>
              {isOpen && (
                <motion.h1
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="logo"
                > <span>JP</span>Ingeneria y Servicios
                </motion.h1>
              )}
            </AnimatePresence>
          </div>
          <section className="routes">
            {routes.map((route, index) => {
              if (route.subRoutes) {
                return (
                  <SubMenu
                    setIsOpen={setIsOpen}
                    route={route}
                    showAnimation={showAnimation}
                    isOpen={isOpen}
                    
                  />
                  
                );
              }

              return (
                <NavLink
                  to={route.path}
                  key={index}
                  className="link"
                  activeClassName="active"
                >
                  <div className="iconSide">{route.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              );
            })}
            <hr />

            <button className='btnExit'><ImExit /> Salir</button>
          </section>
        </motion.div>
      </div>
    </>
  );
}

export { Sidebar };
