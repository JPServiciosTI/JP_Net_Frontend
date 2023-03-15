import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { useCookies } from "react-cookie";
import { get } from "../../../../../services/api/api.service";
function TotalDescuento(props) {
  const [cookies, setCookie, removeCookie] = useCookies([
    "jp_net_planilla_idContrato",
  ]);

  
  const [DatosDescuentos,setDatosDescuentos] = useState([]);
  const handleDate = async () => {
    try {
      const data = await get({
        url: "/planilla/descuentos",
        data: {
          idContrato : cookies.jp_net_planilla_idContrato,
          Periodo: props.Periodo
         },
      });
      
      setDatosDescuentos(data["id"][0][0]);
      console.log("AQUI DESCUENTOS: ",DatosDescuentos);
      return;
    } catch (error) {}
  };


  let cargado = false;
  useEffect(() => {
    if (!cargado) {
      cargado = true;
      handleDate();
    }

  }, []);

  return (
    <form action="">
      <Form.Group className="formTime">
        <label htmlFor="">Impuesto 5ta categoria:</label>
        <Form.Control className="controlTime" type="number" disabled placeholder={DatosDescuentos.ImpuestoDeQuintaCategoria} required />
      </Form.Group>
      <Form.Group className="formTime">
        <label htmlFor="">Pensión alimenticia:</label>
        <Form.Control className="controlTime" type="number" placeholder={0} disabled required />
      </Form.Group>
      <Form.Group className="formTime">
        <label htmlFor="">Tardanzas:</label>
        <Form.Control className="controlTime" type="number" placeholder={DatosDescuentos.Tardanzas} disabled required />
      </Form.Group>
      <Form.Group className="formTime">
        <label htmlFor="">Faltas:</label>
        <Form.Control className="controlTime" type="number" placeholder={DatosDescuentos.Faltas} disabled required />
      </Form.Group>
      <Form.Group className="formTime">
        <label htmlFor="">Adelantos:</label>
        <Form.Control className="controlTime" type="number" placeholder={DatosDescuentos.MontoAAdelantarOCreditar || 0} disabled required />
      </Form.Group>
      <Form.Group className="formTime">
        <label htmlFor="">Prestamo:</label>
        <Form.Control className="controlTime" type="number" placeholder={DatosDescuentos.MontoAAdelantarOCreditar || 0} disabled required />
      </Form.Group>
      <Form.Group className="formTime">
        <label htmlFor="">Descuento AFP:</label>
        <Form.Control className="controlTime" type="number" placeholder={DatosDescuentos.DescuentoFondoDePension} disabled required />
      </Form.Group>
    </form>
  );
}
export default TotalDescuento;
