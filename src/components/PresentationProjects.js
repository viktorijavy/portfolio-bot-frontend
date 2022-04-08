import './PresentationProjects.css'
import projectpic from '../NewsApp3.jpg'
import logo from '../GitHub_Logo.png'


const PresentationProjects = props => {

    return (
        <>
            <div className="project-box">

                <div className="project-text">
                    <h1>{props.name}</h1>
                    <p className="project-description"> {props.description}</p>
                    <div className="project-technologies">
                    Made with: 
                    <p> {props.technologies }</p>
                    </div>
                    <div className="project-links">
                        <a href={props.link1}> <img src={logo} alt="" className='github-logo' /> </a>
                    </div>

                </div>
                <div className="project-image-box">
                    <img className="project-img" src={projectpic} alt="projectImg" />
                </div>

            </div>
        </>
    )
}

export default PresentationProjects;