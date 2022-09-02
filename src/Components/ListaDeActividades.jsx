import React, { useState } from 'react'
import MensajeError from './MensajeError'

const ListaDeActividades = ({act,setEditar,remove,realizado}) => {

    const [mensajes, setMensajes] =useState(false)
    const {fecha,descripcion,actividades,id}= act

const editar=() =>{
    setEditar(act)
}

const ConsultaRemove =() =>{
    const respuesta = confirm('Seguro deseas postergar la actividad?')
    if(respuesta){
        remove(id)
        setMensajes(true)
    }
}

const mensajeFinalizacionAct= ()=>{
    realizado(id)
    setMensajes(true)
}

    return (
        <div className="mx-4  my-10 bg-white shadow-md px-5 py-10 rounded-xl">

            <p className="mb-4 text-grey-700">
                Actividad:{' '}
                <span className='font-normal'>
                    {actividades}
                </span>
            </p>
    
            <p className="mb-4 text-grey-700 ">
                Descripcion:{' '}
                <span className='font-normal'>
                    {descripcion}
                </span>
            </p>
    
            <p className="mb-4 text-grey-700">
                Fecha Limite: {' '}
                <span className='font-normal'>
                    {fecha}
                </span>
            </p>

            <div className='flex justify-between mt-12'>
                <button
                    type='button'
                    className='py-1 px-2 bg-slate-400 cursor-pointer text-red-100 rounded-lg '
                    onClick={editar}
                > Editar</button>

                <button
                    type='button'
                    className='py-1 px-2 bg-emerald-600 cursor-pointer  text-red-100 rounded-lg'
                    onClick={mensajeFinalizacionAct}
                > Realizada</button>

                <button
                    type='button'
                    className='py-1 px-2 bg-orange-800 cursor-pointer  text-red-100 rounded-lg'
                    onClick={ConsultaRemove}
                > Postergar</button>
            </div>
        </div>
        
    )
    
}

export default ListaDeActividades