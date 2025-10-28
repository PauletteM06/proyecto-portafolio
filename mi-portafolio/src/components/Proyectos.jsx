import ProjectCard from "./ProjectCard"
import sitio01 from '../assets/sitio01.png'
import sitio02 from '../assets/sitio02.png'
import sitio03 from '../assets/sitio03.png'
import sitio04 from '../assets/sitio04.png'

const Proyectos = () => {

    const proyectos = [
        {
            id: 1,
            img: sitio01,
            name: "Nombre proyecto",
            description: "Descripcion del proyecto",
            demo: "link demo",
            gitHub: "link github",
            tecnologies: "iconitos"
        },


        {
            id: 2,
            img: sitio02,
            name: "Nombre proyecto",
            description: "Descripcion del proyecto",
            demo: "link demo",
            gitHub: "link github",
            tecnologies: "iconito"
        },


        {
            id: 3,
            img: sitio03,
            name: "Nombre proyecto",
            description: "Descripcion del proyecto",
            demo: "link demo",
            gitHub: "link github",
            tecnologies: "iconito"
        },


        {
            id: 4,
            img: sitio04,
            name: "Nombre proyecto",
            description: "Descripcion del proyecto",
            demo: "link demo",
            gitHub: "link github",
            tecnologies: "iconito"
        }
    ] 



  return (
    <>
        <h2 className="project_title">Proyectos</h2>
        <div className="project_container">
        {proyectos.map(project => (
            <ProjectCard key={project.id} {...project} />
        ))}
        </div>
    </>
  )
}

export default Proyectos


