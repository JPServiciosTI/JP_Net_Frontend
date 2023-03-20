import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactHTMLTableToExcel from "react-html-table-to-excel";

import "./export.css";
import { get } from "../../services/api/api.service";

function Export_Planilla() {
  const data = [
    {
      DNI: 70471667,
      ApellidoPaterno: "Pinto",
      ApellidoMaterno: "Checya",
      Nombres: "Brando",
      remuneracionbasica: 1500,
      pry: 0,
      mcp: 0,
      mcb: 0,
      aqp: 31.0,
      total: 31.0,
      sueldobruto: 1500,
      monto_dcgh: 0,
      dias_vacas: 0,
      monto_vacas: 0,
      dias_feriados: 0,
      montos_feriados: 0,
      dias_descansos: 0,
      monto_descansos: 0,
      asig_familiar: 120,
      bonos: 100,
      vacaciones_compensacion: 0,
      monto_compensacion: 0,
      he25_horaextra: 0,
      he35_horaextra: 0,
      hora_horaextra: 0,
      remuneracionasegurable: 1500,
      sistemapensiones: "ONP",
      habitad: 0,
      integra: 0,
      prima: 0,
      profuturo: 0,
      onp: 195,
      quinta: 0,
      devolucion5ta: 0,
      adelantos: 0,
      prestamos: 0,
      desc_cuentasarendir: 0,
      desc_rrhh: 0,
      pensionalimenticia: 0,
      totaldescuento: 0,
      totalneto: 1305.0,
      totalaporte: 135.0,
    },
    {
      DNI: 70471667,
      ApellidoPaterno: "Pinto",
      ApellidoMaterno: "Checya",
      Nombres: "Brando",
      remuneracionbasica: 1500,
      pry: 0,
      mcp: 0,
      mcb: 0,
      aqp: 31.0,
      total: 31.0,
      sueldobruto: 1500,
      monto_dcgh: 0,
      dias_vacas: 0,
      monto_vacas: 0,
      dias_feriados: 0,
      montos_feriados: 0,
      dias_descansos: 0,
      monto_descansos: 0,
      asig_familiar: 120,
      bonos: 100,
      vacaciones_compensacion: 0,
      monto_compensacion: 0,
      he25_horaextra: 0,
      he35_horaextra: 0,
      hora_horaextra: 0,
      remuneracionasegurable: 1500,
      sistemapensiones: "ONP",
      habitad: 0,
      integra: 0,
      prima: 0,
      profuturo: 0,
      onp: 195,
      quinta: 0,
      devolucion5ta: 0,
      adelantos: 0,
      prestamos: 0,
      desc_cuentasarendir: 0,
      desc_rrhh: 0,
      pensionalimenticia: 0,
      totaldescuento: 0,
      totalneto: 1305.0,
      totalaporte: 135.0,
    },
    {
      DNI: 70471667,
      ApellidoPaterno: "Pinto",
      ApellidoMaterno: "Checya",
      Nombres: "Brando",
      remuneracionbasica: 1500,
      pry: 0,
      mcp: 0,
      mcb: 0,
      aqp: 31.0,
      total: 31.0,
      sueldobruto: 1500,
      monto_dcgh: 0,
      dias_vacas: 0,
      monto_vacas: 0,
      dias_feriados: 0,
      montos_feriados: 0,
      dias_descansos: 0,
      monto_descansos: 0,
      asig_familiar: 120,
      bonos: 100,
      vacaciones_compensacion: 0,
      monto_compensacion: 0,
      he25_horaextra: 0,
      he35_horaextra: 0,
      hora_horaextra: 0,
      remuneracionasegurable: 1500,
      sistemapensiones: "ONP",
      habitad: 0,
      integra: 0,
      prima: 0,
      profuturo: 0,
      onp: 195,
      quinta: 0,
      devolucion5ta: 0,
      adelantos: 0,
      prestamos: 0,
      desc_cuentasarendir: 0,
      desc_rrhh: 0,
      pensionalimenticia: 0,
      totaldescuento: 0,
      totalneto: 1305.0,
      totalaporte: 135.0,
    },
  ];

  const [DatosPlanilla, setDatosPlanilla] = useState([]);

  const getDatos = async () => {
    try {
      const datos = await get({
        url: "/consolidado/consolidado",
        data: {
          periodo: 2,
        },
      });
      setDatosPlanilla(datos["id"][0]);
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
    console.log(DatosPlanilla);
  }, []);
  return (
    <>
      <div className="btnExport">
        <ReactHTMLTableToExcel
          className="btn btn-info"
          table="PlanillaFinal"
          filename="miTablaExcel"
          sheet="Sheet"
          buttonText="Exportar a Excel"
        />
      </div>

      <Table id="PlanillaFinal" className="tableExport" responsive>
        <tr>
          <th className="th1"></th>
          <th className="th1" colSpan={3}>
            INFORMACIÓN BÁSICA DE EMPLEADO
          </th>
          <th className="th1" colSpan={23}>
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
          <th className="th2" colSpan={7}>
            Tareado
          </th>
          <th className="th2" colSpan={2}>
            DCGH
          </th>
          <th className="th2" colSpan={2}>
            Vacaciones
          </th>
          <th className="th2" colSpan={2}>
            Feriados trabajados
          </th>
          <th className="th2" colSpan={2}>
            Descansos Programados
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
          <th className="th3">MMG</th>
          <th className="th3">MCP</th>
          <th className="th3">MCB</th>
          <th className="th3">AQP</th>
          <th className="th3">PRY</th>
          <th className="th3">Total</th>
          <th className="th3">Sueldo bruto</th>
          <th className="th3">Días</th>
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
          {DatosPlanilla.map((datos) => (
            <tr className="trTable">
              <td>{datos.DNI}</td>
              <td>{datos.ApellidoPaterno+ " " + datos.ApellidoMaterno}</td>
              <td>{datos.Nombres}</td>
              <td>{datos.RemuneracionBasica}</td>
              <td>{datos.MMG}</td>
              <td>{datos.MCP}</td>
              <td>{datos.MCB}</td>
              <td>{datos.AQP}</td>
              <td>{datos.PRY}</td>
              <td>{datos.Total}</td>
              <td>{datos.SueldoBruto}</td>
              <td>{datos.Dias_DCGH}</td>
              <td>{datos.Monto_DCGH}</td>
              <td>{datos.Dias_Vacaciones}</td>
              <td>{datos.Monto_Vacaciones}</td>
              <td>{datos.Dias_FeriadosTrabajados}</td>
              <td>{datos.Monto_FeriadosTrabajadaos}</td>
              <td>{datos.Dias_Descansos}</td>
              <td>{datos.Monto_Descansos}</td>
              <td>{datos.AsignacionFamiliar}</td>
              <td>{datos.bonos}</td>
              <td>{datos.Vacaciones_Compensacion}</td>
              <td>{datos.Monto_Compensacion}</td>
              <td>{datos.HoraExtras_25}</td>
              <td>{datos.HoraExtra_35}</td>
              <td>{datos.MontoHorasExtras}</td>
              <td>{datos.RemuneracionAsegurable}</td>
              <td>{datos.NombreDeLaEntidadDeFondo}</td>
              <td>{datos.AFPHabitad}</td>
              <td>{datos.AFPIntegra}</td>
              <td>{datos.AFPPrima}</td>
              <td>{datos.AFPProfuturo}</td>
              <td>{datos.ONP}</td>
              <td>{datos.ImpuestoDeQuinta}</td>
              <td>{datos.DevolucionQuinta}</td>
              <td>{datos.Adelantos}</td>
              <td>{datos.Prestamos}</td>
              <td>{datos.DescuentosCuentasARendir}</td>
              <td>{datos.DescuentosRecursosHumanos}</td>
              <td>{datos.PensionAlimenticia}</td>
              <td>{datos.totaldescuento}</td>
              <td>{datos.TotalNeto}</td>
              <td>{datos.EsSalud}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export { Export_Planilla };
