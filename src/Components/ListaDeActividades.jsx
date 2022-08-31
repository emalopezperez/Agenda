import React from 'react'


const ListaDeActividades = ({act}) => {

const {fecha,descripcion,actividades}= act

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
            Fecha Limite:{' '}
            <span className='font-normal'>
                {fecha}
            </span>
        </p>

    </div>
  )
}

export default ListaDeActividades