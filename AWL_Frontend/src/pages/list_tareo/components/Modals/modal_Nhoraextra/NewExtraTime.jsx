import { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useCookies } from "react-cookie";
import { get } from "../../../../../services/api/api.service";
import "./newextratime.css";

const NewExtraTime = () => {
  const [Dia, setDia] = useState(0);
  const [Cantidad25, setCantidad25] = useState(0);
  const [Cantidad35, setCantidad35] = useState(0);
  const [LinkDocumentos, setLinkDocumentos] = useState(0);

  const [cookies, setCookie, removeCookie] = useCookies([
    "jp_net_idEmpleado",
  ]);

  const handleChange1 = (event) => {
    const target = event.target;
    const value = target.value;
    setDia(value);
    console.log(Dia);
  };

  const handleChange2 = (event) => {
    const target = event.target;
    const value = target.value;
    setCantidad25(value);
  };

  const handleChange3 = (event) => {
    const target = event.target;
    const value = target.value;
    setCantidad35(value);
  };

  const handleChange4 = (event) => {
    const target = event.target;
    const value = target.value;
    setLinkDocumentos(value);
  };


  useEffect(() => {}, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await get({
        url: "/empleado/register/horaextra",
        data: {
          idEmpleado: cookies.jp_net_idEmpleado,
          DiaExtra: Dia,
          horaCantidad25:  Cantidad25,
          horaCantidad35:  Cantidad35,
         },
      });
      if (data.status == "ok") {
        alert("Se Actualizo con Exito");
      } else {
        alert("Error");
      }
      return;
    } catch (error) {}
  };

  return (
    <form action="">
      <Form.Group className="formTime">
        <label htmlFor="">Día:</label>
        <Form.Control className="controlTime" type="date" required onChange={handleChange1} />
      </Form.Group>
      <Form.Group className="formTime">
        <label htmlFor="">Valor de 25%:</label>
        <Form.Control className="controlTime" type="number" required onChange={handleChange2} />
      </Form.Group>
      <Form.Group className="formTime">
        <label htmlFor="">Valor de 35%:</label>
        <Form.Control className="controlTime" type="number" required onChange={handleChange3} />
      </Form.Group>
      <Form.Group className="formTime">
        <label htmlFor="">Link Documento:</label>
        <Form.Control className="controlTime" type="input" required onChange={handleChange4} />
      </Form.Group>
      <Button className="buttonForm" variant="success" type="submit" block onClick={handleSubmit}>
        Registrar hora extra
      </Button>
    </form>
  );
};

export { NewExtraTime };