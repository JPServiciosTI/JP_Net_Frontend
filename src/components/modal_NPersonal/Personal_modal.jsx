import React, { useState } from "react";
import {NuevaPersona1} from './NuevaPersona1'
import {NuevaPersona2} from './NuevaPersona2'
import {NuevaPersona3} from './NuevaPersona3'
import Personal_Registrado from "./Personal_Registrado";
import './style.css'



function Personal_modal() {
    const [page, setPage] = useState(0);
    const FormTitles = ["Paso 1", "Paso 2", "Paso 3", "Personal Registrado"];
    const [formData, setFormData] = useState({
      nombres: "",
      apPaterno: "",
      apMaterno: "",
      telefono: "",
      telfijo: "",
      email: "",
      estado_civil: "",
      numero_hijos: "",
      fec_nacimiento: "",
      ubigeo: "",
      departamento: "",
      provincia: "",
      distrito:"",
      tipo_via:"",
      nombre_via:"",
      tipo_localidad:"",
      nombre_localidad:"",
      contact_emergencia:"",
      brevete:"",
      tipo_sangre:"",
      alergias:"",
      fondo_pension:"",
      cispp:"",
      profesion:"",
      campo_estudio:"",
      grado_instruccion:"",
      cargo:"",
      anios_experiencia:"",
      remuneracion:"",
      fec_icontrato:"",
      fec_fcontrato:"",


    });

    const PageDisplay = () => {
      if (page === 0) {
        return <NuevaPersona1 formData={formData} setFormData={setFormData} />;
      } else if (page === 1) {
        return <NuevaPersona2 formData={formData} setFormData={setFormData} />;
      } else if (page ===2) {
        return <NuevaPersona3 formData={formData} setFormData={setFormData} />;
      }
      else{
       return <Personal_Registrado formData={formData}/>
      }
    };
  return (
    <div className="form">
    <div className="progressbar">
      <div
      style={{ width: page === 0 ? "33.3%" : page == 1 ? "66.6%" : "100%" }}
      ></div>
    </div>
    <div className="form-container">
        <div className="header">
        <h1>{FormTitles[page]}</h1>
        </div>
        <div className="body">
            {PageDisplay()}
        </div>
        <div className="footer">
            <button 
            disabled={page == 0}
            onClick={() => {
              setPage((currPage) => currPage - 1);
            }}
            >{page==3?"Cerrar":"Atrás"}
            </button>
            <button 
            onClick={()=>{
              if(page ===FormTitles.length-1){
                alert("Registro enviado")
              }else{
                setPage((currPage)=>currPage+1);
              }
                
            }}>{page === 2 ? "Registrar":"Cerrar" && page===0 ?"Siguiente":"Cerrar" && page===1?"Siguiente":"Cerrar"}
            </button>
        </div>
    </div>
   </div>
  );
  
}

export default Personal_modal