import React from "react";
import Table from "react-bootstrap/Table";
import "./export.css";

function Export_Planilla() {
  return (
    <Table className="tableExport" responsive>
      <tr>
        <th className="th1"></th>
        <th className="th1" colSpan={3}>
          INFORMACIÓN BÁSICA DE EMPLEADO
        </th>
        <th className="th1" colSpan={20}>
          TAREO
        </th>
        <th className="th1" colSpan={15}>
          DESCUENTOS
        </th>
        <th className="th1" colSpan={1}>
          TOTAL
        </th>
        <th className="th1">APORTE</th>
        <th className="th1">MONTO A REGULARIZAR</th>
      </tr>
      <tr>
        <th height="15" className="th2" scope="col">
          Id
        </th>
        <th className="th2">Apellidos</th>
        <th className="th2">Nombres</th>
        <th className="th2">Remunaeración básica</th>
        <th className="th2" colSpan={6}>
          Tareado
        </th>
        <th className="th2" colSpan={1}>
          DCGH
        </th>
        <th className="th2" colSpan={2}>
          Vacaciones
        </th>
        <th className="th2" colSpan={2}>
          Feriados trabajados
        </th>
        <th className="th2" colSpan={2}>
          Descansos trabajados
        </th>
        <th className="th2">Asig. Familiar</th>
        <th className="th2">Bonos y otros conceptos</th>
        <th className="th2" colSpan={2}>
          Compensación vacacional
        </th>
        <th className="th2" colSpan={3}>
          Horas extras
        </th>
        <th className="th2">Remuneración asegurable</th>
        <th className="th2">Sistema pensiones</th>
        <th className="th2">Habitad</th>
        <th className="th2">Integra</th>
        <th className="th2">Prima</th>
        <th className="th2">Profuturo</th>
        <th className="th2">ONP</th>
        <th className="th2">5ta</th>
        <th className="th2">Devolución de 5ta</th>
        <th className="th2">Adelantos</th>
        <th className="th2">Prestamo</th>
        <th className="th2">Desc. Cuentas a rendir</th>
        <th className="th2">Desc. RRHH</th>
        <th className="th2">Pensión alimenticia</th>
        <th className="th2">Total descuento</th>
        <th className="th2">Total Neto</th>
        <th className="th2">Total Aporte</th>
        <th className="th2"></th>
      </tr>
      <tr>
        <th className="th3"></th>
        <th className="th3"></th>
        <th className="th3"></th>
        <th className="th3"></th>
        <th className="th3">PRY</th>
        <th className="th3">MCP</th>
        <th className="th3">MCB</th>
        <th className="th3">AQP</th>
        <th className="th3">Total</th>
        <th className="th3">Sueldo bruto</th>
        <th className="th3">Monto</th>
        <th className="th3">Días</th>
        <th className="th3">Monto</th>
        <th className="th3">Días</th>
        <th className="th3">Monto</th>
        <th className="th3">Días</th>
        <th className="th3">Monto</th>
        <th className="th3"></th>
        <th className="th3"></th>
        <th className="th3">Vacaciones vencidas</th>
        <th className="th3">Monto</th>
        <th className="th3">HE 25%</th>
        <th className="th3">HE 35%</th>
        <th className="th3">Horas(S/)</th>
        <th className="th3"></th>
        <th className="th3"></th>
        <th className="th3"></th>
        <th className="th3"></th>
        <th className="th3"></th>
        <th className="th3"></th>
        <th className="th3"></th>
        <th className="th3"></th>
        <th className="th3"></th>
        <th className="th3"></th>
        <th className="th3"></th>
        <th className="th3"></th>
        <th className="th3"></th>
        <th className="th3"></th>
        <th className="th3"></th>
        <th className="th3"></th>
        <th className="th3"></th>
        <th className="th3"></th>
      </tr>
      <tbody>
        <tr className="trTable">
          <th>1</th>
          <th>Pinto Checya</th>
          <th>Brando</th>
          <th>1500</th>
          <th></th>
          <th></th>
          <th></th>
          <th>31.00</th>
          <th>31.00</th>
          <th>2200.00</th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th>1500.00</th>
          <th>ONP</th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th>195.00</th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th>195.00</th>
          <th>1305.00</th>
          <th>135.00</th>
          <th></th>
        </tr>
      </tbody>
    </Table>
  );
}

export { Export_Planilla };
