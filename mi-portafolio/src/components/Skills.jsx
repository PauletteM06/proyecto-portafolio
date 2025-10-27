import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";


const Skills = () => {
  return (
    <>
    <div>
        <h2 className="skill_name">Tecnologías</h2>
        <div className="skill_container">
            <div className="skill">
                <FaHtml5 className="skill_icon" size={40} color="#e34c26"/>
                <p className="skill_name">HTML</p>
            </div>
            <div className="skill">
                <FaCss3Alt className="skill_icon" size={40} color="#264de4"/>
                <p className="skill_name">CSS</p>
            </div>
            <div className="skill">
                <FaJs className="skill_icon" size={40} color="#f7df1e"/>
                <p className="skill_name">JavaScript</p>
            </div>
            <div className="skill">
                <FaReact className="skill_icon" size={40} color="#61dafb"/>
                <p className="skill_name">React</p>
            </div>
            <div className="skill">
                <FaGitAlt className="skill_icon" size={40} color="#f05032"/>
                <p className="skill_name">Git-GitHub</p>
            </div>

        </div>
        
        
    </div>
    </>
  )
}

export default Skills