import { Form, Button } from "react-bootstrap"
import './newtareo.css'


const NewTareo=()=>{
    return(
        <form action="">
            <Form.Group className="formTime">
                <label htmlFor="">Hora ingreso :</label>
                <Form.Control className="controlTime"
                    type="time"
                    required
                    />
            </Form.Group>
            <Form.Group className="formTime">
            <label htmlFor="">Hora inicio almuerzo :</label>
                <Form.Control className="controlTime"
                    type="time"
                    required
                    />
            </Form.Group>
            <Form.Group className="formTime">
            <label htmlFor="">Hora fin almuerzo :</label>
                <Form.Control className="controlTime"
                    type="time"
                    placeholder="Registre Hora Fin Almuerzo *"
                    required
                    />
            </Form.Group>
            <Form.Group className="formTime">
            <label htmlFor="">Hora salida :</label>
                <Form.Control className="controlTime"
                    type="time"
                    placeholder="Registre Hora Salida *"
                    required
                    />
            </Form.Group>
            <Button className="buttonForm" variant="success" type="submit" block>
                Registrar tareo
            </Button>
        </form>
    )
}

export {NewTareo}