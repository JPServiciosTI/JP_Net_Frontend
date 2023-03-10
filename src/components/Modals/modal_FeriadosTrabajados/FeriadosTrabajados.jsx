import React from "react";
import { Form, Button } from "react-bootstrap";
function FeriadosTrabajados() {
  return (
    <form action="">
      <Form.Group className="formTime">
        <label htmlFor="">Día:</label>
        <Form.Control className="controlTime" type="date" required />
      </Form.Group>
      <Button className="buttonForm" variant="success" type="submit" block>
        Registrar
      </Button>
    </form>
  );
}

export { FeriadosTrabajados };
