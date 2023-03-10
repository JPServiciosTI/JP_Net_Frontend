import React from "react";
import { Form, Button } from "react-bootstrap";
function Vacaciones() {
  return (
    <form action="">
      <Form.Group className="formTime">
        <label htmlFor="">Fecha Inicio:</label>
        <Form.Control className="controlTime" type="date" required />
      </Form.Group>
      <Form.Group className="formTime">
        <label htmlFor="">Fecha fin:</label>
        <Form.Control className="controlTime" type="date" required />
      </Form.Group>
      <Button className="buttonForm" variant="success" type="submit" block>
        Registrar
      </Button>
    </form>
  );
}

export { Vacaciones };
