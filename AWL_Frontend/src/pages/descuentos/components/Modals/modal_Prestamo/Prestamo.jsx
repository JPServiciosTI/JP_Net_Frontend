import React from "react";
import { Form, Button } from "react-bootstrap";
function Prestamo() {
  return (
    <form action="">
      <Form.Group className="formTime">
        <label htmlFor="">Inicio prestamos:</label>
        <Form.Control className="controlTime" type="date" required />
      </Form.Group>
      <Form.Group className="formTime">
        <label htmlFor="">Fin prestamos:</label>
        <Form.Control className="controlTime" type="date" required />
      </Form.Group>
      <Form.Group className="formTime">
        <label htmlFor="">Cantidad cuotas:</label>
        <Form.Control className="controlTime" type="number" required />
      </Form.Group>
      <Form.Group className="formTime">
        <label htmlFor="">Fecha de Desembolso:</label>
        <Form.Control className="controlTime" type="date" required />
      </Form.Group>
      <Form.Group className="formTime">
        <label htmlFor="">Link de documento::</label>
        <Form.Control className="controlTime" type="text" required />
      </Form.Group>
      <Button className="buttonForm" variant="success" type="submit" block>
        Registrar
      </Button>
    </form>
  );
}

export { Prestamo };
