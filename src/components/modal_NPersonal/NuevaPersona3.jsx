import React from 'react'

function NuevaPersona3({formData, setFormData}) {
  return (
    <div className="nuevaPersona3">
              <input type="text" placeholder='Profesión' name='profesion' id='profesion' value={formData.profesion} onChange={(event)=> setFormData({
                  ...formData,profesion:event.target.value
                })} />
                <select required name="campo_estudio"  value={formData.campo_estudio} onChange={(event)=> setFormData({
                  ...formData,campo_estudio:event.target.value
                })}>
                  <option value="" disabled selected>Campo de Estudio</option>
                    <option name="selected" value={formData.selected} onChange={(event)=> setFormData({
                  ...formData,selected:event.target.value
                    })}></option>
                    <option name="selected" value={formData.selected} onChange={(event)=> setFormData({
                  ...formData,selected:event.target.value
                    })}></option>
                </select>
                <select required name="grado_instruccion"  value={formData.grado_instruccion} onChange={(event)=> setFormData({
                  ...formData,grado_instruccion:event.target.value
                })}>
                  <option value="" disabled selected>Grado de instrucción</option>
                    <option name="selected" value={formData.selected} onChange={(event)=> setFormData({
                  ...formData,selected:event.target.value
                    })}></option>
                    <option name="selected" value={formData.selected} onChange={(event)=> setFormData({
                  ...formData,selected:event.target.value
                    })}></option>
                </select>
                <select required name="cargo" id="cargo"  value={formData.cargo} onChange={(event)=> setFormData({
                  ...formData,cargo:event.target.value
                })}>
                  <option value="" disabled selected>Cargo</option>
                    <option name="selected" value={formData.selected} onChange={(event)=> setFormData({
                  ...formData,selected:event.target.value
                    })}></option>
                    <option name="selected" value={formData.selected} onChange={(event)=> setFormData({
                  ...formData,selected:event.target.value
                    })}></option>
                </select>
                <input type="number" placeholder='Años Exp.' name="anios_exp" id="anios_exp"  value={formData.anios_exp} onChange={(event)=> setFormData({
                  ...formData,anios_exp:event.target.value
                })} />
                <input type="number" placeholder='Remuneración' name="remuneracion" id="remuneracion"  value={formData.remuneracion} onChange={(event)=> setFormData({
                  ...formData,remuneracion:event.target.value
                })}/>
                <input type="date" required placeholder='Fecha Inicio Contrato' name="fec_icontrato"  value={formData.fec_icontrato} onChange={(event)=> setFormData({
                  ...formData,fec_icontrato:event.target.value
                })} />
                <input type="date" required placeholder='Fecha Fin Contrato' name="fec_fcontrato"  value={formData.fec_fcontrato} onChange={(event)=> setFormData({
                  ...formData,fec_fcontrato:event.target.value
                })} />
    </div>   
  )
}

export {NuevaPersona3}