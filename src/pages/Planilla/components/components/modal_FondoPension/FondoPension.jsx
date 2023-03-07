import React from "react";
import { Form } from "react-bootstrap";
function FondoPension() {
  return (
    <form action="">
      <Form.Group>
        <label htmlFor="">Fondo de pensión:</label>
        <Form.Control className="controlTime" type="text" required disabled />
      </Form.Group>
      <Form.Group>
        <label htmlFor="">Porcentaje:</label>
        <Form.Control className="controlTime" type="number" required disabled />
      </Form.Group>
    </form>
  );
}

export default FondoPension;
