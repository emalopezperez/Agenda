import React from 'react'

const MensajeError = ({mensaje}) => {
  return (
            <div className='bg-red-200 text-center text-white p-2 mb-6 rounded-md'>
                <p>
                    {
                        mensaje
                    }
                </p>
            </div>
  )
}

export default MensajeError