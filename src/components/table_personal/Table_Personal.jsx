import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './table.css'
import { get } from '../../services/api/api.service';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router';





const ListPP=()=> {

  let navigate = useNavigate();

  const [cookies, setCookie, removeCookie] = useCookies(["jp_net_idEmpleadoParaTareo"]);

  const [DatosEmpleado,setDatosEmpleado] = useState([]);

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
    if(!cargado){
      cargado = true;
      getCargos();
      console.log(DatosEmpleado)
    }  },[]);


  return (
    <TableContainer component={Paper} className="table">
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell className='tableCell'><span>Nombres</span></TableCell>
          <TableCell className='tableCell'><span>Apellidos</span></TableCell>
          <TableCell className='tableCell'><span>Cargo</span></TableCell>
          <TableCell className='tableCell'><span>DNI</span></TableCell>
          <TableCell className='tableCell'><span>Accion</span></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {DatosEmpleado.map((row) => (
          <TableRow
            key={row.idEmpleado}>
             <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={"https://picsum.photos/300"} alt="" className="image" />
                  
                </div>
            </TableCell>
            <TableCell className='tableCell'><p>{row.ApellidoPaterno } {row.ApellidoMaterno} </p></TableCell>
            <TableCell className='tableCell' ><p>{row.NombreCargo}</p></TableCell>
            <TableCell className='tableCell'><p>{row.DNI}</p></TableCell>
            <TableCell className='tableCell'><button value={row.idEmpleado} onClick={(e)=>{
              let ruta ="/verTareoHistorico/"+row.idEmpleado;
              navigate(ruta)
              console.log(e.target.value, ruta)
              }}>Revisar Tareo</button></TableCell>
            
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  )
}

export {ListPP}