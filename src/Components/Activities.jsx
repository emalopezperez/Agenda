import React from 'react'
import ListaDeActividades from './ListaDeActividades'

const Activities = ({actividad}) => {



  return (
    <div className="md:w-1/2 lg:w-2/5 md:h-screen overflow-y-scroll bg-gray-200 md:ml-0 lg:m-8">
      <h2 className="text-2xl text-center ">
        Actividades Pendientes
      </h2>
      
        { 
            actividad.map(act =>(
                <ListaDeActividades
                  //agregando id generado
                  key={act.id}
                  act={act}
                />
            ))
        }
    </div>
  )
}

export default Activities