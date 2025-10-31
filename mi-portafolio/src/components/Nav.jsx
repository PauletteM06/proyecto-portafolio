import { useState } from "react";
import { FaCode } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

const Nav = () => {
  const [btnIsActive, setBtnIsActive] = useState(false);

  const closeMenu = () => setBtnIsActive(false);

  return (
    <>
      <div className="nav">
        <div className="nav_logo_container">
          <FaCode color="#ff0080" size={25} />
          <p className="nav_logo">SM</p>
        </div>

        <button
          onClick={() => setBtnIsActive(!btnIsActive)}
          className="btn_menu"
        >
          <GiHamburgerMenu color="#a9a9a9" size={20} />
        </button>

        <div className={`nav_container ${btnIsActive ? "active" : ""}`}>
          <nav className="nav_link">
            <a href="#header" onClick={closeMenu}>Inicio</a>
            <a href="#sobre-mi" onClick={closeMenu}>Sobre mí</a>
            <a href="#skill" onClick={closeMenu}>Tecnologías</a>
            <a href="#proyectos" onClick={closeMenu}>Proyectos</a>
            <a href="#footer" onClick={closeMenu}>Contacto</a>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Nav;
