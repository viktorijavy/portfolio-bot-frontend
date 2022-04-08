import './PresentationProjects.css'

import logo from '../../GitHub_Logo.png'


const PresentationProjects = props => {

    return (
        <>
            <div className="project-box">
            
                <div className="project-text">
                    <h1>{props.form.projectname}</h1>
                    <p className="project-description"> {props.form.projectdescription}</p>
                    <div className="project-technologies">
                    Made with: 
                    <p> {props.form.technologies }</p>
                    </div>
                    <div className="project-links">
                        <a href={props.form.code}> <img src={logo} alt="" className='github-logo' /> </a>
                    </div>

                </div>
                <div className="project-image-box">
                    <img className="project-img" src={props.form.projectimage} alt="project-img" />
                </div>

            </div>
        </>
    )
}

export default PresentationProjects;