import { useContext, useEffect, useState } from "react";
import { Navbar } from "../../components/navbar/Navbar";
import Candidato_modal from "../../components/modal_NCandidate/Candidato_modal";
import { Sidebar } from "../../components/Side/Sidebar";
import { Modal, Button } from "react-bootstrap";
import "./newcandidate.css";

function NewCandidate() {
  const [show, setshow] = useState(true);
  const handleShow = () => setshow(true);
  const handleClose = () => setshow(false);
  return (
    <div className="newCandidate">
      <Sidebar />
      <div className="newCandi">
        <Navbar />
        <div className="candidate-title">
          Ingrese los datos del nuevo candidato
        </div>
        <div className="newCandiCont">
          <Modal size="xl" centered show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title className="modalTittle">Nuevo Candidato</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Candidato_modal />
            </Modal.Body>
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default NewCandidate;
