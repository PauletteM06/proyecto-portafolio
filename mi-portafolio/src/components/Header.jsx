import avatar from "../assets/avatar.png";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

const Header = () => {
  return (
    <>
      <header className="header">
        <div>
          <h2 className="header_title">Hola! 👋</h2>
          <h1 className="header_name">Soy Scarlett Márquez</h1>
          <h3 className="header_profession">Desarrolladora Front-End</h3>
        </div>

        <div>
          <div className="header_container_avatar">
            <img className="header_avatar" src={avatar} alt="avatar" />
            <div className="header_avatar_bg"></div>
          </div>

          <div className="header_container_info">
            <button className="header_button">Descargar CV</button>
            <div className="header_socials">
              <a
                href="https://github.com/PauletteM06?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="icon" size={25} color="#ff0080" />
              </a>
              <a
                href="https://www.linkedin.com/in/scarlett-m%C3%A1rquez-torres-7996b4292/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="icon" size={25} color="#ff0080" />
              </a>
              <a
                href="mailto:marquez06t@gmail.com?subject=Consulta%20desde%20tu%20portafolio"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineMail className="icon" size={32} color="#ff0080"></AiOutlineMail>
              </a>
            </div>
          </div>
        </div>

      </header>
    </>
  );
};

export default Header;
