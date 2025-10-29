
import './App.css'
import Header from './components/Header'
import Proyectos from './components/Proyectos'
import Skills from './components/Skills'
import SobreMi from './components/SobreMi'
import Nav from './components/Nav'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <main className='container'>
        <Nav></Nav>
        <section className='section' id="header">
          <Header></Header>
        </section>
        <section className='section' id="sobre-mi">
          <SobreMi></SobreMi>
        </section>
        <section className='section' id="skill">
          <Skills></Skills>
        </section>
        <section className='section' id="proyectos">
          <Proyectos></Proyectos>
        </section>
        <section className='section' id="footer">
          <Footer></Footer>
        </section>
      </main>
    </>
  )
}

export default App
