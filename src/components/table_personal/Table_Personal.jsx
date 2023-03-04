import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TablePagination from "@mui/material/TablePagination";
import "./table.css";
import { get } from "../../services/api/api.service";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router";

const ListPP = () => {
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
    },
  ];

  let navigate = useNavigate();

  const [cookies, setCookie, removeCookie] = useCookies([
    "jp_net_idEmpleadoParaTareo",
  ]);

  const [DatosEmpleado, setDatosEmpleado] = useState([]);

  const getCargos = async () => {
    try {
      const datos = await get({
        url: "/empleado/getforlimit",
        data: {},
      });
      //console.log(datos['id'][0]);

      setDatosEmpleado(datos["id"][0]);
    } catch (error) {
      console.log(error);
    }
  };

  let cargado = false;
  useEffect(() => {
    if (!cargado) {
      cargado = true;
      getCargos();
      console.log(DatosEmpleado);
    }
  }, []);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">
              <span>Nombres</span>
            </TableCell>
            <TableCell className="tableCell">
              <span>Apellidos</span>
            </TableCell>
            <TableCell className="tableCell">
              <span>Cargo</span>
            </TableCell>
            <TableCell className="tableCell">
              <span>DNI</span>
            </TableCell>
            <TableCell className="tableCell">
              <span>Accion</span>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {DatosEmpleado.map((row) => (
            <TableRow key={row.idEmpleado}>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img
                    src={"https://picsum.photos/300"}
                    alt=""
                    className="image"
                  />
                </div>
              </TableCell>
              <TableCell className="tableCell">
                <p>
                  {row.ApellidoPaterno} {row.ApellidoMaterno}{" "}
                </p>
              </TableCell>
              <TableCell className="tableCell">
                <p>{row.NombreCargo}</p>
              </TableCell>
              <TableCell className="tableCell">
                <p>{row.DNI}</p>
              </TableCell>
              <TableCell className="tableCell">
                <button
                  value={row.idEmpleado}
                  onClick={(e) => {
                    let ruta = "/verTareoHistorico/" + row.idEmpleado;
                    navigate(ruta);
                    console.log(e.target.value, ruta);
                  }}
                >
                  Revisar Tareo
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={DatosEmpleado.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </div>
    </TableContainer>
  );
};

export { ListPP };
