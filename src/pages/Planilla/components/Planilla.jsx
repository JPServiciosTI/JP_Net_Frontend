import React, { useEffect } from "react";
import { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Modal, Button } from "react-bootstrap";
import { BsFillEyeFill } from "react-icons/bs";
import { TableFooter, TablePagination } from "@mui/material";
import { Calendario } from "../components/components/modal_Calendario/Calendario";
import Bonos from "../components/components/modal_Bonos/Bonos";
import TotalDescuento from "../components/components/modal_TotalDescuento/TotalDescuento";
import FondoPension from "../components/components/modal_FondoPension/FondoPension";
import { get } from "../../../services/api/api.service";

const rows = [
  {
    img: "https://cdn-icons-png.flaticon.com/512/4128/4128349.png",
    nombres: "Brando Lugger",
    apellidos: "Pinto Checya",
    sueldobruto: 1500,
    bono: 200,
    remuneracionsasegurable: 1500,
    totaldescuento: 200,
    aportefondo: 195,
    montosaregularizar: 10,
    essalud: 2,
  },
  {
    img: "https://cdn-icons-png.flaticon.com/512/4128/4128349.png",
    nombres: "Juan Sebastian",
    apellidos: "Perez Ramirez",
    sueldobruto: 1500,
    bono: 200,
    remuneracionsasegurable: 1500,
    totaldescuento: 200,
    aportefondo: 195,
    montosaregularizar: 10,
    essalud: 2,
  },
  {
    img: "https://cdn-icons-png.flaticon.com/512/4128/4128349.png",
    nombres: "Juan Sebastian",
    apellidos: "Perez Ramirez",
    sueldobruto: 1500,
    bono: 200,
    remuneracionsasegurable: 1500,
    totaldescuento: 200,
    aportefondo: 195,
    montosaregularizar: 10,
    essalud: 2,
  },
  {
    img: "https://cdn-icons-png.flaticon.com/512/4128/4128349.png",
    nombres: "Juan Sebastian",
    apellidos: "Perez Ramirez",
    sueldobruto: 1500,
    bono: 200,
    remuneracionsasegurable: 1500,
    totaldescuento: 200,
    aportefondo: 195,
    montosaregularizar: 10,
    essalud: 2,
  },
];

function PlanillaTable() {
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

  /* PAGINACIÓN DE TABLAS */
  const [page, setPage] = React.useState(1);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const [DatosPlanilla, setDatosPlanilla] = useState([]);

  const getDatos = async () => {
    try {
      const datos = await get({
        url: "/planilla/personas",
        data: {
          FechaInicio: "2023-01-16",
          FechaFin: "2023-02-15",
        },
      });
      setDatosPlanilla(datos["id"][0]);
    } catch (error) {
      console.log(error);
    }
  };

  let cargado = false;
  useEffect(() => {
    if (!cargado) {
      cargado = true;
      getDatos();
    }
  }, []);
  /* FIN PAGINACIÓN DE TABLAS */

  /*BUSQUEDA PERSONA*/

  /* FIn BUSQUEDA DE PERSONA */

  return (
    <Paper>
      <TableContainer component={Paper} className="table">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className="tableCell">
                <span>Nombres Apellidos</span>
              </TableCell>
              <TableCell className="tableCell">
                <span>Sueldo Bruto</span>
              </TableCell>
              <TableCell className="tableCell">
                <span>Bonos</span>
              </TableCell>
              <TableCell className="tableCell">
                <span>Remuneración Asegurable</span>
              </TableCell>
              <TableCell className="tableCell">
                <span>Total Descuento</span>
              </TableCell>
              <TableCell className="tableCell">
                <span>Aporte Fondo</span>
              </TableCell>
              <TableCell className="tableCell">
                <span>Monstos a Regularizar</span>
              </TableCell>
              <TableCell className="tableCell">
                <span>EsSalud</span>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {DatosPlanilla.map((row) => (
              <TableRow key={row.idContrato}>
                <TableCell className="tableCell">
                  <div className="cellWrapper">
                    <img src={"https://picsum.photos/300"} alt="" className="image" />
                    <a href="">{row.Nombres} {row.ApellidoPaterno} {row.ApellidoMaterno}</a>
                  </div>
                </TableCell>
                <TableCell align="center" className="tableCell" width={"150px"}>
                  <a href="">{row.sueldobruto}</a>
                  <button onClick={handleShow1} data-toggle="modal1">
                    <BsFillEyeFill />
                  </button>
                </TableCell>
                <TableCell align="center" className="tableCell" width={"150px"}>
                  <a href="">{row.bono}</a>
                  <button onClick={handleShow2} data-toggle="modal2">
                    <BsFillEyeFill />
                  </button>
                </TableCell>
                <TableCell className="tableCell btn" align="center">
                  <a href="">{row.remuneracionsasegurable}</a>
                </TableCell>
                <TableCell className="tableCell btn" align="center">
                  <a href="">{row.totaldescuento}</a>
                  <button onClick={handleShow3} data-toggle="modal3">
                    <BsFillEyeFill />
                  </button>
                </TableCell>
                <TableCell
                  className="tableCell btn"
                  align="center"
                  width={"150px"}
                >
                  <a href="">{row.aportefondo}</a>
                  <Button onClick={handleShow4} data-toggle="modal4">
                    <BsFillEyeFill />
                  </Button>
                </TableCell>
                <TableCell className="tableCell btn" align="center">
                  <a href="">{row.montosaregularizar}</a>
                </TableCell>
                <TableCell className="tableCell btn" align="center">
                  <a href="">{row.essalud}</a>
                </TableCell>
              </TableRow>
            ))}

            <Modal show={show1} onHide={handleClose1}>
              <Modal.Header closeButton>
                <Modal.Title className="modalTitle">Sueldo Bruto</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Calendario />
              </Modal.Body>
              <Modal.Footer>
                <Button variant="danger" onClick={handleClose1}>
                  Cerrar
                </Button>
              </Modal.Footer>
            </Modal>
            <Modal show={show2} onHide={handleClose2}>
              <Modal.Header closeButton>
                <Modal.Title className="modalTitle">Bonos</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Bonos />
              </Modal.Body>
              <Modal.Footer>
                <Button variant="danger" onClick={handleClose2}>
                  Cerrar
                </Button>
              </Modal.Footer>
            </Modal>
            <Modal show={show3} onHide={handleClose3}>
              <Modal.Header closeButton>
                <Modal.Title className="modalTitle">Bonos</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <TotalDescuento />
              </Modal.Body>
              <Modal.Footer>
                <Button variant="danger" onClick={handleClose3}>
                  Cerrar
                </Button>
              </Modal.Footer>
            </Modal>
            <Modal show={show4} onHide={handleClose4}>
              <Modal.Header closeButton>
                <Modal.Title className="modalTitle">Bonos</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <FondoPension />
              </Modal.Body>
              <Modal.Footer>
                <Button variant="danger" onClick={handleClose4}>
                  Cerrar
                </Button>
              </Modal.Footer>
            </Modal>
          </TableBody>
        </Table>
      </TableContainer>
      <TableFooter>
        <TablePagination
          rowsPerPageOptions={[2, 4, 6]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableFooter>
    </Paper>
  );
}

export {PlanillaTable}
