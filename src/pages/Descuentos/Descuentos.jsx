import React from "react";
import { Sidebar } from "../../components/Side/Sidebar";
import { Navbar } from "../../components/navbar/Navbar";
import { Table_Desc } from "../../components/table_descuentos/Table_Desc";
import "./descuentos.css";

function Descuentos() {
  return (
    <div className="descContainer">
      <Sidebar />
      <div className="descGeneral">
        <Navbar />
        <div className="descBody">
          <Table_Desc />
        </div>
      </div>
    </div>
  );
}

export default Descuentos;
