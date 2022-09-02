
import React from 'react'
import {useEffect,useState } from 'react'
import MensajeError from './MensajeError'

const Formulario = ({actividad, setActividad, editar,setEditar}) => {

  const [actividades, setActividades] =useState('')
  const [descripcion,setDescripcion] = useState('')
  const [fecha, setFecha] = useState('')

  const [error,setError] = useState(false)
  
  useEffect(()=>{
    if(Object.keys(editar).length > 0){
      setActividades(editar.actividades)
      setDescripcion(editar.descripcion)
      setFecha(editar.fecha)
    }
  },[editar])

// generando un id
  const generarId = ()=>{
    const random = Math.random().toString(36).substring(2);
    const fecha =Date.now().toString(36);

    return random + fecha
  }

const validaciones = (e)=>{
  e.preventDefault()

  if([actividades, descripcion, fecha].includes('')){

      setError(true)

  }else{
    setError(false)

    const objetoActividades = {
      actividades,
      descripcion,
      fecha,
    }

  if(editar.id){
      objetoActividades.id= editar.id
      const actividadesActualizadas = actividad.map(act => act.id === editar.id ? objetoActividades : act);

      setActividad(actividadesActualizadas);
      setEditar({})
      
    }else{
      objetoActividades.id= generarId();
      setActividad([...actividad ,objetoActividades]);
  }

//Reinciciar campos
    setActividades('')
    setDescripcion('')
    setFecha('')
  }
}
  return (

    <div className="md:w-1/2 lg:w-2/5 mx-5">
        <h2 className="text-2xl">
          Listado de Tareas
        </h2>
        <p className="mt-7 mb-5 text-gray-600">
          Añade las tareas que deseas Realizar
        </p>

        <form onSubmit={validaciones} className='shadow-md rounded-lg py-10 px-5 bg-gray-200 mb-8'>
          {
            error &&
            <MensajeError
                mensaje={'Todos los campos son obligatorios!'}
            />
          }
          <div className='mb-6'>
            <label htmlFor='actividad' className="block text-gray-600 font-bold" > Nombre la actividad</label>
            <input
              id ='actividad'
              type="text"
              placeholder='Escribe tu actividad'
              className='border-3 w-full p-2 mt-2 placeholder:border-t-gray-600 rounded-md'
              value={actividades}
              onChange={(e)=> setActividades(e.target.value)}
            />
          </div>

          <div className='mb-6'>
            <label htmlFor='Descripcion' className="block text-gray-600 font-bold" > Descripcion la actividad</label>
            <textarea
              id="Descripcion"
              className='border-3 w-full p-2 mt-2 placeholder:border-t-gray-600 rounded-md'
              placeholder='Describe la actividad'
              value={descripcion}
              onChange={(e)=> setDescripcion(e.target.value)}
            />
          </div>

          <div className='mb-6'>
            <label htmlFor='Fecha' className="block text-gray-600 font-bold" >Finalizacion Limite</label>
            <input
              id ='Fecha'
              type="date"
              className='border-3 w-full p-2 mt-2 placeholder:border-t-gray-600 rounded-md'
              value={fecha}
              onChange={(e)=> setFecha(e.target.value)}
            />
          </div>
          <input
            type="submit"
            className='bg-indigo-200 w-full p-3 text-black cursor-pointer rounded-md'
            value={editar.id ? 'Guardar Cambios' : 'Agregar Actividad'}
          />

      </form>
    </div>
  )
}

export default Formulario