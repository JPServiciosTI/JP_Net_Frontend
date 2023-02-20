import React from 'react'
function NuevaPersona1( {formData, setFormData}) {
  return (
    <div className="nuevaPersona1">
                <input type="text" placeholder='Nombres' name='nombres' value={formData.nombres} onChange={(event)=> setFormData({
                  ...formData,nombres:event.target.value
                })}/>
                <input type="text" placeholder='Apellido Paterno' name='apPaterno' value={formData.apPaterno} onChange={(event)=> setFormData({
                  ...formData,apPaterno:event.target.value
                })}/>
                <input type="text" placeholder='Apellido Materno' name='apMaterno' value={formData.apMaterno} onChange={(event)=> setFormData({
                  ...formData,apMaterno:event.target.value
                })} />
                <input type="number" placeholder='Telefono' name="telefono" id="" value={formData.telefono} onChange={(event)=> setFormData({
                  ...formData,telefono:event.target.value
                })} />
                <input type="number" placeholder='Tel. Fijo' name='telfijo' value={formData.telfijo} onChange={(event)=> setFormData({
                  ...formData,telfijo:event.target.value
                })}/>
                <input type="email" placeholder='Email' name="email" id="" value={formData.email} onChange={(event)=> setFormData({
                  ...formData,email:event.target.value
                })}/>
                <input type="text" placeholder='Estado Civil' name='estado_civil' value={formData.estado_civil}
                onChange={(event)=> setFormData({
                  ...formData,estado_civil:event.target.value
                })}/>
                <input type="number" placeholder='N° de Hijos' name="numero_hijos" id="" value={formData.numero_hijos}
                onChange={(event)=> setFormData({
                  ...formData,numero_hijos:event.target.value
                })}/>
                <input type="date" required placeholder='Fecha de Nacimiento' name="fec_nacimiento" value={formData.fec_nacimiento} onChange={(event)=> setFormData({
                  ...formData,fec_nacimiento:event.target.value
                })}/>
                <input type="text" placeholder='Ubigeo' name="ubigeo" value={formData.ubigeo} onChange={(event)=> setFormData({
                  ...formData,ubigeo:event.target.value
                })}/>
                <input type="text" placeholder='Departamento' name='departamento' value={formData.departamento} onChange={(event)=> setFormData({
                  ...formData,departamento:event.target.value
                })}/>
                <input type="text" placeholder='Provincia' name='provincia' value={formData.provincia} onChange={(event)=> setFormData({
                  ...formData,provincia:event.target.value
                })}/>
                
                <input type="text" placeholder='Distrito' name='distrito' value={formData.distrito} onChange={(event)=> setFormData({
                  ...formData,distrito:event.target.value
                })}/>
    </div>
  )
}

export {NuevaPersona1}