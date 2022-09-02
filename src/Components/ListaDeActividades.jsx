import React, { useState } from 'react'
import MensajeError from './MensajeError'
import toast, { Toaster} from 'react-hot-toast';

const ListaDeActividades = ({act,setEditar,remove,realizado}) => {

    
    const {fecha,descripcion,actividades,id}= act

const editar=() =>{
    setEditar(act)
}

const ConsultaRemove =() =>{
    const respuesta = confirm('Seguro deseas postergar la actividad?')
    if(respuesta){
        remove(id)
        toast.error('Postergando actividad!')
    }
}

const mensajeFinalizacionAct= ()=>{
        realizado(id)
        toast.success('Actividad Finalizada')
}
    return (
        <div className="mx-4  my-10 bg-white shadow-md px-5 py-10 rounded-xl">
            <p className="mb-4 text-grey-800">
                Actividad:{' '}
                <span className='font-normal text-gray-500 '>
                    {actividades}
                </span>
            </p>
    
            <p className="mb-4 text-grey-800 ">
                Descripcion:{' '}
                <span className='font-normal text-gray-500'>
                    {descripcion}
                </span>
            </p>
    
            <p className="mb-4 text-gray-800">
                Fecha Limite: {' '}
                <span className='font-normal text-gray-500'>
                    {fecha}
                </span>
            </p>

            <div className='flex justify-between mt-12'>
                <button
                    type='button'
                    className='py-1 px-2 bg-indigo-300 cursor-pointer text-black rounded-lg '
                    onClick={editar}
                > Editar</button>

                <button
                    type='button'
                    className='py-1 px-2 bg-emerald-200 cursor-pointer text-black rounded-lg'
                    onClick={mensajeFinalizacionAct}
                > Realizada</button>

                <button
                    type='button'
                    className='py-1 px-2 bg-red-400 cursor-pointer  text-black rounded-lg'
                    onClick={ConsultaRemove}
                > Postergar</button>
            </div>
            <Toaster
                position="top-center"
                
            />
        </div>
        
    )
    
}

export default ListaDeActividades