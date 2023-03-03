import { useState } from "react";
import { Form, Button } from "react-bootstrap"
import { useCookies } from "react-cookie";
import { get } from "../../../../../services/api/api.service";
import './newtareo.css'

const NewTareo=()=>{
    const [HIngreso, setHIngreso] = useState(0);
    const [HInicioAlmuerzo, setHInicioAlmuerzo] = useState(0);
    const [HFinAlmuerzo, setHFinAlmuerzo] = useState(0);
    const [HSalida, setHSalida] = useState(0);
  
    const [cookies, setCookie, removeCookie] = useCookies([
      "jp_net_idEmpleado",
    ]);
  
    const handleChange1 = (event) => {
      const target = event.target;
      const value = target.value;
      setHIngreso(value);
    };
  
    const handleChange2 = (event) => {
      const target = event.target;
      const value = target.value;
      setHInicioAlmuerzo(value);
    };
  
    const handleChange3 = (event) => {
      const target = event.target;
      const value = target.value;
      setHFinAlmuerzo(value);
    };
  
    const handleChange4 = (event) => {
      const target = event.target;
      const value = target.value;
      setHSalida(value);
      console.log(HSalida)
    };
  
     const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const data = await get({
            url: "/empleado/register/tareo",
            data: {
              idEmpleado: cookies.jp_net_idEmpleado,
              horaIngreso: HIngreso,
              horaInicioAlmuerzo: HInicioAlmuerzo,
              horaFinAlmuerzo: HFinAlmuerzo,
              horaSalida: HSalida,
            }
          });
          console.log(data);
          if (data.status == "ok") {
            alert("Se Actualizo con Exito");
          } else {
            alert("Error");
          }
          return;
        } catch (error) {}
      };

    return(
        <form action="">
            <Form.Group className="formTime">
                <label htmlFor="">Hora ingreso :</label>
                <Form.Control className="controlTime"
                    type="time"
                    required
                    onChange={handleChange1}
                    />
            </Form.Group>
            <Form.Group className="formTime">
            <label htmlFor="">Hora inicio almuerzo :</label>
                <Form.Control className="controlTime"
                    type="time"
                    required
                    onChange={handleChange2}
                    />
            </Form.Group>
            <Form.Group className="formTime">
            <label htmlFor="">Hora fin almuerzo :</label>
                <Form.Control className="controlTime"
                    type="time"
                    placeholder="Registre Hora Fin Almuerzo *"
                    required
                    onChange={handleChange3}
                    />
            </Form.Group>
            <Form.Group className="formTime">
            <label htmlFor="">Hora salida :</label>
                <Form.Control className="controlTime"
                    type="time"
                    placeholder="Registre Hora Salida *"
                    required
                    onChange={handleChange4}
                    />
            </Form.Group>
            <Button className="buttonForm" variant="success" type="submit" block onSubmit={handleSubmit}>
                Registrar tareo                
            </Button>
        </form>
    )
}

export {NewTareo}