import { useContext, useEffect, useState } from "react";
import { NewPersonal_main } from "../../components/modal_NPersonal/NewPersonal_main";
import { Navbar } from "../../components/navbar/Navbar";
import { Sidebar } from "../../components/Side/Sidebar";
import { Modal, Button } from "react-bootstrap";
import "./newpersonal.css";

function Newpersonal() {
  const [show, setshow] = useState(true);
  const handleShow = () => setshow(true);
  const handleClose = () => setshow(false);

  return (
    <div className="newPersonal">
      <Sidebar />
      <div className="newCont">
        <Navbar />
        <div className="personalContainer">
          <div className="personal-title">
            Ingrese los datos del nuevo trabajador
          </div>
          <div className="newContainer">
            <Modal size="xl" centered show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title className="modalTittle">
                  Nuevo Candidato
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <NewPersonal_main />
              </Modal.Body>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Newpersonal };
