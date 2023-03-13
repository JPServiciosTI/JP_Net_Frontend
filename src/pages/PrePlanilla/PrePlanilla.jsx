import React, { useState } from "react";
import { Navbar } from "../../components/navbar/Navbar";
import { Sidebar } from "../../components/Side/Sidebar";
import { Modal, Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import "./preplanilla.css";
function PrePlanilla() {
  const [show1, setshow1] = useState(true);
  const handleShow1 = () => setshow1(true);
  const handleClose1 = () => setshow1(false);

  return (
    <div className="mainPrePlanilla">
      <Sidebar />
      <div className="generalPrePlanilla">
        <Navbar />
        <div className="titlePrePlanilla">Reporte de Planilla Mensual</div>
        <div className="bodyPrePlanilla">
          <Modal show={show1} onHide={handleClose1}>
            <Modal.Header closeButton>
              <Modal.Title className="modalTittle">
                Reporte de Planillas Mensuales
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form action="">
                <Form.Group>
                  <Button>Ver Planilla mes actual</Button>
                </Form.Group>
                <Form.Group>
                  <label htmlFor="">Seleccione Planilla a ver:</label>
                  <Form.Control
                    className="controlTime"
                    as="select"
                    custom
                    required
                  >
                    <option hidden>Elegir rango en meses</option>
                    <option value="falta">Enero-Febrero</option>
                    <option value="tardanza">Febrero-Marzo</option>
                    <option value="tardanza">Marzo-Abril</option>
                    <option value="tardanza">Abril-Mayo</option>
                    <option value="tardanza">Mayo-Junio</option>
                    <option value="tardanza">Junio-Julio</option>
                    <option value="tardanza">Julio-Agosto</option>
                    <option value="tardanza">Agosto-Septiembre</option>
                    <option value="tardanza">Septiembre-Octubre</option>
                    <option value="tardanza">Octubre-Noviembre</option>
                    <option value="tardanza">Noviembre-Diciembre</option>
                    <option value="tardanza">Diciembre-Enero</option>
                  </Form.Control>
                </Form.Group>
                <Button>Buscar</Button>
              </form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="danger" onClick={handleClose1}>
                Volver
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </div>
  );
}

export { PrePlanilla };
