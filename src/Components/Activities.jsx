import React from 'react'
import ListaDeActividades from './ListaDeActividades'


const Activities = ({actividad, setEditar,remove,realizado}) => {

  return (
    <div className="md:w-1/2 lg:w-2/5 md:h-screen overflow-y-scroll bg-gray-200 md:ml-0 lg:m-8">
      <h2 className="text-2xl text-center mt-3 mb-8 ">
        Actividades Pendientes
      </h2>
      
        { 
            actividad.map(act =>(
                <ListaDeActividades
                  //agregando id generado
                  key={act.id}
                  act={act}
                  setEditar={setEditar}
                  remove={remove}
                  realizado={realizado}
                />
            ))
        }
    </div>
  )
}

export default Activities