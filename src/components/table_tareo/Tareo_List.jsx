import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { get, post } from "../../services/api/api.service";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import './table.css'

function Tareo_List() {
  let param = useParams();

  const [DatosTareo, setDatosTareo] = useState([]);

  const getDatos = async () => {
    try {
      const datos = await post({
        url: "/empleado/gettareo",
        data: {
          idEmpleado: param.idEmpleado,
          fechaInicio: "2023-01-16",
          fechaFin: "2023-02-15",
        },
      });
      setDatosTareo(datos["id"][0]);
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

  let params = useParams();
  return (
    <>
      <TableContainer component={Paper} className="table">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className="tableCell">
                <span>Fecha</span>
              </TableCell>
              <TableCell className="tableCell">
                <span>HoraIngreso</span>
              </TableCell>
              <TableCell className="tableCell">
                <span>HoraInicioDeAlmuerzo</span>
              </TableCell>
              <TableCell className="tableCell">
                <span>HoraFinDeAlmuerzo</span>
              </TableCell>
              <TableCell className="tableCell">
                <span>HoraDeSalida</span>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {DatosTareo.map((row) => (
              <TableRow key={row.idTareo}>
                <TableCell className="tableCell">
                  <p>{row.Fecha}</p>
                </TableCell>
                <TableCell className="tableCell">
                  <div className="cellWrapper">
                  <p>
                    {row.HoraDeIngreso}
                  </p>
                  </div>
                </TableCell>
                <TableCell className="tableCell">
                  <p>
                    {row.HoraDeInicioDeAlmuerzo}
                  </p>
                </TableCell>
                <TableCell className="tableCell">
                  <p>{row.HoraDeFinDeAlmuerzo}</p>
                </TableCell>
                <TableCell className="tableCell">
                  <p>{row.HoraDeSalida}</p>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default Tareo_List;
