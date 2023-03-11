import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useCookies } from "react-cookie";
import { post } from "../../../../../services/api/api.service";
function DescansosTrabajados() {
  const [DiaDescansoTrabajado, setDiaDescansoTrabajado] = useState(0);
  const handleChange1 = (event) => {    
    const target = event.target;
    const value = target.value;
    setDiaDescansoTrabajado(value);
    console.log(value);
  };
  const [cookies, setCookie, removeCookie] = useCookies([
    "jp_net_idEmpleado",
  ]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await post({
        url: "/empleado/register/tareo/descansotrabajado",
        data: {
          idEmpleado: cookies.jp_net_idEmpleado,
          fecha:DiaDescansoTrabajado,
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
    <form>
      <Form.Group className="formTime" onChange={handleChange1}>
        <label htmlFor="">Fecha Trabajada:</label>
        <Form.Control className="controlTime" type="date" required />
      </Form.Group>
      <Button className="buttonForm" variant="success" type="submit" block onClick={handleSubmit}>
        Registrar
      </Button>
    </form>
  );
}
export  {DescansosTrabajados};
