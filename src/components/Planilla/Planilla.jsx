import React from "react";
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
import SearchBar from "material-ui-search-bar";
import { Calendario } from "../Modals/modal_Calendario/Calendario";
import Bonos from "../Modals/modal_Bonos/Bonos";
import TotalDescuento from "../Modals/modal_TotalDescuento/TotalDescuento";
import FondoPension from "../Modals/modal_FondoPension/FondoPension";

const rows = [
  {
    img: "https://cdn-icons-png.flaticon.com/512/4128/4128349.png",
    nombres: "Yohanna Merma",
    sueldobruto: 1700.0,
    remuneracionsasegurable: 1700.0,
    aportefondo: 203.49,
    totaldescuento: 203.49,
    montosaregularizar: 0,
    sueldoneto: 1496.51,
    essalud: 134.64,
  },
  {
    img: "https://cdn-icons-png.flaticon.com/512/4128/4128349.png",
    nombres: "Catherine Saico",
    sueldobruto: 1025.0,
    remuneracionsasegurable: 1025.0,
    aportefondo: 122.18,
    totaldescuento: 122.18,
    montosaregularizar: 0,
    sueldoneto: 902.82,
    essalud: 81.25,
  },
  {
    img: "https://cdn-icons-png.flaticon.com/512/4128/4128349.png",
    nombres: "Edison Quispe",
    sueldobruto: 1025.0,
    remuneracionsasegurable: 1025.0,
    aportefondo: 120.34,
    totaldescuento: 120.34,
    montosaregularizar: 0,
    sueldoneto: 904.67,
    essalud: 81.42,
  },
  {
    img: "https://cdn-icons-png.flaticon.com/512/4128/4128349.png",
    nombres: "Mauricio Leiva",
    sueldobruto: 1025.0,
    remuneracionsasegurable: 1047.21,
    aportefondo: 122.94,
    totaldescuento: 122.94,
    montosaregularizar: 0,
    sueldoneto: 924.27,
    essalud: 83.18,
  },
  {
    img: "https://cdn-icons-png.flaticon.com/512/4128/4128349.png",
    nombres: "Christopher Chavez",
    sueldobruto: 1025.0,
    remuneracionsasegurable: 1047.21,
    aportefondo: 136.14,
    totaldescuento: 136.14,
    montosaregularizar: 0,
    sueldoneto: 911.07,
    essalud: 82.0,
  },
  {
    img: "https://cdn-icons-png.flaticon.com/512/4128/4128349.png",
    nombres: "Geraldo Vizcarra",
    sueldobruto: 1025.0,
    remuneracionsasegurable: 1025.0,
    aportefondo: 120.34,
    totaldescuento: 120.34,
    montosaregularizar: 0,
    sueldoneto: 904.67,
    essalud: 81.42,
  },
  {
    img: "https://cdn-icons-png.flaticon.com/512/4128/4128349.png",
    nombres: "Nicolle Castañeda",
    sueldobruto: 1025.0,
    remuneracionsasegurable: 1025.0,
    aportefondo: 120.34,
    totaldescuento: 120.34,
    montosaregularizar: 0,
    sueldoneto: 904.67,
    essalud: 81.42,
  },
  {
    img: "https://cdn-icons-png.flaticon.com/512/4128/4128349.png",
    nombres: "Ximena Gonzales",
    sueldobruto: 935.91,
    remuneracionsasegurable: 935.91,
    aportefondo: 112.03,
    totaldescuento: 112.03,
    montosaregularizar: 0,
    sueldoneto: 823.88,
    essalud: 74.15,
  },
  {
    img: "https://cdn-icons-png.flaticon.com/512/4128/4128349.png",
    nombres: "Camila Quiroz",
    sueldobruto: 918.63,
    remuneracionsasegurable: 918.63,
    aportefondo: 107.85,
    totaldescuento: 107.85,
    montosaregularizar: 0,
    sueldoneto: 810.78,
    essalud: 72.97,
  },
  {
    img: "https://cdn-icons-png.flaticon.com/512/4128/4128349.png",
    nombres: "Luz Yanque",
    sueldobruto: 574.15,
    remuneracionsasegurable: 574.15,
    aportefondo: 67.41,
    totaldescuento: 67.41,
    montosaregularizar: 0,
    sueldoneto: 506.75,
    essalud: 45.6,
  },
  {
    img: "https://cdn-icons-png.flaticon.com/512/4128/4128349.png",
    nombres: "Piero Vizcarra",
    sueldobruto: 1500.0,
    remuneracionsasegurable: 1500.0,
    aportefondo: 176.1,
    totaldescuento: 426.1,
    montosaregularizar: 0,
    sueldoneto: 1073.9,
    essalud: 96.65,
  },
  {
    img: "https://cdn-icons-png.flaticon.com/512/4128/4128349.png",
    nombres: "Brando Pinto",
    sueldobruto: 1500.0,
    remuneracionsasegurable: 1500.0,
    aportefondo: 195.0,
    totaldescuento: 195.0,
    montosaregularizar: 0,
    sueldoneto: 1305.0,
    essalud: 117.45,
  },
  {
    img: "https://cdn-icons-png.flaticon.com/512/4128/4128349.png",
    nombres: "Sergio Barreda",
    sueldobruto: 1143.68,
    remuneracionsasegurable: 1143.68,
    aportefondo: 134.27,
    totaldescuento: 134.27,
    montosaregularizar: 0,
    sueldoneto: 1009.41,
    essalud: 90.85,
  },
  {
    img: "https://cdn-icons-png.flaticon.com/512/4128/4128349.png",
    nombres: "Yesenia Ramirez",
    sueldobruto: 362.85,
    remuneracionsasegurable: 465.35,
    aportefondo: 60.5,
    totaldescuento: 60.5,
    montosaregularizar: 0,
    sueldoneto: 404.85,
    essalud: 36.44,
  },
];

export default function Planilla() {
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
                <span>Nombres</span>
              </TableCell>
              <TableCell className="tableCell">
                <span>Sueldo Bruto</span>
              </TableCell>
              <TableCell className="tableCell">
                <span>Remuneración Asegurable</span>
              </TableCell>
              <TableCell className="tableCell">
                <span>Aporte Fondo</span>
              </TableCell>
              <TableCell className="tableCell">
                <span>Total Descuento</span>
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
            {rows.map((row) => (
              <TableRow key={row.nombres}>
                <TableCell className="tableCell">
                  <div className="cellWrapper">
                    <img src={row.img} alt="" className="image" />
                    <a href="">{row.nombres}</a>
                  </div>
                </TableCell>
                <TableCell align="center" className="tableCell" width={"150px"}>
                  <a href="">{row.sueldobruto}</a>
                  <button onClick={handleShow1} data-toggle="modal1">
                    <BsFillEyeFill />
                  </button>
                </TableCell>
                <TableCell className="tableCell btn" align="center">
                  <a href="">{row.remuneracionsasegurable}</a>
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
                  <a href="">{row.totaldescuento}</a>
                  <button onClick={handleShow3} data-toggle="modal3">
                    <BsFillEyeFill />
                  </button>
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
