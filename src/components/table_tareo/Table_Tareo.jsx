import { React, useContext, useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Modal, Button } from "react-bootstrap";
import { BiAddToQueue } from "react-icons/bi";
import { TbReport } from "react-icons/tb";
import { NewExtraTime } from "../Modals/modal_Nhoraextra/NewExtraTime";
import { NewTareo } from "../Modals/modal_Ntareo/NewTareo";
import { LicenciaCon } from "../Modals/modal_LicenciaCon/LicenciaCon";
import { FeriadosTrabajados } from "../Modals/modal_FeriadosTrabajados/FeriadosTrabajados";

import "./table_tareo.css";
import Calendar from "moedim";
import { Calendario } from "../Modals/modal_Calendario/Calendario";
import { Vacaciones } from "../Modals/modal_Vacaciones/Vacaciones";
import DescansosTrabajados from "../Modals/modal_DescansosTrabajados/DescansosTrabajados";
import { DescansoMedico } from "../Modals/modal_DescnasoMedico/DescansoMedico";

const hoy = new Date();
let day = hoy.getDate();
let month = hoy.getMonth() + 1;
let year = hoy.getFullYear();
day = ("0" + day).slice(-2);
month = ("0" + month).slice(-2);
let date = day + "/" + month + "/" + year;

