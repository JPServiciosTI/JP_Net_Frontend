import { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useCookies } from 'react-cookie'
import { get, post } from '../../../../../services/api/api.service'
import './newtareo.css'

const NewTareo = () => {
  const [HIngreso, setHIngreso] = useState(0)
  const [HInicioAlmuerzo, setHInicioAlmuerzo] = useState(0)
  const [HFinAlmuerzo, setHFinAlmuerzo] = useState(0)
  const [HSalida, setHSalida] = useState(0)
  const [DiaDeTrabajo, setDiaDeTrabajo] = useState()
  
  const [EstacionDeTrabajo, setEstacionDeTrabajo] = useState(1)
  const [cookies, setCookie, removeCookie] = useCookies(['jp_net_idEmpleado'])

  const handleChange1 = (event) => {
    const target = event.target
    const value = target.value
    setHIngreso(value)
  }

  const handleChange2 = (event) => {
    const target = event.target
    const value = target.value
    setHInicioAlmuerzo(value)
  }

  const handleChange3 = (event) => {
    const target = event.target
    const value = target.value
    setHFinAlmuerzo(value)
  }

  const handleChange4 = (event) => {
    const target = event.target
    const value = target.value
    setHSalida(value)
    console.log(value)
  }

  const handleChange5 = (event) => {
    const target = event.target
    const value = target.value
    setEstacionDeTrabajo(value)
    console.log(value)
  }

  const handleChange6 = (event) => {
    const target = event.target
    const value = target.value
    setDiaDeTrabajo(value)
    console.log(value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
      try {
        if (EstacionDeTrabajo==9) {
        const data = await post({
          url: '/empleado/register/tareo/mina',
          data: {
            fecha: DiaDeTrabajo,
            idOperacion: EstacionDeTrabajo,
            idEmpleado: cookies.jp_net_idEmpleado
          },
        })
        console.log(data)
        if (data.status == 'ok') {
          alert('Se Actualizo con Exito')
        } else {
          alert('Error')
        }
        return
      } else{
        const data = await post({
          url: '/empleado/register/tareo/comun',
          data: {
            fecha:DiaDeTrabajo,
            idEmpleado: cookies.jp_net_idEmpleado,
            horaIngreso: HIngreso,
            horaInicioAlmuerzo: HInicioAlmuerzo,
            horaFinAlmuerzo: HFinAlmuerzo,
            horaSalida: HSalida,
            idEstacionDeTrabajo: EstacionDeTrabajo
          },
        })
        console.log(data)
        if (data.status == 'ok') {
          alert('Se Actualizo con Exito')
        } else {
          alert('Error')
        }
        return
      } 
        
      } catch (error) {} 
    }


  return (
    <form action="">
      <Form.Select className="controlTime" onChange={handleChange5} required>
        <option value="1">Escoger Estacion de Trabajo</option>
        <option value="1">TALLER  CERRO COLORADO AREQUIPA</option>
        <option value="2">TIENDA JOSE LUIS BUSTAMANTE Y RIVERO AREQUIPA</option>
        <option value="3">AREA DE PROYECTO AREQUIPA</option>
        <option value="9">LABORATORIO PORTUGAL</option>
        <option value="10">TELETRABAJO</option>
      </Form.Select>
        <Form.Group className="formTime">
        <label htmlFor="">Dia de Registro :</label>
        <Form.Control
          className="controlTime"
          type="date"
          required
          onChange={handleChange6}
        />
      </Form.Group>
      <Form.Group className="formTime">
        <label htmlFor="">Hora ingreso :</label>
        <Form.Control
          className="controlTime"
          type="time"
          required
          onChange={handleChange1}
        />
      </Form.Group>
      <Form.Group className="formTime">
        <label htmlFor="">Hora inicio almuerzo :</label>
        <Form.Control
          className="controlTime"
          type="time"
          required
          onChange={handleChange2}
        />
      </Form.Group>
      <Form.Group className="formTime">
        <label htmlFor="">Hora fin almuerzo :</label>
        <Form.Control
          className="controlTime"
          type="time"
          placeholder="Registre Hora Fin Almuerzo *"
          required
          onChange={handleChange3}
        />
      </Form.Group>
      <Form.Group className="formTime">
        <label htmlFor="">Hora salida :</label>
        <Form.Control
          className="controlTime"
          type="time"
          placeholder="Registre Hora Salida *"
          required
          onChange={handleChange4}
        />
      </Form.Group>


      <Button
        className="buttonForm"
        variant="success"
        type="submit"
        block
        onClick={handleSubmit}
      >
        Registrar tareo
      </Button>
    </form>
  )
}

export { NewTareo }