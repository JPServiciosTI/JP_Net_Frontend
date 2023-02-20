import React from 'react'
import './style.css'
import './modal'

function Personal_modal() {

  return (
    <div className="modalBackground">
    <h1 className='text-center'>Ingrese los datos del nuevo personal</h1>

    <div className="progressbar">
        <div className="progress"></div>
        <div className="progress-step progress-step-active" data-title='1'></div>
        <div className="progress-step" data-title='2'></div>
        <div className="progress-step" data-title='3'></div>
    </div>
    <div className="form-step form-step-active">
        <div className="input-group">
            <input type="text" placeholder='Nombres' name='nombres'/>
            <input type="text" placeholder='Apellido Paterno' name='apPaterno' />
            <input type="text" placeholder='Apellido Materno' name='apMaterno' />
            <input type="number" placeholder='Telefono' name="telefono" id="" />
            <input type="number" placeholder='Tel. Fijo' name='telfijo' />
            <input type="text" placeholder='Email' name="email" id="" />
            <input type="text" placeholder='Estado Civil' name='estado_civil' />
            <input type="number" placeholder='N° de Hijos' name="numero_hijos" id="" />
            <input type="date" placeholder='Fecha de Nacimiento' name="fec_nacimiento" id="" />
            <input type="text" placeholder='Ubigeo' name="ubigeo" id="" />
            <input type="text" placeholder='Departamento' name='departamento' />
            <input type="text" placeholder='Provincia' name='procinvia' id='' />
            <input type="text" placeholder='Distrito' name='distrito' id='' />
        </div>
        <div>
            <a href="" className="btn btn-cancel">Cancel</a>
            <a href="" className="btn btn-next">siguiente</a>
        </div>
    </div>
    <div className="form-step">
        <div className="input-group">
            <select placeholder='Tipo de Vía' name="tipo_via" id="tipo_via">
                <option value="">h</option>
                <option value="">o</option>
                <option value="">l</option>
                <option value="">a</option>
            </select>
            <input type="text" placeholder='Nombre de Vía' name='nombre_via' />
            <select placeholder='Tipo de Localidad' name="tipo_localidad" id="tipo_localidad">
                <option value="">h</option>
                <option value="">o</option>
                <option value="">l</option>
                <option value="">a</option>
            </select>
            <input type="text" placeholder='Nombre Localidad' name='nombre_localidad' />
            <input type="number" placeholder='Telefono' name="telefono" id="" />
            <input type="number" placeholder='Tel. Fijo' name='telfijo' />
            <input type="email" placeholder='Email' name="email" id="" />
            <input type="text" placeholder='Estado Civil' name='estado_civil' />
            <input type="number" placeholder='N° de Hijos' name="numero_hijos" id="" />
            <input type="date" placeholder='Fecha de Nacimiento' name="fec_nacimiento" id="" />
            <input type="text" placeholder='Ubigeo' name="ubigeo" id="" />
            <input type="text" placeholder='Departamento' name='departamento' />
            <input type="text" placeholder='Provincia' name='procinvia' id='' />
            <input type="text" placeholder='Distrito' name='distrito' id='' />
        </div>
        <div className='btns-group'>
            <a href="" className="btn btn-prev">Atrás</a>
            <a href="" className="btn btn-next">Siguiente</a>
        </div>
    </div>
    <div className="form-step">
        <div className="input-group">
            <input type="text" placeholder='Profesión' name='profesion' id='profesion'/>
            <select placeholder='Campo de Estudio' name="campo_estudio" id="">
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
            </select>
            <select placeholder='Grado de Instrucción' name="grado_instruccion" id="grado_instruccion">
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
            </select>
            <select placeholder='Cargo' name="cargo" id="cargo">
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
            </select>
            <input type="text" placeholder='Años Experiencia' name="anios_exp" id="anios_exp" />
            <input type="number" placeholder='Remuneración' name="remuneracion" id="remuneracion" />
            <input type="date" placeholder='Fecha Inicio Contrato' name="fecha_inicio_contrato" id="fecha_inicio_contrato" />
            <input type="date" placeholder='Fecha Fin Contrato' name="fecha_fin_contrato" id="fecha_fin_contrato" />
        </div>
        <div className='btns-group'>
            <a href="" className="btn btn-cancel">Cancel</a>
            <input type="submit" value="Guardar" className='btn' />
        </div>
    </div>
</div>
  )
  
}

export default Personal_modal