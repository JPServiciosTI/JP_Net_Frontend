import { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Modal, Button } from "react-bootstrap";
import { BiBriefcaseAlt2, BiErrorAlt , BiAddToQueue} from "react-icons/bi";

import "./table_tareo.css";
import { get } from "../../../../services/api/api.service";
import { ActualizarEstadoDeProcesoDeCandidato } from "./modal_ActualizarEstadoDeProcesoDeCandidato/components/ActualizarEstadoDeProcesoDeCandidato";
import { useCookies } from "react-cookie";
import { BottomNavigation } from "@mui/material";
import Candidato_modal from "./modal_NuevoCandidato";
import { NewPersonal_main } from "./modal_NPersonal/NewPersonal_main";


const hoy = new Date();
let day = hoy.getDate();
let month = hoy.getMonth() + 1;
let year = hoy.getFullYear();
day = ("0" + day).slice(-2);
month = ("0" + month).slice(-2);
let date = day + "/" + month + "/" + year;

function TableCandidatos() {
  const [datosCandidatos, setDatosCandidatos] = useState([]);
  const [idCandidato,setIdCandidatos] = useState();
  const getDataDeCandidatos = async () => {
    try {
      const data = await get({
        url: "/candidato/getForLimit",
        data: {
          idmin: 0,
          cantidad: 10,
        },
      });

      setDatosCandidatos(data["id"][0]);
      
      return;
    } catch (error) {
      console.log(error);
    }
  };

  let enviado = false;
  useEffect(() => {
    try {
      if (!enviado) {
        getDataDeCandidatos();
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  const [show2, setshow2] = useState(false);
  const handleShow2 = (e) => {
    e.preventDefault();
    setshow2(true);
    console.log("Valores del Console", e.target.value);
    setCookie("jp_net_dni_candidato", e.target.value, { path: "/" });
    setIdCandidatos(e.target.value)
  };
  const handleClose2 = () => {
    localStorage.removeItem("jp_net_dni_candidato");
    removeCookie("jp_net_dni_candidato");
    setDatosCandidatos([]);
    getDataDeCandidatos();
    setshow2(false);
  };
  const [cookies, setCookie, removeCookie] = useCookies([
    "jp_net_dni_candidato",
  ]);


  const [show6, setshow6] = useState(false);
  const handleShow6 = (e) => {
    e.preventDefault();
    setshow6(true);
   };
  const handleClose6 = () => {
    setshow6(false);
  };

  const [show, setshow] = useState(false);
  const handleShow = (e) => {
    e.preventDefault();
    setshow(true);
   };
  const handleClose = () => {
    setshow(false);
  };

  const rows = [
    {
      img: "https://cdn-icons-png.flaticon.com/512/4128/4128349.png",
      nombres: "Brando Lugger",
      apellidos: "Pinto Checya",
      cargo: "TI",
      dni: "70471667  ",
      cell: () => <button>Registrar</button>,
    },
    {
      img: "https://cdn-icons-png.flaticon.com/512/4128/4128262.png",
      nombres: "Brando Lugger",
      apellidos: "Pinto Checya",
      cargo: "TI",
      dni: "70471667  ",
      cell: () => <button>Registrar</button>,
    },
  ];


  const handleContratoAEmpleado = async ()=>{
    try {
      const data = await get({
        url: "/candidato/getForLimit",
        data: {
          idmin: 0,
          cantidad: 10,
        },
      });

      setDatosCandidatos(data["id"][0]);
      //console.log("VALORES:", datosCandidatos);
      return;
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <TableContainer component={Paper} className="table">
      <button onClick={handleShow6} data-toggle="modal2" className="botondeanadir" >
        <BiAddToQueue className="tablei" />
      </button>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
          <TableCell className="tableCell">
              <span></span>
            </TableCell>
            <TableCell className="tableCell btn">
              <span>Nombre Completo</span>
            </TableCell>
            <TableCell className="tableCell">
              <span>Cargo Tentativo</span>
            </TableCell>
            <TableCell className="tableCell">
              <span>Pretension Salarial</span>
            </TableCell>
            <TableCell className="tableCell">
              <span>Etapa del Proceso</span>
            </TableCell>
            <TableCell className="tableCell">
              <span>Acción</span>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          
          {datosCandidatos.map((row) => (
            <TableRow key={row.idCandidato}>
              <TableCell>
              <div className="cellWrapper">
                  <img src={"https://picsum.photos/300"} alt="" className="image" />

              </div>
              </TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <p>
                    {row.Nombres} {row.ApellidoPaterno} {row.ApellidoMaterno}
                  </p>
                </div>
              </TableCell>
              <TableCell className="tableCell">
                <p>{row.NombreCargo}</p>
              </TableCell>
              <TableCell className="tableCell">
                <p>{row.PretencionSalaria}</p>
              </TableCell>
              <TableCell value={row.idCandidato} className="tableCell btn">
                <ComprobarEstadoProceso                   
                  EtapaDeContratacion={row.EtapaDeContratacion}
                  EtapaDeEntrevista={row.EtapaDeEntrevista}
                  EtapaDeLlamada={row.EtapaDeLlamada}
                  EtapaPrevia={row.EtapaPrevia}
                  datos={row.idCandidato}
                  />
              </TableCell>
              <TableCell className="tableCell btn">
                <ComprobarEstado
                  EtapaDeContratacion={row.EtapaDeContratacion}
                  EtapaDeEntrevista={row.EtapaDeEntrevista}
                  EtapaDeLlamada={row.EtapaDeLlamada}
                  EtapaPrevia={row.EtapaPrevia}
                />
              </TableCell>
            </TableRow>
          ))}
          <Modal show={show2} onHide={handleShow2}>
            <Modal.Header>
              <Modal.Title className="modalTittle">
                Actualizar Proceso de Candidato
              </Modal.Title>
              <div className="time">
                <label htmlFor="">{date}</label>
              </div>
            </Modal.Header>
            <Modal.Body>
              <ActualizarEstadoDeProcesoDeCandidato />
            </Modal.Body>
            
            <Modal.Footer>
              <Button variant="danger" onClick={handleClose2}>
                Cerrar
              </Button>
            </Modal.Footer>
          </Modal>
          <Modal show={show6} onHide={handleShow6}>
            <Modal.Header>
              <Modal.Title className="modalTittle">
                Nuevo Candidato
              </Modal.Title>
              <div className="time">
                <label htmlFor="">{date}</label>
              </div>
            </Modal.Header>
            <Modal.Body>
              <Candidato_modal />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="danger" onClick={handleClose6}>
                Cerrar
              </Button>
            </Modal.Footer>
          </Modal>
          <Modal size="xl" centered show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title className="modalTittle">
                  Nuevo Empleado
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <NewPersonal_main />
              </Modal.Body>
            </Modal>
        </TableBody>
      </Table>
    </TableContainer>
  );

  function ComprobarEstadoProceso(props) {
    console.log(
      "Valores propuestos",
      props.EtapaDeContratacion,
      props.EtapaDeEntrevista,
      props.EtapaDeLlamada,
      props.EtapaPrevia
    );
    if (
      props.EtapaDeContratacion == 1 &&
      props.EtapaDeEntrevista == 1 &&
      props.EtapaDeLlamada == 1 &&
      props.EtapaPrevia == 1
    ) {
      console.log("AQUI");
      return (<p> PROCESO TERMINADO</p>);
    }
    console.log("AQUI no");

    return ( <button
      value={props.datos}
      onClick={handleShow2}
      data-toggle="modal2"
    >
    </button>);
  }

  function EtapasCompletas(props) {
    return (
      <button onClick={handleShow2} data-toggle="modal2" className="botondecontrato" >
        <BiBriefcaseAlt2 className="tablei" />

      </button>
    );
  }


  function ComprobarEstado(props) {
    console.log(
      "Valores propuestos",
      props.EtapaDeContratacion,
      props.EtapaDeEntrevista,
      props.EtapaDeLlamada,
      props.EtapaPrevia
    );
    if (
      props.EtapaDeContratacion == 1 &&
      props.EtapaDeEntrevista == 1 &&
      props.EtapaDeLlamada == 1 &&
      props.EtapaPrevia == 1
    ) {
      console.log("AQUI");
      return <EtapasCompletas />;
    }
    console.log("AQUI no");

    return <EtapasIncompletas />;
  }

  function EtapasCompletas(props) {
    return (
      <button onClick={handleShow} data-toggle="modal2" className="botondecontrato" >
        <BiBriefcaseAlt2 className="tablei" />

      </button>
    );
  }

  function EtapasIncompletas(props) {
    return (
      <button disabled="disabled" className="">
        <BiErrorAlt className="tablei" />
      </button>
    );
  }
}
export { TableCandidatos };
