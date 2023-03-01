import React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { TableContainer } from "@mui/material";

function creaData(
  nombre,
  apellidos,
  sueldobase,
  remuneracion,
  totaldescuento,
  aportefondo,
  montos,
  essaludo
) {
  return {
    nombre,
    apellidos,
    sueldobase,
    remuneracion,
    totaldescuento,
    aportefondo,
    montos,
    essaludo,
  };
}
const rows = [
  creaData("Juan Camilo", "Vallestero", 1500, 1500, 200, 195, 20, 85),
  creaData("Juan Carlos", "Iwazaki", 1500, 1500, 200, 195, 20, 85),
];

function Planilla() {
  return (
    <Box sx={{ height: 600, width: 1 }}>
      <TableContainer></TableContainer>
    </Box>
  );
}

export default Planilla;
