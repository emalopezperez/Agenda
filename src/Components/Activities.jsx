import React from 'react'
import ListaDeActividades from './ListaDeActividades'

const Activities = () => {
  return (
    <div className="md:w-1/2 lg:w-2/5 md:h-screen overflow-y-scroll">

      <h2 className="text-2xl text-center ">
        Actividades Pendientes:
      </h2>
      <ListaDeActividades/>
    </div>
  )
}

export default Activities