function Table_Tareo() {
  const [show1, setshow1] = useState(false);
  const handleShow1 = () => setshow1(true);
  const handleClose1 = () => setshow1(false);

  const [show2, setshow2] = useState(false);
  const handleShow2 = () => setshow2(true);
  const handleClose2 = () => setshow2(false);

  const [show3, setshow3] = useState(false);
  const handleShow3 = () => setshow3(true);
  const handleClose3 = () => setshow3(false);

  const [show4, setshow4] = useState(false);
  const handleShow4 = () => setshow4(true);
  const handleClose4 = () => setshow4(false);

  const [show5, setshow5] = useState(false);
  const handleShow5 = () => setshow5(true);
  const handleClose5 = () => setshow5(false);

  const [show6, setshow6] = useState(false);
  const handleShow6 = () => setshow6(true);
  const handleClose6 = () => setshow6(false);

  const [show7, setshow7] = useState(false);
  const handleShow7 = () => setshow7(true);
  const handleClose7 = () => setshow7(false);

  const [show8, setshow8] = useState(false);
  const handleShow8 = () => setshow8(true);
  const handleClose8 = () => setshow8(false);

  const [show9, setshow9] = useState(false);
  const handleShow9 = () => setshow9(true);
  const handleClose9 = () => setshow9(false);

  /*const [value, setValue] = useState(new Date());
  const StyledCalendar = styled(Calendar)`
    --moedim-primary: #f00;
  `;*/

  const rows = [
    {
      img: "https://cdn-icons-png.flaticon.com/512/4128/4128349.png",
      nombres: "Brando Lugger",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/512/4128/4128262.png",
      nombres: "Brando Lugger",
    },
  ];

  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">
              <span>Nombres</span>
            </TableCell>
            <TableCell className="tableCell">
              <span>Tareo</span>
            </TableCell>
            <TableCell align="center" className="tableCell">
              <span>Licencia con</span>
            </TableCell>
            <TableCell align="center" className="tableCell">
              <span>Licencia sin</span>
            </TableCell>
            <TableCell text-align="center" className="tableCell">
              <span>Horas extras</span>
            </TableCell>
            <TableCell align="center" className="tableCell">
              <span>Vacaciones</span>
            </TableCell>
            <TableCell align="center" className="tableCell">
              <span>Feriados Trabajados</span>
            </TableCell>
            <TableCell align="center" className="tableCell">
              <span>Descansos Trabajados</span>
            </TableCell>
            <TableCell align="center" className="tableCell">
              <span>Descanso Médico</span>
            </TableCell>
            <TableCell className="tableCell">
              <span>Tareo histórico</span>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.nombres}>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  <a href="">{row.nombres}</a>
                </div>
              </TableCell>
              <TableCell className="tableCell btn" align="center">
                <button onClick={handleShow2} data-toggle="modal2">
                  {row.cell}
                  <BiAddToQueue className="tablei" />
                </button>
              </TableCell>
              <TableCell className="tableCell btn" align="center">
                <button onClick={handleShow3} data-toggle="modal3">
                  {row.cell}
                  <BiAddToQueue className="tablei" />
                </button>
              </TableCell>
              <TableCell className="tableCell btn" align="center">
                <button onClick={handleShow4} data-toggle="modal4">
                  {row.cell}
                  <BiAddToQueue className="tablei" />
                </button>
              </TableCell>
              <TableCell className="tableCell btn" align="center">
                <button onClick={handleShow1} data-toggle="modal1">
                  {row.cell}
                  <BiAddToQueue className="tablei" />
                </button>
              </TableCell>
              <TableCell className="tableCell btn" align="center">
                <button onClick={handleShow6} data-toggle="modal1">
                  {row.cell}
                  <BiAddToQueue className="tablei" />
                </button>
              </TableCell>
              <TableCell className="tableCell btn" align="center">
                <button onClick={handleShow7} data-toggle="modal1">
                  {row.cell}
                  <BiAddToQueue className="tablei" />
                </button>
              </TableCell>
              <TableCell className="tableCell btn" align="center">
                <button onClick={handleShow8} data-toggle="modal1">
                  {row.cell}
                  <BiAddToQueue className="tablei" />
                </button>
              </TableCell>
              <TableCell className="tableCell btn" align="center">
                <button onClick={handleShow9} data-toggle="modal1">
                  {row.cell}
                  <BiAddToQueue className="tablei" />
                </button>
              </TableCell>

              <TableCell className="tableCell btn" align="center">
                <button onClick={handleShow5} data-toggle="modal5">
                  {row.cell}
                  <TbReport className="tablei" />
                </button>
              </TableCell>
            </TableRow>
          ))}
          <Modal show={show1} onHide={handleClose1}>
            <Modal.Header>
              <Modal.Title className="modalTittle">
                Registrar Hora Extra
              </Modal.Title>
              <div className="time">
                <label htmlFor="">{date}</label>
              </div>
            </Modal.Header>
            <Modal.Body>
              <NewExtraTime />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="danger" onClick={handleClose1}>
                Cerrar
              </Button>
            </Modal.Footer>
          </Modal>
          <Modal show={show2} onHide={handleClose2}>
            <Modal.Header>
              <Modal.Title className="modalTittle">
                Registrar Nuevo Tareo
              </Modal.Title>
              <div className="time">
                <label htmlFor="">{date}</label>
              </div>
            </Modal.Header>
            <Modal.Body>
              <NewTareo />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="danger" onClick={handleClose2}>
                Cerrar
              </Button>
            </Modal.Footer>
          </Modal>
          <Modal show={show3} onHide={handleClose3}>
            <Modal.Header>
              <Modal.Title className="modalTittle">
                Registrar Licencia con Goce
              </Modal.Title>
              <div className="time">
                <label htmlFor="">{date}</label>
              </div>
            </Modal.Header>
            <Modal.Body>
              <LicenciaCon />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="danger" onClick={handleClose3}>
                Cerrar
              </Button>
            </Modal.Footer>
          </Modal>
          <Modal show={show4} onHide={handleClose4}>
            <Modal.Header>
              <Modal.Title className="modalTittle">
                Registrar Licencia sin Goce
              </Modal.Title>
              <div className="time">
                <label htmlFor="">{date}</label>
              </div>
            </Modal.Header>
            <Modal.Body>
              <LicenciaCon />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="danger" onClick={handleClose4}>
                Cerrar
              </Button>
            </Modal.Footer>
          </Modal>
          <Modal show={show5} onHide={handleClose5}>
            <Modal.Header>
              <Modal.Title className="modalTittle">Tareo Histórico</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Calendario />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="danger" onClick={handleClose5}>
                {" "}
                Cerrar
              </Button>
            </Modal.Footer>
            <div id="date-popup" />
          </Modal>
          <Modal show={show6} onHide={handleClose6}>
            <Modal.Header>
              <Modal.Title className="modalTittle">Vacaciones</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Vacaciones />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="danger" onClick={handleClose6}>
                {" "}
                Cerrar
              </Button>
            </Modal.Footer>
            <div id="date-popup" />
          </Modal>
          <Modal show={show7} onHide={handleClose7}>
            <Modal.Header>
              <Modal.Title className="modalTittle">
                Feriados Trabajados
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <FeriadosTrabajados />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="danger" onClick={handleClose7}>
                {" "}
                Cerrar
              </Button>
            </Modal.Footer>
            <div id="date-popup" />
          </Modal>
          <Modal show={show8} onHide={handleClose8}>
            <Modal.Header>
              <Modal.Title className="modalTittle">
                Descansos Trabajados
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <DescansosTrabajados />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="danger" onClick={handleClose8}>
                {" "}
                Cerrar
              </Button>
            </Modal.Footer>
            <div id="date-popup" />
          </Modal>
          <Modal show={show9} onHide={handleClose9}>
            <Modal.Header>
              <Modal.Title className="modalTittle">Descanso Médico</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <DescansoMedico />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="danger" onClick={handleClose9}>
                {" "}
                Cerrar
              </Button>
            </Modal.Footer>
            <div id="date-popup" />
          </Modal>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export { Table_Tareo };
