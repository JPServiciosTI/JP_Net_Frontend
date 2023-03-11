import React from "react";
import { Form, Button } from "react-bootstrap";

function PensionAlimenticia() {
  return (
    <form action="">
      <Form>
        <Form.Group className="formTime">
          <label htmlFor="">Link de documento:</label>
          <Form.Control className="controlTime" type="text" required />
        </Form.Group>
        <Form.Group className="formTime">
          <label htmlFor="">Cantidad:</label>
          <Form.Control className="controlTime" type="number" required />
        </Form.Group>
        <Button className="buttonForm" variant="success" type="submit" block>
          Registrar
        </Button>
      </Form>
    </form>
  );
}

export { PensionAlimenticia };
