import React from "react";
import { Form } from "react-bootstrap";
function TotalDescuento() {
  return (
    <form action="">
      <Form.Group className="formTime">
        <label htmlFor="">Impuesto 5ta categoria:</label>
        <Form.Control className="controlTime" type="number" disabled required />
      </Form.Group>
      <Form.Group className="formTime">
        <label htmlFor="">Pensión alimenticia:</label>
        <Form.Control className="controlTime" type="number" disabled required />
      </Form.Group>
      <Form.Group className="formTime">
        <label htmlFor="">Tardanzas:</label>
        <Form.Control className="controlTime" type="number" disabled required />
      </Form.Group>
      <Form.Group className="formTime">
        <label htmlFor="">Faltas:</label>
        <Form.Control className="controlTime" type="number" disabled required />
      </Form.Group>
      <Form.Group className="formTime">
        <label htmlFor="">Adelantos:</label>
        <Form.Control className="controlTime" type="number" disabled required />
      </Form.Group>
    </form>
  );
}
export default TotalDescuento;
