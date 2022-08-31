
import './Estilos.css'
import Formulario from './Components/Formulario'
import Nav from './Components/Nav'
import Activities from './Components/Activities'
import {useState } from 'react'

function App() {

const [actividad, setActividad] = useState([])


  return (
  <div className="container mx-20 ">
    <div className=''>
        <Nav/>
    </div>

    <div className='mt-18 md:flex mt-20 '>
      <Formulario
        actividad={actividad}
        setActividad={setActividad}
      />
      <Activities
        actividad={actividad}
      />
    </div>

  </div>
  )
}

export default App
