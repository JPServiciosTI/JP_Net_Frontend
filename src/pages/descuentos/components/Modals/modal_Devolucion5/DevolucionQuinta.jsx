import React from "react";
import { Form } from "react-bootstrap";
function DevolucionQuinta() {
  return (
    <form>
      <Form.Group>
        <label htmlFor="">Fecha:</label>
        <Form.Control className="controlTime" type="date" required />
      </Form.Group>
      <Form.Group>
        <label htmlFor="">Monto:</label>
        <Form.Control className="controlTime" type="number" required />
      </Form.Group>
    </form>
  );
}

export { DevolucionQuinta };
