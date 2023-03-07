import { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useCookies } from "react-cookie";
import { get } from "../../../../../services/api/api.service";
import "./newextratime.css";

const NewExtraTime = () => {
  const [Dia, setDia] = useState(0);
  const [InicioHoraExtra, setInicioHoraExtra] = useState(0);
  const [FinHoraExtra, setFinHoraExtra] = useState(0);
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
    setInicioHoraExtra(value);
  };

  const handleChange3 = (event) => {
    const target = event.target;
    const value = target.value;
    setFinHoraExtra(value);
  };




  useEffect(() => {}, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await get({
        url: "/register/horaextra",
        data: {
          idEmpleado: cookies.jp_net_idEmpleado,
          DiaExtra: Dia,
          horaInicioHoraExtra:  InicioHoraExtra,
          horaFinHoraExtra:     FinHoraExtra,
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
        <label htmlFor="">Inicio hora extra:</label>
        <Form.Control className="controlTime" type="time" required onChange={handleChange2} />
      </Form.Group>
      <Form.Group className="formTime">
        <label htmlFor="">Fin hora extra:</label>
        <Form.Control className="controlTime" type="time" required onChange={handleChange3} />
      </Form.Group>
      <Button className="buttonForm" variant="success" type="submit" block onChange={handleSubmit}>
        Registrar hora extra
      </Button>
    </form>
  );
};

export { NewExtraTime };