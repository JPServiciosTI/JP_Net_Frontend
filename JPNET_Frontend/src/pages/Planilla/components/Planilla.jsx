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
import { get, post } from "../../../services/api/api.service";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router";
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
  const [QuintaRenta, setQuintaRenta] = useState(0);
  const [PensionAlimenticia, setPensionAlimenticia] = useState(0);
  const [Tardanza, setTardanza] = useState(0);
  const [Faltas, setFaltas] = useState(0);
  const [Adelantos, setAdelantos] = useState(0);
  const [Prestamo, setPrestamo] = useState(0);
  const [AsignacionFamiliar, setAsignacionFamiliar] = useState(0);
  const [HorasExtra, setHorasExtra] = useState(0);
  const [Reintegro, setReintegro] = useState(0);
  const [Periodo, setPeriodo] = useState(2);
  const [DescansoMedico, setDescansoMedico] = useState(0);
  const [DCGH, setDCGH] = useState(0);
  const [Vacaciones, setVacaciones] = useState(0);

  const [cookies, setCookie, removeCookie] = useCookies([
    "jp_net_planilla_idContrato",
  ]);

  const [show1, setshow1] = useState(false);
  const handleShow1 = () => setshow1(true);
  const handleClose1 = () => setshow1(false);

  const [show2, setshow2] = useState(false);
  const handleShow2 = (e) => {
    console.log("Escrito: ", e.target.value);
    setshow2(true);
    e.preventDefault();
    setAsignacionFamiliar(DatosPlanilla[e.target.value].AsignacionFamiliar);
    setDescansoMedico(DatosPlanilla[e.target.value].DescansoMedico || 0);
    setDCGH(DatosPlanilla[e.target.value].DiasConGoce || 0);
    setVacaciones(DatosPlanilla[e.target.value].Vacaciones || 0);
    setHorasExtra(DatosPlanilla[e.target.value].HorasExtra || 0);
    setReintegro(DatosPlanilla[e.target.value].Reintegro || 0);
  };
  const handleClose2 = () => setshow2(false);

  const [show3, setshow3] = useState(false);
  const handleShow3 = (e) => {
    setshow3(true);
    e.preventDefault();
    setCookie("jp_net_planilla_idContrato", e.target.value, { path: "/" });
  };
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
    setRowsPerPage(event.target.value);
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
          Periodo: 2
        },
      });
      setDatosPlanilla(datos["id"][0]);
      console.log("Datoss: ",DatosPlanilla);
    } catch (error) {
      console.log(error);
    }
  };

  let navigate = useNavigate();
  const onClickExport = async (e) => {
    try {
      const datos = await post({
        url: "/consolidado/guardar",
        data: {
          data: DatosPlanilla,
        },
      });
      let ruta = "/export";
      navigate(ruta);
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
    console.log(DatosPlanilla);
  }, []);
  /* FIN PAGINACIÓN DE TABLAS */

  /*BUSQUEDA PERSONA*/

  /* FIn BUSQUEDA DE PERSONA */

  return (
    <Paper>
      <button onClick={onClickExport}>Exportar</button>
      <TableContainer component={Paper} className="table">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className="tableCell">
                <span>Nombres Apellidos</span>
              </TableCell>
              <TableCell className="tableCell">
                <span>Sueldo Base</span>
              </TableCell>
              <TableCell className="tableCell">
                <span>Tareo Computado</span>
              </TableCell>
              <TableCell className="tableCell">
                <span>Compensaciones Adicionales</span>
              </TableCell>
              <TableCell className="tableCell">
                <span>Montos a Regularizar</span>
              </TableCell>
              <TableCell className="tableCell">
                <span>Total Descuento</span>
              </TableCell>
              <TableCell className="tableCell">
                <span>Sueldo Neto</span>
              </TableCell>
              <TableCell className="tableCell">
                <span>EsSalud</span>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {DatosPlanilla.map((row, index) => (
              <TableRow key={row.idContrato}>
                <TableCell className="tableCell">
                  <div className="cellWrapper">
                    <img
                      src={"https://picsum.photos/300"}
                      alt=""
                      className="image"
                    />
                    {row.ApellidoPaterno} {row.ApellidoMaterno} {", "}{" "}
                    {row.Nombres}
                  </div>
                </TableCell>
                <TableCell align="center" className="tableCell" width={"150px"}>
                  {row.SueldoBase}
                </TableCell>
                <TableCell className="tableCell btn" align="center">
                  {row.SueldoTareado}
                  <button onClick={handleShow1} data-toggle="modal1">
                    <BsFillEyeFill />
                  </button>
                </TableCell>
                <TableCell align="center" className="tableCell" width={"150px"}>
                  {row.CompensacionesAdicionales || 0}
                  <button
                    onClick={handleShow2}
                    data-toggle="modal2"
                    value={index}
                  ></button>
                </TableCell>
                <TableCell className="tableCell btn" align="center">
                  {row.montosaregularizar}
                  <button onClick={handleShow3} data-toggle="modal3">
                    <BsFillEyeFill />
                  </button>
                </TableCell>

                <TableCell className="tableCell btn" align="center">
                  {row.TotalDescuentos}
                  <button
                    onClick={async (e) => {
                      try {
                        const datos = await post({
                          url: "/consolidado/guardar",
                          data: {
                            data: DatosPlanilla,
                          },
                        });
                        console.log("Funciona");
                        navigate("/export");
                      } catch (error) {
                        console.log(error);
                      }
                    }}
                    data-toggle="modal3"
                    value={row.idContrato}
                  ></button>
                </TableCell>
                <TableCell className="tableCell btn" align="center">
                  {row.NetoTotal}
                </TableCell>
                <TableCell className="tableCell btn" align="center">
                  {row.EsSalud}
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
                <Modal.Title className="modalTitle">
                  Compensaciones Adicionales
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Bonos
                  AsignacionFamiliar={AsignacionFamiliar}
                  HorasExtras={HorasExtra}
                  Reintegro={Reintegro}
                />
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
                <TotalDescuento Periodo={Periodo} />
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

export { PlanillaTable };
