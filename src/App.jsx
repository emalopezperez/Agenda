
import './Estilos.css'
import Formulario from './Components/Formulario'
import Nav from './Components/Nav'
import Activities from './Components/Activities'

function App() {

  return (
  <div className="container mx-20">
    <div className=''>
        <Nav/>
    </div>

    <div className='mt-18 md:flex mt-20 '>
      <Formulario/>
      <Activities/>
    </div>

  </div>
  )
}

export default App
