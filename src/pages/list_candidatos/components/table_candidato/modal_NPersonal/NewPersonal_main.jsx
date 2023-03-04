import React, { Component } from "react";
import {
  Form,
  Button,
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardFooter,
} from "reactstrap";

import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import { BarraProgreso } from "./BarraProgreso";
import "./npersonal.css";
import { post } from "../../../../../services/api/api.service";

class NewPersonal_main extends Component {
  constructor(props) {
    super(props);
    // Estableciendo valores de entrada iniciales
    this.state = {
      currentStep: 1,
      nombre: "",
      apellidoPaterno: "",
      apellidoMaterno: "",
      dni: "",
      telefono: "",
      telefonofijo: "",
      email: "",
      estadocivil: "",
      contactodeemergencia: "",
      numerodeemergencia: "",
      idLocalidad: 1,
      brevete: "",
      ubigeo: "",
      departamento: "",
      provincia: "",
      distrito: "",
      idDireccion: "",
      fechadenacimiento: "",
      idTipoDeSangre: 1,
      alergias: "",
      profesion: "",
      campodeestudio: "",
      gradoinstruccion: "",
      cargo: "",
      aniosexperiencia: "",
      idcargo: "",
      idfondodepension: "",
      fechainicialcontrato: "",
      fechafincontrato: "",
      sueldobase: "",
      cispp: "",
      nhijos: "",
      tipodevia: "",
      nombredevia: "",
      tipolocalidad: "",
      nombrelocalidad: "",
    };

    // Vincular envío handleChange()
    this.handleChange = this.handleChange.bind(this);

    // Vincular funcinoes siguiente y previo
    this._next = this._next.bind(this);
    this._prev = this._prev.bind(this);
  }

  // Utilizando los datos enviados para establecer estado
  handleChange(event) {
    const { id, value } = event.target;
    this.setState({
      [id]: value,
    });
  }

  // Alerta al enviar formulario
  handleSubmit = async (event) => {
    event.preventDefault();
    const {
      nombre,
      apellidoPaterno,
      apellidoMaterno,
      dni,
      telefono,
      telefonofijo,
      email,
      estadocivil,
      contactodeemergencia,
      numerodeemergencia,
      idLocalidad,
      brevete,
      ubigeo,
      departamento,
      provincia,
      distrito,
      idDireccion,
      fechadenacimiento,
      idTipoDeSangre,
      alergias,
      profesion,
      campodeestudio,
      cargo,
      aniosexperiencia,
      idcargo,
      idfondodepension,
      fechainicialcontrato,
      fechafincontrato,
      sueldobase,
      cispp,
      nhijos,
      idtipodevia,
      nombredevia,
      idTipoDeLocalidad,
      nombrelocalidad,
    } = this.state;
    alert(`Your registration detail: \n 
          Nombre: ${nombre} \n 
          Apellido Paterno: ${apellidoPaterno} \n
          Apellido Materno: ${apellidoMaterno}`);
    try {
      const registro = await post({
        url: "/empleado/register",
        data: {
          nombre: nombre.toUpperCase(),
          apellidoPaterno: apellidoPaterno.toUpperCase(),
          apellidoMaterno: apellidoMaterno.toUpperCase(),
          dni: dni.toUpperCase(),
          telefono: telefono.toUpperCase(),
          telefonofijo: telefonofijo.toUpperCase(),
          email: email,
          estadocivil: estadocivil.toUpperCase(),
          contactodeemergencia: contactodeemergencia.toUpperCase(),
          numerodeemergencia: numerodeemergencia.toUpperCase(),
          idLocalidadActual: 12,
          brevete: brevete,
          ubigeo: ubigeo,
          departamento: departamento,
          provincia: provincia,
          distrito: distrito,
          idDireccion: idDireccion,
          fechadenacimiento: fechadenacimiento,
          idTipoDeSangre: idTipoDeSangre,
          alergias: alergias.toUpperCase(),
          profesion: profesion,
          campodeestudio: campodeestudio,
          aniosexperiencia: aniosexperiencia,
          idcargo: idcargo,
          idfondodepension: idfondodepension,
          fechainicialcontrato: fechainicialcontrato,
          fechafincontrato: fechafincontrato,
          sueldobase: sueldobase,
          cispp: cispp,
          nhijos: nhijos,
          idTipodeVia: idtipodevia,
          nombreDeVia: nombredevia.toUpperCase(),
          idTipoDeLocalidad: idTipoDeLocalidad,
          nombreLocalidad: nombrelocalidad.toUpperCase(),
        },
      });
      //console.log(registro);
      if (registro.id === null) {
        alert("No es Usuario o Password Correcta");
        return null;
      } else {
      }
    } catch (error) {
      //console.error(error);
    }
  };

