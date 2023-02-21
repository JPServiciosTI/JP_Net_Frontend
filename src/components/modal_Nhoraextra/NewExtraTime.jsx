import { Form, Button } from "react-bootstrap"
import './newextratime.css'


const NewExtraTime=()=>{
    return(
        <form action="">
            <Form.Group className="formTime">
                <label htmlFor="">Día:</label>
                <Form.Control className="controlTime"
                    type="date"
                    required
                    />
            </Form.Group>
            <Form.Group className="formTime">
            <label htmlFor="">Inicio hora extra:</label>
                <Form.Control className="controlTime"
                    type="time"
                    required
                    />
            </Form.Group>
            <Form.Group className="formTime">
            <label htmlFor="">Fin hora extra:</label>
                <Form.Control className="controlTime"
                    type="time"
                    required
                    />
            </Form.Group>
            <Form.Group className="formTime">
            <label htmlFor="">Total horas extras:</label>
                <Form.Control className="controlTimeE"
                    type="input"
                    disabled
                    required
                    />
            </Form.Group>
            <Button className="buttonForm" variant="success" type="submit" block>
                Registrar hora extra
            </Button>
        </form>
    )
}

export {NewExtraTime}