import React from "react";
import { Form, Button } from "react-bootstrap";

function DescRRHH() {
  return (
    <form>
      <Form.Group className="formTime">
        <label htmlFor="">Tipo de falta:</label>
        <Form.Control className="controlTime" as="select" custom required>
          <option hidden>Seleccionar</option>
          <option value="falta">Falta</option>
          <option value="tardanza">Tardanza</option>
        </Form.Control>
      </Form.Group>
      <Form.Group className="formTime">
        <label htmlFor="">Fecha:</label>
        <Form.Control className="controlTime" type="date" required />
      </Form.Group>
      <Form.Group className="formTime">
        <label htmlFor="">Cantidad de descuento:</label>
        <Form.Control className="controlTime" type="number" required />
      </Form.Group>
      <Button className="buttonForm" variant="success" type="submit" block>
        Registrar
      </Button>
    </form>
  );
}

export { DescRRHH };
