import React from "react";
import { FormGroup, Label, Input } from "reactstrap";

const Step1 = props => {
    if (props.currentStep !== 1) {
      return null;
    }z
  
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
            value={props.nombre} // Prop: los datos de entrada de correo electrónico
            onChange={props.handleChange} // Prop: Pone los datos en el estado
          />
          </div>
          <div className="personalC">
          <Label for="apellidoPaterno">Apellido Paterno: <span>*</span></Label>
          <Input
            type="text"
            name="apellidoPaterno"
            id="apellidoPaterno"
            placeholder="Apellido paterno"
            value={props.apellidoPaterno} // Prop: los datos de entrada de correo electrónico
            onChange={props.handleChange} // Prop: Pone los datos en el estado
          />
          </div>
          <div className="personalC">
          <Label for="apellidoMaterno">Apellido Materno: <span>*</span></Label>
          <Input
            type="text"
            name="apellidoMaterno"
            id="apellidoMaterno"
            placeholder="Apellido materno"
            value={props.apellidoMaterno} // Prop: los datos de entrada de correo electrónico
            onChange={props.handleChange} // Prop: Pone los datos en el estado
          />
          </div>
          <div className="personalC">
          <Label for="apellidoMaterno">DNI: <span>*</span></Label>
          <Input
            type="number"
            name="dni"
            id="dni"
            placeholder="DNI"
            value={props.dni} // Prop: los datos de entrada de correo electrónico
            onChange={props.handleChange} // Prop: Pone los datos en el estado
          />
          </div>
          <div className="personalC">
          <Label for="telefono">Telefono: <span>*</span></Label>
          <Input
            type="number"
            name="telefono"
            id="telefono"
            placeholder="Telefono"
            value={props.telefono} // Prop: los datos de entrada de correo electrónico
            onChange={props.handleChange} // Prop: Pone los datos en el estado
          />
          </div>
         <div className="personalC">
         <Label for="telefonofijo">Telefono fijo: <span>*</span></Label>
         <Input
            type="number"
            name="telefonofijo"
            id="telefonofijo"
            placeholder="Telefono fijo"
            value={props.telefonofijo} // Prop: los datos de entrada de correo electrónico
            onChange={props.handleChange} // Prop: Pone los datos en el estado
          />
         </div>
          <div className="personalC">
          <Label for="email">Email: <span>*</span></Label>
          <Input
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            value={props.email} // Prop: los datos de entrada de correo electrónico
            onChange={props.handleChange} // Prop: Pone los datos en el estado
          />
          </div>
           <div className="personalC">
           <Label for="estadocivil">Estado civil: <span>*</span></Label>
           <Input
            type="text"
            name="estadocivil"
            id="estadocivil"
            placeholder="Estado civil"
            value={props.estadocivil} // Prop: los datos de entrada de correo electrónico
            onChange={props.handleChange} // Prop: Pone los datos en el estado
          />
           </div>
           <div className="personalC">
           <Label for="nhijos">Número de hijos: <span>*</span></Label>
           <Input
            type="number"
            name="nhijos"
            id="nhijos"
            placeholder="Telefono fijo"
            value={props.nhijos} // Prop: los datos de entrada de correo electrónico
            onChange={props.handleChange} // Prop: Pone los datos en el estado
          />
           </div>
          <div className="personalC">
          <Label for="fechadenacimiento">Fecha nacimiento: <span>*</span></Label>
          <Input
            type="date"
            name="fechadenacimiento"
            id="fechadenacimiento"
            placeholder="Fecha de Nacimiento"
            value={props.fechadenacimiento} // Prop: los datos de entrada de correo electrónico
            onChange={props.handleChange} // Prop: Pone los datos en el estado
          />
          </div>
          <div className="personalC">
          <Label for="ubigeo">Ubigeo: <span>*</span></Label>
          <Input
            type="text"
            name="ubigeo"
            id="ubigeo"
            placeholder="Ubigeo"
            value={props.ubigeo} // Prop: los datos de entrada de correo electrónico
            onChange={props.handleChange} // Prop: Pone los datos en el estado
          />
          </div>
          
         
           <Input
            disabled
            type="text"
            name="departamento"
            id="departamento"
            placeholder="Departamento"
            value={props.departamento} // Prop: los datos de entrada de correo electrónico
            onChange={props.handleChange} // Prop: Pone los datos en el estado
          />
           <Input
            disabled
            type="text"
            name="provincia"
            id="provincia"
            placeholder="Provincia"
            value={props.provincia} // Prop: los datos de entrada de correo electrónico
            onChange={props.handleChange} // Prop: Pone los datos en el estado
          />
          <Input
            disabled
            type="text"
            name="distrito"
            id="distrito"
            placeholder="Distrito"
            value={props.distrito} // Prop: los datos de entrada de correo electrónico
            onChange={props.handleChange} // Prop: Pone los datos en el estado
          />
        </FormGroup>
      </>
    );
  };
  
  export default Step1;