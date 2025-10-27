
import './App.css'
import Header from './components/Header'
import Proyectos from './components/Proyectos'
import Skills from './components/Skills'
import SobreMi from './components/SobreMi'

function App() {

  return (
    <>
      <main className='container'>
        <Header></Header>
        <SobreMi></SobreMi>
        <Skills></Skills>
        <Proyectos></Proyectos>
      </main>
    </>
  )
}

export default App