  // funciones antes y después seran llamadas al hacer clikc en botón
  _next() {
    let currentStep = this.state.currentStep;
    //Si el paso actual es 1 o 2, agregue uno al hacer clic en el botón "siguiente"
    currentStep = currentStep >= 2 ? 3 : currentStep + 1;
    this.setState({
      currentStep: currentStep,
    });
  }

  _prev() {
    let currentStep = this.state.currentStep;
    //Si el paso actual es 2 o 3, reste uno en el botón "anterior" y haga clic en
    currentStep = currentStep <= 1 ? 1 : currentStep - 1;
    this.setState({
      currentStep: currentStep,
    });
  }

  get previousButton() {
    let currentStep = this.state.currentStep;

    if (currentStep !== 1) {
      return (
        <Button color="danger float-left" onClick={this._prev}>
          Atrás
        </Button>
      );
    }
    return null;
  }

  get nextButton() {
    let currentStep = this.state.currentStep;
    if (currentStep < 3) {
      return (
        <Button color="primary float-right" onClick={this._next}>
          Siguiente
        </Button>
      );
    }
    return null;
  }

  get submitButton() {
    let currentStep = this.state.currentStep;
    if (currentStep > 2) {
      return <Button color="success float-right">Guardar</Button>;
    }
    return null;
  }

  render() {
    return (
      <>
        <Form onSubmit={this.handleSubmit}>
          <Card>
            <CardBody>
              <CardTitle>
                <BarraProgreso currentStep={this.state.currentStep} />
              </CardTitle>
              <CardText />
              <Step1
                currentStep={this.state.currentStep}
                handleChange={this.handleChange}
                nombre={this.state.nombre}
                apellidoPaterno={this.state.apellidoPaterno}
                apellidoMaterno={this.state.apellidoMaterno}
                dni={this.state.dni}
                telefono={this.state.telefono}
                telefonofijo={this.state.telefonofijo}
                email={this.state.email}
                estadocivil={this.state.estadocivil}
                nhijos={this.state.nhijos}
                fechadenacimiento={this.state.fechadenacimiento}
                ubigeo={this.state.ubigeo}
                departamento={this.state.departamento}
                provincia={this.state.provincia}
                distrito={this.state.distrito}
              />
              <Step2
                currentStep={this.state.currentStep}
                handleChange={this.handleChange}
                tipodevia={this.state.tipodevia}
                nombredevia={this.state.nombredevia}
                tipolocalidad={this.state.tipolocalidad}
                nombrelocalidad={this.state.nombrelocalidad}
                contactodeemergencia={this.state.contactodeemergencia}
                numerodeemergencia={this.state.numerodeemergencia}
                brevete={this.state.brevete}
                idTipoDeSangre={this.state.idTipoDeSangre}
                alergias={this.state.alergias}
                idfondodepension={this.state.idfondodepension}
                cispp={this.state.cispp}
              />
              <Step3
                currentStep={this.state.currentStep}
                handleChange={this.handleChange}
                campodeestudio={this.state.campodeestudio}
                aniosexperiencia={this.state.aniosexperiencia}
                sueldobase={this.state.sueldobase}
                fechainicialcontrato={this.state.fechainicialcontrato}
                fechafincontrato={this.state.fechafincontrato}
                profesion={this.state.profesion}
                idcargo={this.state.idcargo}
              />
            </CardBody>
            <CardFooter>
              <div className="nbutton">
                {this.previousButton}
                {this.nextButton}
                {this.submitButton}
              </div>
            </CardFooter>
          </Card>
        </Form>
      </>
    );
  }
}

export { NewPersonal_main };
