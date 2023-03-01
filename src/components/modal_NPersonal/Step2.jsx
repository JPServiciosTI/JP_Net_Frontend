import React from "react";
import { FormGroup, Label, Input } from "reactstrap";

const Step2 = (props) => {
  if (props.currentStep !== 2) {
    return null;
  }

  return (
    <>
      <FormGroup>
        <div className="personalC">
          <Label for="tipovia">
            Tipo de vía: <span>*</span>
          </Label>
          <select
            name="tipodevia"
            id="tipodevia"
            value={props.tipodevia}
            onChange={props.handleChange}
          >
            <option value="" disabled selected hidden>
              Seleccionar
            </option>
            <option value={props.optiontipovia} onChange={props.handleChange}>
              JR
            </option>
            <option value={props.optiontipovia} onChange={props.handleChange}>
              CL
            </option>
            <option value={props.optiontipovia} onChange={props.handleChange}>
              AV
            </option>
            <option value={props.optiontipovia} onChange={props.handleChange}>
              PSJE
            </option>
            <option value={props.optiontipovia} onChange={props.handleChange}>
              MZ
            </option>
            <option value={props.optiontipovia} onChange={props.handleChange}>
              PROLONG
            </option>
            <option value={props.optiontipovia} onChange={props.handleChange}>
              BLOCK
            </option>
            <option value={props.optiontipovia} onChange={props.handleChange}>
              CONDOMINIO
            </option>
            <option value={props.optiontipovia} onChange={props.handleChange}>
              PARQUE
            </option>
            <option value={props.optiontipovia} onChange={props.handleChange}>
              MALECON
            </option>
            <option value={props.optiontipovia} onChange={props.handleChange}>
              ALAMEDA
            </option>
            <option value={props.optiontipovia} onChange={props.handleChange}>
              CARRETERA
            </option>
            <option value={props.optiontipovia} onChange={props.handleChange}>
              AUTOPISTA
            </option>
            <option value={props.optiontipovia} onChange={props.handleChange}>
              C.P.
            </option>
            <option value={props.optiontipovia} onChange={props.handleChange}>
              CASERIO
            </option>
            <option value={props.optiontipovia} onChange={props.handleChange}>
              PLAZA
            </option>
            <option value={props.optiontipovia} onChange={props.handleChange}>
              OVALO
            </option>
            <option value={props.optiontipovia} onChange={props.handleChange}>
              BOULEVARD
            </option>
            <option value={props.optiontipovia} onChange={props.handleChange}>
              PASEO
            </option>
            <option value={props.optiontipovia} onChange={props.handleChange}>
              EDIFICIO
            </option>
            <option value={props.optiontipovia} onChange={props.handleChange}>
              SUPERMZ
            </option>
          </select>
        </div>

        <div className="personalC">
          <Label for="nombredevia">
            Nombre de vía: <span>*</span>
          </Label>
          <Input
            type="text"
            name="nombredevia"
            id="nombredevia"
            placeholder="Nombre de la vía"
            value={props.nombredevia}
            onChange={props.handleChange}
          />
        </div>
        <div className="personalC">
          <Label for="tipolocalidad">
            Tipo localidad: <span>*</span>
          </Label>
          <select
            name="tipolocalidad"
            id="tipolocalidad"
            value={props.tipolocalidad}
            onChange={props.handleChange}
          >
            <option value="" disabled selected hidden>
              Seleccionar
            </option>
            <option value={props.optionlocalidad} onChange={props.handleChange}>
              URB
            </option>
            <option value={props.optionlocalidad} onChange={props.handleChange}>
              AAHH
            </option>
            <option value={props.optionlocalidad} onChange={props.handleChange}>
              PPJJ
            </option>
            <option value={props.optionlocalidad} onChange={props.handleChange}>
              ASOC
            </option>
            <option value={props.optionlocalidad} onChange={props.handleChange}>
              ZONA
            </option>
            <option value={props.optionlocalidad} onChange={props.handleChange}>
              GRUPO
            </option>
            <option value={props.optionlocalidad} onChange={props.handleChange}>
              SECTOR
            </option>
            <option value={props.optionlocalidad} onChange={props.handleChange}>
              CONJ. HAB
            </option>
            <option value={props.optionlocalidad} onChange={props.handleChange}>
              RESIDENNC.
            </option>
            <option value={props.optionlocalidad} onChange={props.handleChange}>
              COOP.
            </option>
            <option value={props.optionlocalidad} onChange={props.handleChange}>
              UNID. VEC
            </option>
            <option value={props.optionlocalidad} onChange={props.handleChange}>
              CASERIO
            </option>
            <option value={props.optionlocalidad} onChange={props.handleChange}>
              CAMPAMENTO
            </option>
            <option value={props.optionlocalidad} onChange={props.handleChange}>
              FUNDO
            </option>
            <option value={props.optionlocalidad} onChange={props.handleChange}>
              COMUNIDAD
            </option>
          </select>
        </div>

        <div className="personalC">
          <Label for="nombrelocalidad">
            Nombre localidad: <span>*</span>
          </Label>
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
          <Label for="contactodeemergencia">
            Contacto de emergencia: <span>*</span>
          </Label>
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
          <Label for="numerodeemergencia">
            Número de emergencia: <span>*</span>
          </Label>
          <Input
            type="text"
            name="numerodeemergencia"
            id="numerodeemergencia"
            placeholder="Número de emergencia"
            value={props.numerodeemergencia} // Prop: los datos de entrada de correo electrónico
            onChange={props.handleChange} // Prop: Pone los datos en el estado
          />
        </div>
        <div className="personalC smallp">
          <Label for="brevete">
            Brevete: <span>*</span>
          </Label>
          <select
            name="brevete"
            id="brevete"
            value={props.brevete}
            onChange={props.handleChange}
          >
            <option value="" disabled selected hidden>
              Seleccionar
            </option>
            <option value={props.optionbrevete} onChange={props.handleChange}>
              A-1
            </option>
            <option value={props.optionbrevete} onChange={props.handleChange}>
              A-2A
            </option>
            <option value={props.optionbrevete} onChange={props.handleChange}>
              A-2B
            </option>
            <option value={props.optionbrevete} onChange={props.handleChange}>
              A-3A
            </option>
            <option value={props.optionbrevete} onChange={props.handleChange}>
              A-3B
            </option>
            <option value={props.optionbrevete} onChange={props.handleChange}>
              A-3C
            </option>
            <option value={props.optionbrevete} onChange={props.handleChange}>
              B-1
            </option>
            <option value={props.optionbrevete} onChange={props.handleChange}>
              B-2A
            </option>
            <option value={props.optionbrevete} onChange={props.handleChange}>
              B-2B
            </option>
            <option value={props.optionbrevete} onChange={props.handleChange}>
              B-2C
            </option>
          </select>
        </div>
        <div className="personalC smallp">
          <Label for="idTipoDeSangre">
            Tipo de sangre: <span>*</span>
          </Label>
          <select
            name="idTipoDeSangre"
            id="idTipoDeSangre"
            value={props.idTipoDeSangre}
            onChange={props.handleChange}
          >
            <option value="" hidden>
              Seleccionar
            </option>
            <option
              value={props.optionTipodeSangre}
              onChange={props.handleChange}
            >
              O+
            </option>
            <option
              value={props.optionTipodeSangre}
              onChange={props.handleChange}
            >
              O-
            </option>
            <option
              value={props.optionTipodeSangre}
              onChange={props.handleChange}
            >
              A+
            </option>
            <option
              value={props.optionTipodeSangre}
              onChange={props.handleChange}
            >
              A-
            </option>
            <option
              value={props.optionTipodeSangre}
              onChange={props.handleChange}
            >
              B+
            </option>
            <option
              value={props.optionTipodeSangre}
              onChange={props.handleChange}
            >
              B-
            </option>
            <option
              value={props.optionTipodeSangre}
              onChange={props.handleChange}
            >
              AB+
            </option>
            <option
              value={props.optionTipodeSangre}
              onChange={props.handleChange}
            >
              AB-
            </option>
          </select>
        </div>
        <div className="personalC">
          <Label for="alergias">Alergias:</Label>
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
          <Label for="idfondopension">
            Fonde de Pensión: <span>*</span>
          </Label>
          <select
            name="idfondodepension"
            id="idfondodepension"
            value={props.idfondodepension}
            onChange={props.handleChange}
          >
            <option value="" disabled selected hidden>
              Seleccionar
            </option>
            <option value={props.optionfondo} onChange={props.handleChange}>
              ONP
            </option>
            <option value={props.optionfondo} onChange={props.handleChange}>
              AFP INTEGRA
            </option>
            <option value={props.optionfondo} onChange={props.handleChange}>
              AFP HABITAD
            </option>
            <option value={props.optionfondo} onChange={props.handleChange}>
              AFP PRIMA
            </option>
            <option value={props.optionfondo} onChange={props.handleChange}>
              AFP PROFUTURO
            </option>
          </select>
        </div>
        <div className="personalC">
          <Label for="cispp">CISPP: </Label>
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
