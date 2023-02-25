import React from 'react'
import { FormGroup, Label, Input, Button } from "reactstrap";

import './ncandidato.css'

function Candidato_modal() {
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
      />
      </div>
      <div className="personalC">
      <Label for="apellidoPaterno">Apellido Paterno: <span>*</span></Label>
      <Input
        type="text"
        name="apellidoPaterno"
        id="apellidoPaterno"
        placeholder="Apellido paterno"
      />
      </div>
      <div className="personalC">
      <Label for="apellidoMaterno">Apellido Materno: <span>*</span></Label>
      <Input
        type="text"
        name="apellidoMaterno"
        id="apellidoMaterno"
        placeholder="Apellido materno"
      />
      </div>
      <div className="personalC">
      <Label for="apellidoMaterno">DNI: <span>*</span></Label>
      <Input
        type="number"
        name="dni"
        id="dni"
        placeholder="DNI"
      />
      </div>
      <div className="personalC">
      <Label for="telefono">Telefono: <span>*</span></Label>
      <Input
        type="number"
        name="telefono"
        id="telefono"
        placeholder="Telefono"
      />
      </div>
      <div className="personalC">
      <Label for="email">Email: <span>*</span></Label>
      <Input
        type="text"
        name="email"
        id="email"
        placeholder="Email"
      />
      </div>   
      <div className="personalC">
      <Label for="email">Cargo a optar: <span>*</span></Label>
      <select name="cargooptar" id="cargooptar">
        <option value=""></option>
        <option value=""></option>
      </select>
      </div> 
      <div className="personalC">
      <Label for="email">Pretensión Salarial: <span>*</span></Label>
      <Input
        type="number"
        name="pretensionsalarial"
        id="pretensionsalarial"
        placeholder="Pretension salarial"
      />
      </div> 
    </FormGroup>
    <div className="nbutton">
    <Button color='danger'>
      Cancelar
    </Button>
    <Button color='success'>
      Registrar
    </Button>
    </div>
    
  </>
  )
}

export default Candidato_modal