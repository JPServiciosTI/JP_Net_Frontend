import React from "react";
import Table from "react-bootstrap/Table";
import "./preboleta.css";
import jsPdf from "jspdf";
import html2canvas from "html2canvas";

import logoJP from "../../img/logo.jpeg";

const ref = React.createRef();

function PreboletaJP() {
  const exportPDF = () => {
    const input = document.getElementById("PreeBol");
    html2canvas(input, {
      logging: true,
      letterRendering: 1,
      useCORS: true,
    }).then((canvas) => {
      const imgWidth = 208;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      const imgData = canvas.toDataURL("img/png");
      const pdf = new jsPdf("p", "mm", "a4");
      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
      pdf.save("preboletajp.pdf");
    });
  };

  const mesActual = new Intl.DateTimeFormat("es-Es", { month: "long" }).format(
    new Date()
  );
  const hoy = new Date();
  let day = hoy.getDate();
  let month = hoy.getMonth() + 1;
  let year = hoy.getFullYear();
  day = ("0" + day).slice(-2);
  month = ("0" + month).slice(-2);
  let date = day + "/" + month + "/" + year;

  return (
    <div id="PreeBol">
      <div className="tablePreboleta">
        <button onClick={() => exportPDF()}>Descargar PDF</button>
        <div class="header">
          <div className="img">
            <img className="img_logo" src={logoJP} alt="" />
          </div>
          <h3>DETALLE DE PAGO {mesActual.toUpperCase()}</h3>
        </div>
        <div class="table">
          <Table>
            <tr>
              <th className="thHeader">RUC</th>
              <th className="thHeader">RAZÓN SOCIAL</th>
              <th className="thHeader">DIRECCIÓN</th>
              <th className="thHeader">Fecha</th>
            </tr>
            <tbody>
              <tr>
                <td className="tdBody">20454300654</td>
                <td className="tdBody">JP INGENIERIA Y SERVICIOS SRL</td>
                <td className="tdBody">
                  JR. ANCASH NRO. 304 URB. ALTO LIBERTAD. AREQUIPA
                </td>
                <td className="tdBody">{date}</td>
              </tr>
            </tbody>
          </Table>
        </div>
        <div class="table">
          <Table>
            <tr>
              <th className="thHeader" colSpan={2}>
                Datos del trabajador
              </th>
            </tr>
            <tr>
              <th className="thHeader">CÓDIGO</th>
              <th className="thHeader">APELLIDO</th>
              <th className="thHeader">NOMBRE</th>
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
              <th className="thHeader" colSpan={8}>
                DATOS DEL TRABAJADOR VINCULADOS A LA RELACIÓN LABORAL
              </th>
            </tr>
            <tr>
              <th className="thHeader" colSpan={5}>
                Días trabajados
              </th>
              <th colSpan={1}></th>
              <th className="thHeader" colSpan={1}>
                Sueldo básico
              </th>
            </tr>
            <tr>
              <th className="thHeader">MMG</th>
              <th className="thHeader">MCP</th>
              <th className="thHeader">MCB</th>
              <th className="thHeader">AREQUIPA</th>
              <th className="thHeader">Proyectos</th>
              <th></th>
              <th className="thHeader"></th>
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
    </div>
  );
}

export { PreboletaJP };
