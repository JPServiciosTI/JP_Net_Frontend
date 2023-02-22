import React from 'react'
import { FormGroup, Label, Input, Button } from "reactstrap";

const Step3 = props => {
    if (props.currentStep !== 3) {
      return null;
    }
  
    return (
      <>
      
        <FormGroup>
        <div className="personalC">
          <Label for="profesion">Profesión: <span>*</span></Label>
          <Input
            type="text"
            name="profesion"
            id="profesion"
            placeholder="Profesion"
            value={props.profesion} // Prop: los datos de entrada de correo electrónico
            onChange={props.handleChange} // Prop: Pone los datos en el estado
          />
          </div>
          <div className="personalC">
          <Label for="campodeestudio">Campo de estudio: <span>*</span></Label>
          <select name="campodeestudio" id="campodeestudio" value={props.campodeestudio} 
            onChange={props.handleChange}>
            <option value={props.optioncampo} 
            onChange={props.handleChange}>CIENCIAS DE LA SALUD</option>
            <option value={props.optioncampo} 
            onChange={props.handleChange}>CIENCIAS SOCIALES</option>
            <option value={props.optioncampo} 
            onChange={props.handleChange}>CIENCIAS FORMALES</option>
            <option value={props.optioncampo} 
            onChange={props.handleChange}>CIENCIAS INGENIERIA</option>
            <option value={props.optioncampo} 
            onChange={props.handleChange}>TENOLOGIA</option>
          </select>
          </div>
        <div className="personalC">
          <Label for="cargo">Cargo: <span>*</span></Label>
          <select name="cargo" id="cargo" value={props.cargo} 
            onChange={props.handleChange}>
            <option value={props.optioncargo} 
            onChange={props.handleChange}></option>
            <option value={props.optioncargo} 
            onChange={props.handleChange}></option>
          </select>
          </div>
          <div className="personalC">
          <Label for="aniosexperiencia">Años de experiencia: <span>*</span></Label>
          <Input
            type="number"
            name="aniosexperiencia"
            id="aniosexperiencia"
            placeholder="Años de experiencia"
            value={props.aniosexperiencia} // Prop: los datos de entrada de correo electrónico
            onChange={props.handleChange} // Prop: Pone los datos en el estado
          />
          </div>
          <div className="personalC">
          <Label for="sueldobase">Remuneración: <span>*</span></Label>
          <Input
            type="number"
            name="sueldobase"
            id="sueldobase"
            placeholder="Remuneración"
            value={props.sueldobase} // Prop: los datos de entrada de correo electrónico
            onChange={props.handleChange} // Prop: Pone los datos en el estado
          />
          </div>
          <div className="personalC">
          <Label for="fechainicialcontrato">Fecha Inicial de Contrato: <span>*</span></Label>
          <Input
            type="date"
            name="fechainicialcontrato"
            id="fechainicialcontrato"
            placeholder="Fecha Inicial de contrato:"
            value={props.fechainicialcontrato} // Prop: los datos de entrada de correo electrónico
            onChange={props.handleChange} // Prop: Pone los datos en el estado
          />
          </div>
          <div className="personalC">
          <Label for="fechafincontrato">Fecha fin de Contrato: <span>*</span></Label>
          <Input
            type="date"
            name="fechafincontrato"
            id="fechafincontrato"
            placeholder="Fecha fin de contrato:"
            value={props.fechafincontrato} // Prop: los datos de entrada de correo electrónico
            onChange={props.handleChange} // Prop: Pone los datos en el estado
          />
          </div>
        </FormGroup>
      </>
    );
  };
  
  export default Step3;