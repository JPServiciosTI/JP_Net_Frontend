import React from "react";
import { Form } from "react-bootstrap";
function TotalDescuento(props) {


  return (
    <form action="">
      <Form.Group className="formTime">
        <label htmlFor="">Impuesto 5ta categoria:</label>
        <Form.Control className="controlTime" type="number" disabled placeholder={props.QuintaCategoria} required />
      </Form.Group>
      <Form.Group className="formTime">
        <label htmlFor="">Pensión alimenticia:</label>
        <Form.Control className="controlTime" type="number" placeholder={props.PensionAlimenticia} disabled required />
      </Form.Group>
      <Form.Group className="formTime">
        <label htmlFor="">Tardanzas:</label>
        <Form.Control className="controlTime" type="number" placeholder={props.Tardanzas} disabled required />
      </Form.Group>
      <Form.Group className="formTime">
        <label htmlFor="">Faltas:</label>
        <Form.Control className="controlTime" type="number" placeholder={props.Faltas} disabled required />
      </Form.Group>
      <Form.Group className="formTime">
        <label htmlFor="">Adelantos:</label>
        <Form.Control className="controlTime" type="number" placeholder={props.Adelantos} disabled required />
      </Form.Group>
      <Form.Group className="formTime">
        <label htmlFor="">Prestamo:</label>
        <Form.Control className="controlTime" type="number" placeholder={props.Prestamo} disabled required />
      </Form.Group>
    </form>
  );
}
export default TotalDescuento;
