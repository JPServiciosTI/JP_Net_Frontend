import React from "react";
import { Form, Button } from "react-bootstrap";
function DescPrestamos() {
  return (
    <form action="">
      <Form.Group className="formTime">
        <label htmlFor="">Fecha a rendir:</label>
        <Form.Control className="controlTime" type="date" required />
      </Form.Group>
      <Form.Group className="formTime">
        <label htmlFor="">Cantidad:</label>
        <Form.Control className="controlTime" type="number" required />
      </Form.Group>
      <Button className="buttonForm" variant="success" type="submit" block>
        Registrar
      </Button>
    </form>
  );
}

export { DescPrestamos };
