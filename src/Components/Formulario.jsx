import React from 'react'

const Formulario = () => {
  return (

    <div className="w-1/2 lg:w-2/5">
        <h2 className="text-2xl">
          Listado de Tareas:
        </h2>
        <p className="mt-7 mb-5">
          Anade las tareas que deseas Realizar
        </p>

        <form className='shadow-md rounded-lg py-10 px-5 bg-gray-200 mb-8'>

        <div className='mb-6'>
          <label htmlFor='actividad' className="block text-gray-600 font-bold" > Nombre la actividad</label>
          <input
            id ='actividad'
            type="text"
            placeholder='Escribe tu actividad'
            className='border-3 w-full p-2 mt-2 placeholder:border-t-gray-600 rounded-md'
          />
        </div>

        <div className='mb-6'>
          <label htmlFor='Descripcion' className="block text-gray-600 font-bold" > Descripcion la actividad</label>
          <textarea
            id="Descripcion"
            className='border-3 w-full p-2 mt-2 placeholder:border-t-gray-600 rounded-md'
            placeholder='Describe la actividad'
          />
        </div>

        <div className='mb-6'>
          <label htmlFor='Fecha' className="block text-gray-600 font-bold" >Finalizacion de la actividad</label>
          <input
            id ='Fecha'
            type="date"
            className='border-3 w-full p-2 mt-2 placeholder:border-t-gray-600 rounded-md'
          />
        </div>
        <input
          type="submit"
          className='bg-indigo-200 w-full p-3 text-white cursor-pointer rounded-md'
          value="Agregar Actividad"
        />
      </form>

    </div>
  )
}

export default Formulario