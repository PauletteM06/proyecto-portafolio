import { FaCode } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";



const Footer = () => {
  return (
    <>

    <hr />
    <div className="footer_container">
      <div className="footer_container_logo">
          <FaCode color="#ff0080" size={25}/>
          <p>SM</p>
      </div>
      <div className="footer_contact">
        <a><FaWhatsapp color="#ff0080" size={22}/></a>
    
        <div className="footer_contact_email">
          <a
            href="mailto:marquez06t@gmail.com?subject=Consulta%20desde%20tu%20portafolio"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineMail color="#ff0080" size={22}/></a>
          <p>marquez06t@gmail.com</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Footer