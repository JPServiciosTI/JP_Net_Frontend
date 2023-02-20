import React from 'react'

function Candidato_modal() {
  return (
    <div className="form">
    <div className="form-container">
        <div className="header">
        <h1>Nuevo Candidato</h1>
        </div>
        <div className="body">
            <input type="text" placeholder='Nombres' name='nombres' id='nombres' />
            <input type="text" placeholder='Apellido Paterno' name='apellidoP' />
            <input type="text" placeholder='Apellido Materno' name='apellidoM' />
            <input type="number" placeholder='DNI' name='dni' />
            <input type="number" placeholder='Telefono' name='telefono' />
            <input type="text" placeholder='Email' name='email' />
            <input type="text" placeholder='Cargo a operar' name='cargo_operar' />
            <input type="text" placeholder='Carrera' name='carrera'  />
            <input type="text" placeholder='Grado Instrucción' name="grado_instruccion" id="" />
            <input type="number" placeholder='Pretensión salarial' name='pretension_salarial'  />
        </div>
        <div className="footer">
            <button>Cancelar</button>
            <button>Enviar
            </button>
        </div>
    </div>
   </div>
  )
}

export default Candidato_modal