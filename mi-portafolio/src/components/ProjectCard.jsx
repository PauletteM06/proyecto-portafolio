
const ProjectCard = ({img, name, description, demo, github, tecnologies}) => {
  return (
    <>
    <div className="project_container">
        <img className="project_img" src={img} alt="screenshot project" />
        <p className="project_name">{name}</p>
        <p className="project_description">{description}</p>
        <div className="project_button_container">
          <button className="project_button"><a href={demo} target="_blank" rel="noopener noreferrer"></a>Ver Demo</button>
          <button className="project_button"><a href={github} target="_blank" rel="noopener noreferrer"></a>Ver en GitHub</button>
        </div>
        <div className="project_tecnologies_container">{tecnologies}</div>
    </div>
    
    </>
  )
}

export default ProjectCard