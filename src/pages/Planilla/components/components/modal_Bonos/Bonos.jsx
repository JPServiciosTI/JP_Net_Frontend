import React from "react";
import { Form } from "react-bootstrap";

function Bonos() {
  return (
    <form action="">
      <Form.Group className="formTime">
        <label htmlFor="">Bono declarado:</label>
        <Form.Control className="controlTime" type="number" disabled required />
      </Form.Group>
      <Form.Group className="formTime">
        <label htmlFor="">Horas extras:</label>
        <Form.Control className="controlTime" type="number" disabled required />
      </Form.Group>
      <Form.Group className="formTime">
        <label htmlFor="">Reintegro:</label>
        <Form.Control className="controlTime" type="number" disabled required />
      </Form.Group>
    </form>
  );
}

export default Bonos;
