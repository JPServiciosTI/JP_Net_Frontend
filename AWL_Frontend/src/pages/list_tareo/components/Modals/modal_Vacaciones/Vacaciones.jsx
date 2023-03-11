import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useCookies } from "react-cookie";
import { post } from "../../../../../services/api/api.service";
function Vacaciones() {
  const [FechaDeInicioVacaciones, setFechaDeInicioVacaciones] = useState(0);
  const [FechaDeFinVacaciones, setFechaDeFinVacaciones] = useState(0);
  const [LinkDocumento, setLinkDocumento] = useState();
  const [cookies, setCookie, removeCookie] = useCookies([
    "jp_net_idEmpleado",
  ]);

  const handleChange1 = (event) => {    
    const target = event.target;
    const value = target.value;
    setFechaDeInicioVacaciones(value);
    console.log(FechaDeInicioVacaciones);
  };

  const handleChange2 = (event) => {    
    const target = event.target;
    const value = target.value;
    setFechaDeFinVacaciones(value);
    console.log(FechaDeFinVacaciones);
  };

  const handleChange3 = (event) => {    
    const target = event.target;
    const value = target.value;
    setLinkDocumento(value);
    console.log(LinkDocumento);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await post({
        url: "/empleado/register/vacaciones",
        data: {
          idEmpleado: cookies.jp_net_idEmpleado,
          fechaInicio:FechaDeInicioVacaciones,
          fechaFin:FechaDeFinVacaciones,
          linkDocumento: LinkDocumento
         },
      });
      if (data.status == "ok") {
        alert("Se Actualizo con Exito");
      } else {
        alert("Error");
      }
      return;
    } catch (error) {}
  };
  return (
    <form action="">
      <Form.Group className="formTime" onChange={handleChange1}>
        <label htmlFor="">Fecha Inicio:</label>
        <Form.Control className="controlTime" type="date" required />
      </Form.Group>
      <Form.Group className="formTime" onChange={handleChange2}>
        <label htmlFor="">Fecha fin:</label>
        <Form.Control className="controlTime" type="date" required />
      </Form.Group>
      <Form.Group className="formTime" onChange={handleChange3}>
        <label htmlFor="">Fecha fin:</label>
        <Form.Control className="controlTime" type="input" required />
      </Form.Group>
      <Button className="buttonForm" variant="success" type="submit" block onClick={handleSubmit}>
        Registrar
      </Button>
    </form>
  );
}

export { Vacaciones };
