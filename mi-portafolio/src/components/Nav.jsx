import { FaCode } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";



const Nav = () => {
  return (

    <>
    <div className="nav">
        <div className="nav_logo_container">
            <FaCode color="#ff0080" size={25}/>
            <p className="nav_logo">SM</p>
        </div>
        
        <button className="btn_menu"><GiHamburgerMenu color="#a9a9a9" size={20}/></button>
        <div className="nav_container">
          <nav className="nav_link">
              <a href="#header">Inicio</a>
              <a href="#sobre-mi"><span>Sobre mi</span></a>
              <a href="#skill">Tecnologías</a>
              <a href="#proyectos">Proyectos</a>
              <a href="#footer">Contacto</a>
          </nav>
        </div>
    </div>
    </>
  )
}

export default Nav