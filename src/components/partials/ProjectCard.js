import {FaGithub} from 'react-icons/fa'
import image from '../card-image.png';

const ProjectCard = ({ r }) => {

    return (
        <>
            {/* <div className="project-card">
                <h3 className="project-card-heading"> { r.name } </h3>
                <p className="project-card-details"> { r.description } </p>
                <p className="project-card-lang"> { r.language } </p>
                <div className="project-card-links"> <a href={ r.html_url }> <FaGithub/> </a> 
                </div>
            </div> */}

            <div className="card">
                <div className="card-image">
                    <img src={ image } alt=""/>
                </div>

                <div className="card-info">
                    <div className="card-heading">
                        <h3> { r.name } </h3>
                        <span className="tech"> { r.language } </span>
                    </div>

                    <p className="card-text"> { r.description } </p>

                    <div className="card-footer">
                        <a href={r.html_url} className="card-link"> <FaGithub /> </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectCard
