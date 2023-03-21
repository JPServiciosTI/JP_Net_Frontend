import React, { useState } from "react";
import html2pdf from "html2pdf.js";
import { Link, useNavigate } from "react-router-dom";

import "./loginpreboleta.css";

function LoginPreboleta() {
  let navigate = useNavigate();
  const hoy = new Date();
  let day = hoy.getDate();
  let month = hoy.getMonth() + 1;
  let year = hoy.getFullYear();
  day = ("0" + day).slice(-2);
  month = ("0" + month).slice(-2);
  let date = day + "/" + month + "/" + year;
  const mesActual = new Intl.DateTimeFormat("es-Es", { month: "long" }).format(
    new Date()
  );
  return (
    <>
      <section class="bodyLogin">
        <div class="signup">
          <div class="signup-connect"></div>
          <div class="signup-classic">
            <h3>JP NET PREBOLETAS</h3>
            <h2>Iniciar Sesión</h2>
            <p className="fecha_login">{date}</p>
            <form class="form">
              <input
                id="email"
                class="username"
                type="text"
                placeholder="Digite DNI . . ."
                required
              />
              <input
                id="password"
                class="username"
                type="password"
                placeholder="Digite contraseña . ."
                required
              />

              <button
                onClick={() => {
                  navigate("/preboleta");
                }}
                class="btn-l"
              >
                Ingresar
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default LoginPreboleta;
