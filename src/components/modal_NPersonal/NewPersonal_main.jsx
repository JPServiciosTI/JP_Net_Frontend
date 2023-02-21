import React, { Component } from "react";
import {Form, Button, Card, CardHeader, CardBody, CardTitle, CardText, CardFooter} from "reactstrap";

import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';    
import {BarraProgreso} from './BarraProgreso'

class NewPersonal_main extends Component{
    constructor(props) {
        super(props);
        // Estableciendo valores de entrada iniciales
        this.state = {
          currentStep: 1,
          nombre:"",
          apellidoPaterno:"",
          apellidoMaterno:"",
          dni:"",
          telefono:"",
          telefonofijo:"",
          email:"",
          estadocivil:"",
          contactodeemergencia:"",
          numerodeemergencia:"",
          idLocalidad:"",
          brevete:"",
          ubigeo:"",
          departamento:"",
          provincia:"",
          distrito:"",
          idDireccion:"",
          fechadenacimiento:"",
          idTipoDeSangre:"",
          alergias:"",
          profesion:"",
          campodeestudio:"",
          gradoinstruccion:"",
          cargo:"",
          aniosexperiencia:"",
          idcargo:"",
          idfondodepension:"",
          fechainicialcontrato:"",
          fechafincontrato:"",
          sueldobase:"",
          cispp:"",
          nhijos:""


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
          [id]: value
        });
      }
    
      // Alerta al enviar formulario
      handleSubmit = event => {
        event.preventDefault();
        const { nombre, apellidoPaterno, apellidoMaterno } = this.state;
        alert(`Your registration detail: \n 
          Nombre: ${nombre} \n 
          Apellido Paterno: ${apellidoPaterno} \n
          Apellido Materno: ${apellidoMaterno}`);
      };
    
      // funciones antes y después seran llamadas al hacer clikc en botón
      _next() {
        let currentStep = this.state.currentStep;
        //Si el paso actual es 1 o 2, agregue uno al hacer clic en el botón "siguiente"
        currentStep = currentStep >= 2 ? 3 : currentStep + 1;
        this.setState({
          currentStep: currentStep
        });
      }
    
      _prev() {
        let currentStep = this.state.currentStep;
        //Si el paso actual es 2 o 3, reste uno en el botón "anterior" y haga clic en
        currentStep = currentStep <= 1 ? 1 : currentStep - 1;
        this.setState({
          currentStep: currentStep
        });
      }
    
      get previousButton() {
        let currentStep = this.state.currentStep;

        if (currentStep !== 1) {
          return (
            <Button color="secondary float-left" onClick={this._prev}>
              Previous
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
              Next
            </Button>
          );
        }
        return null;
      }
    
      get submitButton() {
        let currentStep = this.state.currentStep;
        if (currentStep > 2) {
          return <Button color="primary float-right">Submit</Button>;
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
                  />
                  <Step2
                    currentStep={this.state.currentStep}
                    handleChange={this.handleChange}
                    nombre={this.state.apellidoPaterno}
                  />
                  <Step3
                    currentStep={this.state.currentStep}
                    handleChange={this.handleChange}
                    nombre={this.state.apellidoMaterno}
                  />
                </CardBody>
                <CardFooter>
                  {this.previousButton}
                  {this.nextButton}
                  {this.submitButton}
                </CardFooter>
              </Card>
            </Form>
          </>
        );
      }
    }
    
export {NewPersonal_main}