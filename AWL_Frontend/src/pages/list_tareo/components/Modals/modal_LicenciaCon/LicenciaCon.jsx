import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useCookies } from "react-cookie";
import { get, post } from "../../../../../services/api/api.service";

const LicenciaCon = () => {
  const [FechaInicio, setFechaInicio] = useState(0);
  const [FechaFin, setFechaFin] = useState(0);
  const [LinkDocumento, setLinkDocumento] = useState(0);

  const [cookies, setCookie, removeCookie] = useCookies(["jp_net_idEmpleado"]);

  const handleChange1 = (event) => {
    const target = event.target;
    const value = target.value;
    setFechaInicio(value);
    console.log(FechaInicio)
  };

  const handleChange2 = (event) => {
    const target = event.target;
    const value = target.value;
    setFechaFin(value);
    console.log(FechaFin)
  };

  const handleChange3 = (event) => {
    const target = event.target;
    const value = target.value;
    setLinkDocumento(value);
    console.log(LinkDocumento)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await post({
        url: "/empleado/register/licenciacongoce",
        data: {
          idEmpleado: cookies.jp_net_idEmpleado,
          fechaInicio: FechaInicio,
          fechaFin: FechaFin,
          linkDocumento: LinkDocumento,
        },
      });
      if (data.id[0][0].error != 1) {
        alert("Se Actualizo con Exito");
      } else {
        alert("Error");
      }
      return;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form action="">
      <Form.Group className="formTime">
        <label htmlFor="">Fecha Inicio:</label>
        <Form.Control
          className="controlTime"
          type="date"
          required
          onChange={handleChange1}
        />
      </Form.Group>
      <Form.Group className="formTime">
        <label htmlFor="">Fecha Fin:</label>
        <Form.Control
          className="controlTime"
          type="date"
          required
          onChange={handleChange2}
        />
      </Form.Group>
      <Form.Group className="formTime">
        <label htmlFor="">Link:</label>
        <Form.Control
          className="controlTimeE"
          type="input"
          required
          onChange={handleChange3}
        />
      </Form.Group>
      <Button
        className="buttonForm"
        variant="success"
        type="submit"
        block
        onClick={handleSubmit}
      >
        Registrar
      </Button>
    </form>
  );
};

export { LicenciaCon };
