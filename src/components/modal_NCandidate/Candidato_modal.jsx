import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import Select from 'react-select';
import { FormGroup, Label, Input, Button } from "reactstrap";
import { get, post } from '../../services/api/api.service';

import './ncandidato.css'

function Candidato_modal() {

  let navigate = useNavigate();
  const [nombre, setNombre] = useState();
  const [apellidoPaterno, setApellidoPaterno] = useState();
  const [apellidoMaterno, setApellidoMaterno] = useState();
  const [dni, setDNI] = useState();
  const [telefono, setTelefono] = useState();
  const [email, setEmail] = useState();
  const [salarioTentativo, setSalarioTentativo] = useState();
  const [cargOptar, setCargoOptar] = useState(1);
  const [mesesDeExperiencia, setMesesDeExperiencia] = useState(0);
  const [linkCV, setLinkCV] = useState('No se Registro');
  
  const [DatosCargos,setDatosCargos] = useState([]);

  const getCargos = async () => {
    try {
      const datos = await get({
        url: "/empleado/cargos",
        data: {},
      });
      //console.log(datos['id'][0]);

      setDatosCargos(datos["id"][0]);
    } catch (error) {
      console.log(error);
    }
  };
let cargado = false;
  useEffect(() => {
    if(!cargado){
      cargado = true;
      getCargos();
      //console.log(DatosCargos)
    }
    
  },[]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const registro = await post({
        url: "/candidato/register",
        data: {
          nombre: nombre,  
          apellidoPaterno: apellidoPaterno,
          apellidoMaterno: apellidoMaterno,
          dni: dni,
          telefono: telefono,
          email: email,
          salarioTentativo: salarioTentativo,
          cargOptar: cargOptar,
          mesesDeExperiencia: mesesDeExperiencia,
          linkCV: linkCV
        },
      });
      //console.log(registro);
      if (registro.id === null ||  registro.status == null || registro.status == "error") {
        alert("Dato Incorrectos");
        return null;
      } else {

        navigate("/home");
      }
    } catch (error) {
      alert("Dato Incorrectos");
      //console.error(error);
    }
  };
  return (
    <>
    <FormGroup>
      <div className="personalC">
      <Label for="nombre">Nombres: <span>*</span></Label>
      <Input
        type="text"
        name="nombre"
        id="nombre"
        placeholder="Nombres"
        onChange={(e)=>{
          setNombre(e.target.value);
          //console.log(nombre);
        }}
      />
      </div>
      <div className="personalC">
      <Label for="apellidoPaterno">Apellido Paterno: <span>*</span></Label>
      <Input
        type="text"
        name="apellidoPaterno"
        id="apellidoPaterno"
        placeholder="Apellido paterno"
        onChange={(e)=>{
          setApellidoPaterno(e.target.value);
          //console.log(apellidoPaterno);
        }}
      />
      </div>
      <div className="personalC">
      <Label for="apellidoMaterno">Apellido Materno: <span>*</span></Label>
      <Input
        type="text"
        name="apellidoMaterno"
        id="apellidoMaterno"
        placeholder="Apellido materno"
        onChange={(e)=>{
          setApellidoMaterno(e.target.value);
          //console.log(apellidoMaterno);
        }}
      />
      </div>
      <div className="personalC">
      <Label for="apellidoMaterno">DNI: <span>*</span></Label>
      <Input
        type="number"
        name="dni"
        id="dni"
        placeholder="DNI"
        onChange={(e)=>{
          setDNI(e.target.value);
          //.log(dni);
        }}
      />
      </div>
      <div className="personalC">
      <Label for="telefono">Telefono: <span>*</span></Label>
      <Input
        type="number"
        name="telefono"
        id="telefono"
        placeholder="Telefono"
        onChange={(e)=>{
          setTelefono(e.target.value);
          //console.log(telefono);
        }}
      />
      </div>
      <div className="personalC">
      <Label for="email">Email: <span>*</span></Label>
      <Input
        type="text"
        name="email"
        id="email"
        placeholder="Email"
        onChange={(e)=>{
          setEmail(e.target.value);
          //console.log(email);
        }}
      />
      </div>   
      <div className="personalC">
      <Label for="email">Cargo a optar: <span>*</span></Label>
      <select onChange={(e)=>{
          setCargoOptar(e.target.value);
          //console.log(cargOptar);
        }}>
        {
          DatosCargos.map( (elem) =>
            <option value={elem.idCargo} >{elem.NombreCargo}</option>
          )
        }
        
      </select>
      

      </div> 
      <div className="personalC">
      <Label for="email">Pretensión Salarial: <span>*</span></Label>
      <Input
        type="number"
        name="pretensionsalarial"
        id="pretensionsalarial"
        placeholder="Pretension salarial"
        onChange={(e)=>{
          setSalarioTentativo(e.target.value);
          console.log(salarioTentativo);
        }}
      />
      </div>

      <div className="personalC">
      <Label for="meses">Meses de Experiencia:<span>*</span></Label>
      <Input
        type="number"
        name="meses"
        id="meses"
        placeholder="Meses de Experiencia"
        onChange={(e)=>{
          setMesesDeExperiencia(e.target.value);
          console.log(mesesDeExperiencia);
        }}
      />
      </div>
      <div className="personalC">
      <Label for="linkCv">Link Del CV en Drive: <span>*</span></Label>
      <Input
        type="text"
        name="linkCv"
        id="linkCv"
        placeholder="Ingrear Link de Drive"
        onChange={(e)=>{
          setLinkCV(e.target.value);
          console.log(linkCV);
        }}
        required
      />
      </div> 
    </FormGroup>
    <div className="nbutton">
    <Button color='danger'>
      Cancelar
    </Button>
    <Button color='success' onClick={handleSubmit}>
      Registrar
    </Button>
    </div>
    
  </>
  )
}

export default Candidato_modal