import React from "react";
import Table from "react-bootstrap/Table";

function PreboletaJP() {
  return (
    <div className="tablePreboleta">
      <div className="titlePre">DETALLE DE PAGO</div>
      <Table>
        <tr>
          <th>RUC</th>
          <th>Razón social</th>
          <th>Dirección</th>
        </tr>
        <tbody>
          <tr>
            <th>20454300654</th>
            <th>JP Ingenieria y Servicios SRL.</th>
            <th>JR. ANCASH NRO. 304 URB. ALTO LIBERTAD. AREQUIPA</th>
          </tr>
        </tbody>
        <tr>
          <th colSpan={6}>
            Datos del trabajador vinculados a la relación laboral
          </th>
        </tr>
        <tr>
          <th colSpan={5}>días Trabajados</th>
          <th colSpan={1}>Sueldo básico</th>
        </tr>
        <tr>
          <th>MMG</th>
          <th>MCP</th>
          <th>MCB</th>
          <th>Arequipa</th>
          <th>Proyectos</th>
          <th>Sueldo básico</th>
        </tr>
      </Table>
      <div className="remuneraciones">
        <td>Sueldo computable</td>
        <td>Asignación familiar</td>
        <td>Remuneración vacacional</td>
        <td>Días con goce de haber</td>
        <td>Descanso médico</td>
        <td>Días pendientes de pago</td>
        <td>Feriados trabajados</td>
        <td>Horas extras</td>
        <td>Días trabajados con descansos</td>
        <td>Otros</td>
        <div className="total">Total remuneraciones</div>
      </div>
      <div className="retenciones">
        <td>Sistema de pensiones</td>
        <td>ONP</td>
        <td>Retención de 5ta</td>
        <td>Adelantos JP Ingenieria</td>
        <td>Prestamos JP Ingenieria</td>
        <td>Cuentas a rendir</td>
        <td>Otros</td>
        <div className="total">Total Descuentos</div>
      </div>
    </div>
  );
}

export { PreboletaJP };
