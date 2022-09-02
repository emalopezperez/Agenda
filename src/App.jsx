
import './Estilos.css'
import Formulario from './Components/Formulario'
import Nav from './Components/Nav'
import Activities from './Components/Activities'
import { useState, useEffect } from 'react'

function App() {

const inicial = JSON.parse(localStorage.getItem('actividad')) ?? [];
const [actividad, setActividad] = useState(inicial)
const [editar, setEditar] = useState({})

useEffect(() => {
localStorage.setItem('actividad',JSON.stringify(actividad))
},[actividad])


const remove= (id)=>{
  const removeActividad = actividad.filter(elemento => elemento.id !== id)
  setActividad(removeActividad)
}

  const realizado= (id)=>{
    const removeActividad = actividad.filter(elemento => elemento.id !== id)
    setActividad(removeActividad)
  }


  return (
    <div className="container mx-auto md:mt-0 bg-blue-90">
      <div className=''>
          <Nav/>
      </div>

      <div className='mt-12 md:flex'>
        <Formulario
        actividad={actividad}
        setActividad={setActividad}
        editar={editar}
        setEditar={setEditar}
        />
        <Activities
        actividad={actividad}
        setEditar= {setEditar}
        remove={remove}
        realizado={realizado}
        />
      </div>
    </div>
  )
}

export default App
