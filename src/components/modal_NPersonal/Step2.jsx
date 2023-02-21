import React from 'react'
import { FormGroup, Label, Input } from "reactstrap";

const Step2 = props => {
    if (props.currentStep !== 2) {
      return null;
    }
  
    return (
      <>
        <FormGroup>
        <div className="personalC">
          <Label for="tipovia">Tipo de vía: <span>*</span></Label>
          <select name="brevete" id="brevete">
            <option value="">JR</option>
            <option value="">CL</option>
            <option value="">AV</option>
            <option value="">PSJE</option>
            <option value="">MZ</option>
            <option value="">PROLONG</option>
            <option value="">BLOCK</option>
            <option value="">CONDOMINIO</option>
            <option value="">PARQUE</option>
            <option value="">MALECON</option>
            <option value="">ALAMEDA</option>
            <option value="">CARRETERA</option>
            <option value="">AUTOPISTA</option>
            <option value="">C.P.</option>
            <option value="">CASERIO</option>
            <option value="">PLAZA</option>
            <option value="">OVALO</option>
            <option value="">BOULEVARD</option>
            <option value="">PASEO</option>
            <option value="">EDIFICIO</option>
            <option value="">SUPERMZ</option>
          </select>
          </div>

          <div className="personalC">
          <Label for="nombredevia">Nombre de vía: <span>*</span></Label>
          <Input
            type="text"
            name="nombredevia"
            id="nombredevia"
            placeholder="Contacto de emergencia"
            value={props.nombredevia} // Prop: los datos de entrada de correo electrónico
            onChange={props.handleChange} // Prop: Pone los datos en el estado
          />
          </div>
          <div className="personalC">
          <Label for="tipolocalidad">Tipo localidad: <span>*</span></Label>
          <select name="tipolocalidad" id="tipolocalidad">
            <option value="">URB</option>
            <option value="">AAHH</option>
            <option value="">PPJJ</option>
            <option value="">ASOC</option>
            <option value="">ZONA</option>
            <option value="">GRUPO</option>
            <option value="">SECTOR</option>
            <option value="">CONJ. HAB</option>
            <option value="">RESIDENNC.</option>
            <option value="">COOP.</option>
            <option value="">UNID. VEC</option>
            <option value="">CASERIO</option>
            <option value="">CAMPAMENTO</option>
            <option value="">FUNDO</option>
            <option value="">COMUNIDAD</option>
          </select>
          </div>

          <div className="personalC">
          <Label for="nombrelocalidad">Nombre localidad: <span>*</span></Label>
          <Input
            type="text"
            name="nombrelocalidad"
            id="nombrelocalidad"
            placeholder="Nombre localidad"
            value={props.nombrelocalidad} // Prop: los datos de entrada de correo electrónico
            onChange={props.handleChange} // Prop: Pone los datos en el estado
          />
          </div>
        <div className="personalC">
          <Label for="contactodeemergencia">Contacto de emergencia: <span>*</span></Label>
          <Input
            type="text"
            name="contactodeemergencia"
            id="contactodeemergencia"
            placeholder="Contacto de emergencia"
            value={props.contactodeemergencia} // Prop: los datos de entrada de correo electrónico
            onChange={props.handleChange} // Prop: Pone los datos en el estado
          />
          </div>
          <div className="personalC">
          <Label for="numerodeemergencia">Número de emergencia: <span>*</span></Label>
          <Input
            type="text"
            name="numerodeemergencia"
            id="numerodeemergencia"
            placeholder="Número de emergencia"
            value={props.numerodeemergencia} // Prop: los datos de entrada de correo electrónico
            onChange={props.handleChange} // Prop: Pone los datos en el estado
          />
          </div>
          <div className="personalC">
          <Label for="brevete">Brevete: <span>*</span></Label>
          <select name="brevete" id="brevete">
            <option value="">A-1</option>
            <option value="">A-2A</option>
            <option value="">A-2B</option>
            <option value="">A-3A</option>
            <option value="">A-3B</option>
            <option value="">A-3C</option>
            <option value="">B-1</option>
            <option value="">B-2A</option>
            <option value="">B-2B</option>
            <option value="">B-2C</option>
          </select>
          </div>
          <div className="personalC">
          <Label for="tipodesangre">Tipo de sangre: <span>*</span></Label>
          <select name="tipodesangre" id="tipodesangre">
            <option value="">O+</option>
            <option value="">O-</option>
            <option value="">A+</option>
            <option value="">A-</option>
            <option value="">B+</option>
            <option value="">B-</option>
            <option value="">AB+</option>
            <option value="">AB-</option>
          </select>
          </div>
          <div className="personalC">
          <Label for="alergias">Alergias: <span>*</span></Label>
          <Input
            type="text"
            name="alergias"
            id="alergias"
            placeholder="Alergias"
            value={props.alergias} // Prop: los datos de entrada de correo electrónico
            onChange={props.handleChange} // Prop: Pone los datos en el estado
          />
          </div>
          <div className="personalC">
          <Label for="idfondopension">Fonde de Pensión: <span>*</span></Label>
          <select name="idfondopension" id="idfondopension">
            <option value="">ONP</option>
            <option value="">AFP INTEGRA</option>
            <option value="">AFP HABITAD</option>
            <option value="">AFP PRIMA</option>
            <option value="">AFP PROFUTURO</option>
          </select>
          </div>
          <div className="personalC">
          <Label for="cispp">CISPP: <span>*</span></Label>
          <Input
            type="text"
            name="cispp"
            id="cispp"
            placeholder="CISPP"
            value={props.cispp} // Prop: los datos de entrada de correo electrónico
            onChange={props.handleChange} // Prop: Pone los datos en el estado
          />
          </div>
        </FormGroup>
      </>
    );
  };
  
  export default Step2;