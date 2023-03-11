import React from "react";
import { Form, Button } from "react-bootstrap";
import "./adelanto.css";
function Adelantos() {
  return (
    <form>
      <Form.Group className="formTime">
        <label htmlFor="">Periodo:</label>
        <Form.Control className="controlTime" type="text" required />
      </Form.Group>
      <Form.Group className="formTime">
        <label htmlFor="">Cantidad:</label>
        <Form.Control className="controlTime" type="number" required />
      </Form.Group>
      <Form.Group className="formTime">
        <label htmlFor="">Fecha de Pago:</label>
        <Form.Control className="controlTime" type="date" required />
      </Form.Group>
      <Form.Group className="formTime">
        <label htmlFor="">Link de documento:</label>
        <Form.Control className="controlTime" type="text" required />
      </Form.Group>
      <Button className="buttonForm" variant="success" type="submit" block>
        Registrar
      </Button>
    </form>
  );
}

export { Adelantos };
