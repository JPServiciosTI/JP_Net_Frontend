import React from "react";
import { Form, Button } from "react-bootstrap";
function DescansoMedico() {
  return (
    <form action="">
      <Form.Group className="formTime">
        <label htmlFor="">Fecha Inicio</label>
        <Form.Control className="controlTime" type="date" required />
      </Form.Group>
      <Form.Group className="formTime">
        <label htmlFor="">Fecha Fin:</label>
        <Form.Control className="controlTime" type="date" required />
      </Form.Group>
      <Form.Group className="formTime">
        <label htmlFor="">Link:</label>
        <Form.Control className="controlTime" type="text" required />
      </Form.Group>
      <Button className="buttonForm" variant="success" type="submit" block>
        Registrar
      </Button>
    </form>
  );
}

export { DescansoMedico };
