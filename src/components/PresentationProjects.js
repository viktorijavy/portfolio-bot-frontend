import './PresentationProjects.css'



const PresentationProjects = props => {

    return (
        <>
            <div className="project-box">

                <div className="project-text">
                    <h1>{props.name}</h1>
                    <p className="project-description"> {props.description}</p>
                    <div className="project-technologies">
                    Made with: 
                        <ul className="technologies-list">
                            <li className="technologie-list-item"> HMTL</li>
                            <li className="technologie-list-item"> CSS</li>
                            <li className="technologie-list-item"> JavaScript</li>
                        </ul>
                    </div>
                    <div className="project-links"> Links: github, demo</div>

                </div>
                <div className="project-image-box">
                    <img className="project-img" src="https://placekitten.com/200/200" alt="projectImg" />
                </div>

            </div>
        </>
    )
}

export default PresentationProjects;