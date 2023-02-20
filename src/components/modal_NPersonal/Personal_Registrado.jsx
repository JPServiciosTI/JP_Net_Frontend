import { useState } from "react";


function Personal_Registrado(formData,setFormData) {

  return (
    <div className="personalR_main">
                <div className="list_registered">
                <label>Nombres:</label>
                <input type="text" formData={formData} setFormData={setFormData} value={formData.nombres} disabled/>
                </div>  
                
                <div className="list_registered">
                Apellido Paterno:
                <input type="text"  name='nombres'/>
                </div>
                
                <div className="list_registered">
                Apellido Materno:
                <input type="text" value={'apMaterno'} name='nombres'/>
                </div>  
                 
                <div className="list_registered">
                Teléfono:   
                <input type="text" value={'telefono'} name='nombres'/>
                </div>
                
                <div className="list_registered">
                Teléfono fijo:
                <input type="text" value={'telfijo'} name='nombres'/>
                </div>   
              
                <div className="list_registered">
                Email: 
                <input type="text" value={'email'} name='nombres'/>
                </div>  
               
                <div className="list_registered">
                Estado Civil
                <input type="text" value={'estado_civil'} name='nombres'/>
                </div>  
                
                <div className="list_registered">
                Número hijos:
                <input type="text" value={'numero_hijos'} name='nombres'/>
                </div> 
                
                <div className="list_registered">
                Fecha de nacimiento: 
                <input type="text" value={'fec_nacimiento'} name='nombres'/>
                </div> 
                <div className="list_registered">
                Departamento:
                <input type="text" value={'departamento'} name='nombres'/>
                </div>  
                <div className="list_registered">
                Provincia:
                <input type="text" value={'provincia'} name='distrito'/>
                </div>  
                <div className="list_registered">
                Distrito:
                <input type="text" value={'distrito'} name='nombres'/>
                </div>      
                
    </div>
  )
}

export default Personal_Registrado