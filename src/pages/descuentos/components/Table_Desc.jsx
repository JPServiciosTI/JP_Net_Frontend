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
import { Adelantos } from "./Modals/modal_Adelantos/Adelantos";
import { Prestamo } from "./Modals/modal_Prestamo/Prestamo";
import { DescPrestamos } from "./Modals/modal_DescPrestamosARendir/DescPrestamos";
import { DescRRHH } from "./Modals/modal_DesRRHH/DescRRHH";
import { PensionAlimenticia } from "./Modals/modal_PensionAlimentciai/PensionAlimenticia";
import {
  GiMoneyStack,
  GiTakeMyMoney,
  GiPayMoney,
  GiWallet,
  GiHumanPyramid,
} from "react-icons/gi";
import { get } from "../../../services/api/api.service";
function Table_Desc() {
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

  const [datosCandidatos, setDatosCandidatos] = useState([])
  const [idCandidato, setIdCandidatos] = useState()

  const getDataDeEmpleadoss = async () => {
    try {
      const data = await get({
        url: '/empleado/getForLimit',
        data: {
          idmin: 0,
          cantidad: 10,
        },
      })

      setDatosCandidatos(data['id'][0])
      console.log('Aqui; ', datosCandidatos)
      return
    } catch (error) {
      console.log(error)
    }
  }

  let cargado = false
  useEffect(() => {
    if (!cargado) {
      cargado = true
      getDataDeEmpleadoss()
    }
  }, [])

  const rows = [
    {
      img: "https://cdn-icons-png.flaticon.com/512/4128/4128349.png",
      nombres: "Brando Lugger",
      descuentoquinta: 100,
      devolucionquinta: 10,
      fondopension: "AFP",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/512/4128/4128262.png",
      nombres: "Brando Lugger",
      descuentoquinta: 50,
      devolucionquinta: 10,
      fondopension: "ONP",
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

            <TableCell align="center" className="tableCell">
              <span>Fondo de Pensión </span>
            </TableCell>
            <TableCell text-align="center" className="tableCell">
              <span>Adelantos</span>
            </TableCell>
            <TableCell align="center" className="tableCell">
              <span>Préstamos </span>
            </TableCell>
            <TableCell align="center" className="tableCell">
              <span>Descuentos Préstamos</span>
            </TableCell>
            <TableCell align="center" className="tableCell">
              <span>Descuentos RRHH</span>
            </TableCell>
            <TableCell className="tableCell">
              <span>Pensión alimenticia</span>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {datosCandidatos.map((row) => (
            <TableRow key={row.nombres}>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={'https://picsum.photos/300'} alt="" className="image" />
                  <a href="">{row.Nombres} {row.ApellidoPaterno} {row.ApellidoMaterno}</a>
                </div>
              </TableCell>
              <TableCell className="tableCell btn" align="center">
                <a href="">{row.idFondoDePension}</a>
              </TableCell>
              <TableCell className="tableCell btn" align="center">
                <button onClick={handleShow1} data-toggle="modal1">
                  {row.cell}
                  <GiMoneyStack className="tablei" />
                </button>
              </TableCell>
              <TableCell className="tableCell btn" align="center">
                <button onClick={handleShow2} data-toggle="modal1">
                  {row.cell}
                  <GiTakeMyMoney className="tablei" />
                </button>
              </TableCell>
              <TableCell className="tableCell btn" align="center">
                <button onClick={handleShow3} data-toggle="modal1">
                  {row.cell}
                  <GiPayMoney className="tablei" />
                </button>
              </TableCell>
              <TableCell className="tableCell btn" align="center">
                <button onClick={handleShow4} data-toggle="modal1">
                  {row.cell}
                  <GiHumanPyramid className="tablei" />
                </button>
              </TableCell>
              <TableCell className="tableCell btn" align="center">
                <button onClick={handleShow5} data-toggle="modal5">
                  {row.cell}
                  <GiWallet className="tablei" />
                </button>
              </TableCell>
            </TableRow>
          ))}
          <Modal show={show1} onHide={handleClose1}>
            <Modal.Header closeButton>
              <Modal.Title className="modalTittle">
                Descuento por adelantos
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Adelantos />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="danger" onClick={handleClose1}>
                Cerrar
              </Button>
            </Modal.Footer>
          </Modal>
          <Modal show={show2} onHide={handleClose2}>
            <Modal.Header closeButton>
              <Modal.Title className="modalTittle">
                Descuento por Préstamo
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Prestamo />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="danger" onClick={handleClose2}>
                Cerrar
              </Button>
            </Modal.Footer>
          </Modal>
          <Modal show={show3} onHide={handleClose3}>
            <Modal.Header closeButton>
              <Modal.Title className="modalTittle">
                Descuento Préstamo a rendir
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <DescPrestamos />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="danger" onClick={handleClose3}>
                Cerrar
              </Button>
            </Modal.Footer>
          </Modal>
          <Modal show={show4} onHide={handleClose4}>
            <Modal.Header closeButton>
              <Modal.Title className="modalTittle">Descuento RRHH</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <DescRRHH />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="danger" onClick={handleClose4}>
                Cerrar
              </Button>
            </Modal.Footer>
          </Modal>
          <Modal show={show5} onHide={handleClose5}>
            <Modal.Header closeButton>
              <Modal.Title className="modalTittle">
                Descuento Pensión Alimenticia
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <PensionAlimenticia />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="danger" onClick={handleClose5}>
                Cerrar
              </Button>
            </Modal.Footer>
          </Modal>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export { Table_Desc };
