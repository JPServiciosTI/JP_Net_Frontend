import React from "react";
import { Form, Button } from "react-bootstrap";
function DescansosTrabajados() {
  return (
    <form>
      <Form.Group className="formTime">
        <label htmlFor="">Fecha de Inicio:</label>
        <Form.Control className="controlTime" type="date" required />
      </Form.Group>
      <Form.Group className="formTime">
        <label htmlFor="">Fecha fin:</label>
        <Form.Control className="controlTime" type="date" />
      </Form.Group>
      <Button className="buttonForm" variant="success" type="submit" block>
        Registrar
      </Button>
    </form>
  );
}
export default DescansosTrabajados;
