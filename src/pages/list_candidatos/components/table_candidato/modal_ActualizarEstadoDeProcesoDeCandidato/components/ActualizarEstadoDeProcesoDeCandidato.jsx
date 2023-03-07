import { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useCookies } from "react-cookie";
import { put } from "../../../../../../services/api/api.service";
import "./style.css";

const ActualizarEstadoDeProcesoDeCandidato = ({EpreviaIn,EllamadaIn,EentrevistaIn,EnegociacionIn}) => {

  const [EPrevia, setEPrevia] = useState(0 || EpreviaIn);
  const [ELlamada, setELlamada] = useState(0 || EllamadaIn);
  const [EEntrevista, setEEntrevista] = useState(0 || EentrevistaIn);
  const [ENegociacion, setENegociacion] = useState(0 || EnegociacionIn);

  const [cookies, setCookie, removeCookie] = useCookies([ "jp_net_dni_candidato" ]);



  const handleChange1 = (event) => {
    const target = event.target;
    const value = target.value;
    setEPrevia(value);

  };

  const handleChange2 = (event) => {
    const target = event.target;
    const value = target.value;
    setELlamada(value);

  };

  const handleChange3 = (event) => {
    const target = event.target;
    const value = target.value;
    setEEntrevista(value);

  };

  const handleChange4 = (event) => {
    const target = event.target;
    const value = target.value;
    setENegociacion(value);

  };

  useEffect(() => {

  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await put({
        url: "/candidato/updateProcess",
        data: {
          idCandidato: cookies.jp_net_dni_candidato,
          etapaprevia: EPrevia,
          etapadellamada: ELlamada,
          etapadeentrevista: EEntrevista,
          etapadecontratacion: ENegociacion,
        },
      });
      if (data.status == 'ok') {
        alert("Se Actualizo con Exito");        
      }else{
        alert("Error");        
      }

      return
    } catch (error) {

    }
  };



  return (
    <form action="">
      <Form.Group className="formTime">
        <label htmlFor="">Etapa Previa:</label>
        <Form.Check
          name="previo"
          type="radio"
          label="Aprobado"
          value={1}
          onChange={handleChange1}
        />
        <Form.Check
          name="previo"
          type="radio"
          label="Desaprobado"
          value={0}
          onChange={handleChange1}
          
        />
      </Form.Group>
      <Form.Group className="formTime">
        <label htmlFor="">Etapa Llamada:</label>
        <Form.Check
          name="llamada"
          type="radio"
          label="Aprobado"
          value={1}
          onChange={handleChange2}
        />
        <Form.Check
          name="llamada"
          type="radio"
          label="Desaprobado"
          value={0}
          onChange={handleChange2}
          
        />
      </Form.Group>
      <Form.Group className="formTime">
        <label htmlFor="">Entrevista:</label>
        <Form.Check
          name="entrevista"
          type="radio"
          label="Aprobado"
          value={1}
          onChange={handleChange3}
        />
        <Form.Check
          name="entrevista"
          type="radio"
          label="Desaprobado"
          value={0}
          onChange={handleChange3}
          
        />
      </Form.Group>
      <Form.Group className="formTime">
        <label htmlFor="">Negociación:</label>
        <Form.Check
          name="negociacion"
          type="radio"
          label="Aprobado"
          value={1}
          onChange={handleChange4}
        />
        <Form.Check
          name="negociacion"
          type="radio"
          label="Desaprobado"
          value={0}
          onChange={handleChange4}
          
        />
      </Form.Group>
      <Button className="buttonForm" variant="success" type="submit" block onClick={handleSubmit}>
        Actualizar
      </Button>
    </form>
  );
};

export { ActualizarEstadoDeProcesoDeCandidato };
