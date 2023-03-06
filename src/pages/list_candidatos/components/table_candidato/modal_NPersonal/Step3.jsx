import React, { useEffect, useState } from "react";
import { FormGroup, Label, Input, Button } from "reactstrap";
import Select from "react-select";
import { get } from "../../../../../services/api/api.service";
const Step3 = (props) => {
  const [DatosCargos, setDatosCargos] = useState([]);

  const getCargos = async () => {
    try {
      const datos = await get({
        url: "/empleado/cargos",
        data: {},
      });
      //console.log(datos['id'][0]);

      setDatosCargos(datos["id"]);
      console.log("ss",DatosCargos)
    } catch (error) {
      console.log(error);
    }
  };

  let cargado = false;
  useEffect(() => {
    if (!cargado) {
      cargado = true;
      getCargos();
    }
  }, []);

  const handleSelectChange = (event) => {
    let ss = event.target.value;
    props.idcargo =ss;

    console.log("Dentro",event.target.value);
  };

  if (props.currentStep !== 3) {
    return null;
  }

  return (
    <>
      <FormGroup>
        <div className="personalC">
          <Label for="profesion">
            Profesión: <span>*</span>
          </Label>
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
          <Label for="campodeestudio">
            Campo de estudio: <span>*</span>
          </Label>
          <select
            name="campodeestudio"
            id="campodeestudio"
            value={props.campodeestudio}
            onChange={props.handleChange}
          >
            <option value="" disabled selected hidden>
              Seleccionar
            </option>
            <option value={1} onChange={props.handleChange}>
              CIENCIAS DE LA SALUD
            </option>
            <option value={2} onChange={props.handleChange}>
              CIENCIAS SOCIALES
            </option>
            <option value={3} onChange={props.handleChange}>
              CIENCIAS FORMALES
            </option>
            <option value={4} onChange={props.handleChange}>
              INGENIERIA
            </option>
            <option value={5} onChange={props.handleChange}>
              TECNOLOGIA
            </option>
          </select>
        </div>
        <div className="personalC">
          <Label for="cargo" className="personalC">
            Cargo: <span>*</span>
          </Label>
          <select onChange={props.handleChange} id="idcargo">
            {DatosCargos[0].map((option) => (
          <option key={option.idCargo} value={option.idCargo}>
            {option.NombreCargo}
          </option>
        ))}
      </select>
        </div>
        <div className="personalC">
          <Label for="aniosexperiencia">
            Meses de experiencia: <span>*</span>
          </Label>
          <Input
            type="number"
            name="aniosexperiencia"
            id="aniosexperiencia"
            placeholder="Meses de experiencia"
            value={props.aniosexperiencia} // Prop: los datos de entrada de correo electrónico
            onChange={props.handleChange} // Prop: Pone los datos en el estado
          />
        </div>
        <div className="personalC">
          <Label for="sueldobase">
            Remuneración: <span>*</span>
          </Label>
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
          <Label for="fechainicialcontrato">
            Fecha Inicial de Contrato: <span>*</span>
          </Label>
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
          <Label for="fechafincontrato">
            Fecha fin de Contrato: <span>*</span>
          </Label>
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
