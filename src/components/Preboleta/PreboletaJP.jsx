import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table";
import "./preboleta.css";
import html2pdf from "html2pdf.js";
import logoJP from "../../img/logo.jpeg";
const ref = React.createRef();

function PreboletaJP() {
  const dni = 70471667;
  const apellidoPaterno = "Pinto";
  const apellidoMaterno = "Checya";
  const Nombres = "Brando";
  const mmg = 0;
  const mcp = 0;
  const mcb = 0;
  const aqp = 30;
  const pry = 0;
  const sueldobasico = 1500;
  const sueldocomputable = 100;
  const asig_familiar = 102;
  const remuneracionvacacional = 50;
  const diascongoce = 2;
  const descansomedico = 4;
  const diaspendientesdepago = 0;
  const feriadostrabajados = 0;
  const horasextras = 1;
  const diastrabajadosdescanso = 0;
  const fondopension = "ONP";
  const fondopensiontotal = "195";
  const retencionquinta = 10;
  const adelantos = 0;
  const prestamos = 0;
  const cuentasarendir = 0;
  const otrosremuneraciones = 0;
  const otrosdescuentos = 0;
  const totalremuneraciones = 1500;
  const totaldescuentos = 195;
  const netoapagar = 1305;

  const handleDownload = () => {
    const element = document.getElementById("PreeBol");
    html2pdf().from(element).save("preboletaJP.pdf");
  };
  //
  const buttonRef = useRef(null);

  useEffect(() => {
    buttonRef.current.click();
  }, []);
  //
  //
  const buttonRef1 = useRef(null);

  useEffect(() => {
    buttonRef1.current.click();
  }, []);
  //

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
    <>
      <Link to={"/LoginPreboleta"}>
        <button ref={buttonRef1}>Desc PDF</button>
      </Link>
      <button ref={buttonRef} onClick={handleDownload}>
        Desc PDF
      </button>
      <div id="PreeBol">
        <div className="tablePreboleta">
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
                  <td className="tdBody  cod">{dni}</td>
                  <td className="tdBody">
                    {apellidoPaterno + " " + apellidoMaterno}
                  </td>
                  <td className="tdBody">{Nombres}</td>
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
                  <td className="tdBody">{mmg}</td>
                  <td className="tdBody">{mcp}</td>
                  <td className="tdBody">{mcb}</td>
                  <td className="tdBody">{aqp}</td>
                  <td className="tdBody">{pry}</td>
                  <td></td>
                  <td className="tdBody">S/ {sueldobasico}</td>
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
                        {sueldocomputable}
                      </td>
                    </tr>
                    <tr>
                      <td className="tdDetalle">Asignación familiar</td>
                      <td className="tdDetalle"></td>
                      <td className="tdDetalle">{asig_familiar}</td>
                    </tr>
                    <tr>
                      <td className="tdDetalle">Remuneración vacacional</td>
                      <td></td>
                      <td className="tdDetalle">{remuneracionvacacional}</td>
                    </tr>
                    <tr>
                      <td className="tdDetalle">Días con goce de haber</td>
                      <td></td>
                      <td className="tdDetalle">{diascongoce}</td>
                    </tr>
                    <tr>
                      <td className="tdDetalle">Descanso médico</td>
                      <td></td>
                      <td className="tdDetalle">{descansomedico}</td>
                    </tr>
                    <tr>
                      <td className="tdDetalle">Días pendientes de pago</td>
                      <td></td>
                      <td className="tdDetalle">{diaspendientesdepago}</td>
                    </tr>
                    <tr>
                      <td className="tdDetalle">Feriados trabajados</td>
                      <td></td>
                      <td className="tdDetalle">{feriadostrabajados}</td>
                    </tr>
                    <tr>
                      <td className="tdDetalle">Horas extras</td>
                      <td></td>
                      <td className="tdDetalle">{horasextras}</td>
                    </tr>
                    <tr>
                      <td className="tdDetalle">Días trabajados en descanso</td>
                      <td></td>
                      <td className="tdDetalle">{diastrabajadosdescanso}</td>
                    </tr>
                    <tr>
                      <td className="tdDetalle">Otros</td>
                      <td></td>
                      <td className="tdDetalle deta">{otrosremuneraciones}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="tableFooter">
                <div class="box1">Total Remuneraciones</div>
                <div class="box2">S/ {totalremuneraciones}</div>
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
                      <td className="tdDetalle">{fondopension}</td>
                      <td className="tdDetalle">{fondopensiontotal}</td>
                    </tr>
                    <tr>
                      <td className="tdDetalle">Retención de 5ta</td>
                      <td className="tdDetalle"></td>
                      <td className="tdDetalle">{retencionquinta}</td>
                    </tr>
                    <tr>
                      <td className="tdDetalle">Adelantos JP INGENIERIA</td>
                      <td></td>
                      <td className="tdDetalle">{adelantos}</td>
                    </tr>
                    <tr>
                      <td className="tdDetalle">Préstamos JP INGENIERIA</td>
                      <td></td>
                      <td className="tdDetalle">{prestamos}</td>
                    </tr>
                    <tr>
                      <td className="tdDetalle">Cuentas a rendir</td>
                      <td></td>
                      <td className="tdDetalle">{cuentasarendir}</td>
                    </tr>
                    <tr>
                      <td className="tdDetalle">Otros</td>
                      <td></td>
                      <td className="tdDetalle">{otrosdescuentos}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="tableFooter">
                <div class="box1">Total Descuentos</div>
                <div class="box2">S/{totaldescuentos}</div>
              </div>
              <div class="neto">
                <div class="neto1">Neto a pagar</div>
                <div class="neto2">S/{netoapagar}</div>
              </div>
            </div>
          </div>

          <div class="observaciones">
            OBSERVACIONES:
            <div class="observacionesBox"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export { PreboletaJP };
