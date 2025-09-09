import'./Projects.scss'
import Cards from './Cards.jsx';

function Projects(){
    return(
        <div className="projects" id='projects'>
            <h1 className="projects__title">Projets</h1>
            <div className="projects__cards">
            <Cards />
            </div>
        </div>
    )
}

export default Projects;