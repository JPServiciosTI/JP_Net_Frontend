import React from "react";
import Planilla from "../../components/Planilla/Planilla";
import { Sidebar } from "../../components/Side/Sidebar";
import { Navbar } from "../../components/navbar/Navbar";
import "./mainplanilla.css";

function MainPlanilla() {
  const mesActual = new Intl.DateTimeFormat("es-Es", { month: "long" }).format(
    new Date()
  );
  return (
    <div className="mainPlanilla">
      <Sidebar />

      <div className="generalPlanilla">
        <Navbar />
        <div className="listPlanilla">
          <h1>
            Planillas {mesActual[0].toUpperCase() + mesActual.substring(1)}
          </h1>
          <Planilla />
        </div>
      </div>
    </div>
  );
}

export { MainPlanilla };
