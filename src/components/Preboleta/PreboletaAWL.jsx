import React from "react";
import Table from "react-bootstrap/Table";
import "./preboleta.css";

function PreboletaAWL() {
  const mesActual = new Intl.DateTimeFormat("es-Es", { month: "long" }).format(
    new Date()
  );
  return (
    <div className="tablePreboleta">
      <div class="header">
        <h3>DETALLE DE PAGO {mesActual.toUpperCase()}</h3>
      </div>
      <div class="table">
        <Table>
          <tr>
            <th className="thHeaderA">RUC</th>
            <th className="thHeaderA">RAZÓN SOCIAL</th>
            <th className="thHeaderA">DIRECCIÓN</th>
          </tr>
          <tbody>
            <tr>
              <td className="tdBody">20454300654</td>
              <td className="tdBody">JP INGENIERIA Y SERVICIOS SRL</td>
              <td className="tdBody">
                JR. ANCASH NRO. 304 URB. ALTO LIBERTAD. AREQUIPA
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
      <div class="table">
        <Table>
          <tr>
            <th className="thHeadera" colSpan={2}>
              Datos del trabajador
            </th>
          </tr>
          <tr>
            <th className="thHeaderA">CÓDIGO</th>
            <th className="thHeaderA">APELLIDO</th>
            <th className="thHeaderA">NOMBRE</th>
          </tr>
          <tbody>
            <tr>
              <td className="tdBody  cod">123</td>
              <td className="tdBody">Pinto</td>
              <td className="tdBody">Brando</td>
            </tr>
          </tbody>
        </Table>
      </div>
      <div class="table">
        <Table>
          <tr>
            <th className="thHeaderA" colSpan={8}>
              DATOS DEL TRABAJADOR VINCULADOS A LA RELACIÓN LABORAL
            </th>
          </tr>
          <tr>
            <th className="thHeaderA" colSpan={5}>
              Días trabajados
            </th>
            <th colSpan={1}></th>
            <th className="thHeaderA" colSpan={1}>
              Sueldo básico
            </th>
          </tr>
          <tr>
            <th className="thHeaderA">MMG</th>
            <th className="thHeaderA">MCP</th>
            <th className="thHeaderA">MCB</th>
            <th className="thHeaderA">AREQUIPA</th>
            <th className="thHeaderA">Proyectos</th>
            <th></th>
            <th className="thHeaderA"></th>
          </tr>
          <tbody>
            <tr>
              <td className="tdBody">24.50</td>
              <td className="tdBody">0</td>
              <td className="tdBody">0</td>
              <td className="tdBody">0</td>
              <td className="tdBody">0</td>
              <td></td>
              <td className="tdBody">S/ 2200</td>
            </tr>
          </tbody>
        </Table>
      </div>
      <div class="tableDetalle">
        <div class="table1">
          <h5>REMUNERACIONES</h5>
          <div class="table1body">
            <table>
              <tr>
                <th></th>
                <th></th>
                <th></th>
              </tr>
              <tbody>
                <tr>
                  <td className="tdDetalle">Sueldo computable total</td>
                  <td className="tdDetalle"></td>
                  <td align="right" className="tdDetalle">
                    1738.71
                  </td>
                </tr>
                <tr>
                  <td className="tdDetalle">Asignación familiar</td>
                  <td className="tdDetalle"></td>
                  <td className="tdDetalle">0.00</td>
                </tr>
                <tr>
                  <td className="tdDetalle">Remuneración vacacional</td>
                  <td></td>
                  <td className="tdDetalle">0.00</td>
                </tr>
                <tr>
                  <td className="tdDetalle">Días con goce de haber</td>
                  <td></td>
                  <td className="tdDetalle">0.00</td>
                </tr>
                <tr>
                  <td className="tdDetalle">Descanso médico</td>
                  <td></td>
                  <td className="tdDetalle">0.00</td>
                </tr>
                <tr>
                  <td className="tdDetalle">Días pendientes de pago</td>
                  <td></td>
                  <td className="tdDetalle">0.00</td>
                </tr>
                <tr>
                  <td className="tdDetalle">Feriados trabajados</td>
                  <td></td>
                  <td className="tdDetalle">0.00</td>
                </tr>
                <td className="tdDetalle">Horas extras</td>
                <td></td>
                <td className="tdDetalle">0.00</td>
                <tr>
                  <td className="tdDetalle">Días trabajados en descanso</td>
                  <td></td>
                  <td className="tdDetalle">0.00</td>
                </tr>
                <tr>
                  <td className="tdDetalle">Otros</td>
                  <td></td>
                  <td className="tdDetalle deta">0.00</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="tableFooter">
            <div class="box1">Total Remuneraciones</div>
            <div class="box2">1,738.71</div>
          </div>
        </div>
        <div class="table1">
          <h5>RETENCIONES/DESCUENTOS</h5>
          <div class="table1body">
            <table>
              <tr>
                <th></th>
                <th></th>
                <th></th>
              </tr>
              <tbody>
                <tr>
                  <td className="tdDetalle">Sistema de pensiones</td>
                  <td className="tdDetalle">ONP</td>
                  <td className="tdDetalle">226.03</td>
                </tr>
                <tr>
                  <td className="tdDetalle">Retención de 5ta</td>
                  <td className="tdDetalle"></td>
                  <td className="tdDetalle">0.00</td>
                </tr>
                <tr>
                  <td className="tdDetalle">Adelantos JP INGENIERIA</td>
                  <td></td>
                  <td className="tdDetalle">0.00</td>
                </tr>
                <tr>
                  <td className="tdDetalle">Préstamos JP INGENIERIA</td>
                  <td></td>
                  <td className="tdDetalle">0.00</td>
                </tr>
                <tr>
                  <td className="tdDetalle">Cuentas a rendir</td>
                  <td></td>
                  <td className="tdDetalle">0.00</td>
                </tr>
                <tr>
                  <td className="tdDetalle">Otros</td>
                  <td></td>
                  <td className="tdDetalle">0.00</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="tableFooter">
            <div class="box1">Total Descuentos</div>
            <div class="box2">195.00</div>
          </div>
          <div class="neto">
            <div class="neto1">Neto a pagar</div>
            <div class="neto2">1507.00</div>
          </div>
        </div>
      </div>

      <div class="observaciones">
        OBSERVACIONES:
        <div class="observacionesBox"></div>
      </div>
      <div className="firmasContainer">
        <div className="firma">Empleador</div>
        <div className="firma">Trabajador</div>
      </div>
    </div>
  );
}

export default PreboletaAWL;
