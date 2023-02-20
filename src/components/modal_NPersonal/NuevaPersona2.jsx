import React from 'react'

function NuevaPersona2( {formData, setFormData}) {
  return (
    <div className="nuevaPersona2">
              <select required name="tipo_via" value={formData.tipo_via} onChange={(event)=> setFormData({
                  ...formData,tipo_via:event.target.value
                    })}>
                    <option value="" disabled selected>Tipo de vía</option>
                    <option name="selected" value={formData.selected} onChange={(event)=> setFormData({
                  ...formData,selected:event.target.value
                    })}>o</option>
                    <option name="selected" value={formData.selected} onChange={(event)=> setFormData({
                  ...formData,selected:event.target.value
                    })}>l</option>
                    <option name="selected" value={formData.selected} onChange={(event)=> setFormData({
                  ...formData,selected:event.target.value
                    })}>a</option>
                </select>
                <input type="text" placeholder='Nombre de Vía' name='nombre_via'  value={formData.nombre_via} onChange={(event)=> setFormData({
                  ...formData,nombre_via:event.target.value
                })}/>
                <select required name="tipo_localidad" id="tipo_localidad" value={formData.tipo_localidad} onChange={(event)=> setFormData({
                  ...formData,tipo_localidad:event.target.value
                    })}> 
                    <option value="" disabled selected>Tipo de localidad</option>
                    <option name="selected" value={formData.selected} onChange={(event)=> setFormData({
                  ...formData,selected:event.target.value
                    })}>h</option>
                    <option name="selected" value={formData.selected} onChange={(event)=> setFormData({
                  ...formData,selected:event.target.value
                    })}>o</option>
                    <option name="selected" value={formData.selected} onChange={(event)=> setFormData({
                  ...formData,selected:event.target.value
                    })}>l</option>
                    <option name="selected" value={formData.selected} onChange={(event)=> setFormData({
                  ...formData,selected:event.target.value
                    })}>a</option>
                </select>
                <input type="text" placeholder='Nombre Localidad' name='nombre_localidad'  value={formData.nombre_localidad} onChange={(event)=> setFormData({
                  ...formData,nombre_localidad:event.target.value
                })}/>
                <input type="text" placeholder='Contacto de emergencia' name="contact_emergencia"  value={formData.contact_emergencia} onChange={(event)=> setFormData({
                  ...formData,contact_emergencia:event.target.value
                })}/>
                <input type="number" placeholder='Numero' name="num_emergencia"  value={formData.num_emergencia} onChange={(event)=> setFormData({
                  ...formData,num_emergencia:event.target.value
                })}/>
                <select required name="brevete" id="brevete"  value={formData.brevete} onChange={(event)=> setFormData({
                  ...formData,brevete:event.target.value
                })}>
                  <option value="" disabled selected>Categoria Brevete</option>
                    <option name="selected" value={formData.selected} onChange={(event)=> setFormData({
                  ...formData,selected:event.target.value
                    })}>h</option>
                    <option name="selected" value={formData.selected} onChange={(event)=> setFormData({
                  ...formData,selected:event.target.value
                    })}>o</option>
                    <option name="selected" value={formData.selected} onChange={(event)=> setFormData({
                  ...formData,selected:event.target.value
                    })}>l</option>
                    <option name="selected" value={formData.selected} onChange={(event)=> setFormData({
                  ...formData,selected:event.target.value
                    })}>a</option>
                </select>
                <select required name="tipo_sangre" id="tipo_sangre" value={formData.tipo_sangre} onChange={(event)=> setFormData({
                  ...formData,tipo_sangre:event.target.value
                    })} >
                  <option value="" disabled selected>Tipo de sangre</option>
                  <option name="selected" value={formData.selected} onChange={(event)=> setFormData({
                  ...formData,selected:event.target.value
                    })} >O+</option>
                  <option name="selected" value={formData.selected} onChange={(event)=> setFormData({
                  ...formData,selected:event.target.value
                    })} >o</option>
                   <option name="selected" value={formData.selected} onChange={(event)=> setFormData({
                  ...formData,selected:event.target.value
                    })} >l</option>
                   <option name="selected" value={formData.selected} onChange={(event)=> setFormData({
                  ...formData,selected:event.target.value
                    })} >a</option>
                </select>
                <input type="text" placeholder='Alergias' name='alergias'  value={formData.alergias} onChange={(event)=> setFormData({
                  ...formData,alergias:event.target.value
                })} />
                <select required name="fondo_pension" id="fondo_pension"  value={formData.fondo_pension} onChange={(event)=> setFormData({
                  ...formData,fondo_pension:event.target.value
                })}>
                  <option value="" disabled selected>Fonde de pensión</option>

                    <option name="selected" value={formData.selected} onChange={(event)=> setFormData({
                  ...formData,selected:event.target.value
                    })}>ONP</option>
                    <option name="selected" value={formData.selected} onChange={(event)=> setFormData({
                  ...formData,selected:event.target.value
                    })}>AFP</option>
                </select>
                <input type="text" placeholder='CISPP' name='cispp' id='cispp'  value={formData.cissp} onChange={(event)=> setFormData({
                  ...formData,cissp:event.target.value
                })} />
    </div>
    )
}

export {NuevaPersona2}