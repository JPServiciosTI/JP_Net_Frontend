import React from "react";
import { Form } from "react-bootstrap";

function Bonos(props) {
  return (
    <form action="">
      <Form.Group className="formTime">
        <label htmlFor="">Asignación Familiar:</label>
        <Form.Control className="controlTime" type="number" placeholder={props.AsignacionFamiliar} disabled required />
      </Form.Group>
      <Form.Group className="formTime">
        <label htmlFor="">Horas extras:</label>
        <Form.Control className="controlTime" type="number" placeholder={props.HorasExtras}  disabled required />
      </Form.Group>
      <Form.Group className="formTime">
        <label htmlFor="">Reintegro:</label>
        <Form.Control className="controlTime" type="number" placeholder={props.Reintegro}  disabled required />
      </Form.Group>
    </form>
  );
}

export default Bonos;
