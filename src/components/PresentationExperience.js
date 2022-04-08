import './PresentationExperience.css'

const PresentationExperience = props => {
    
    return (
        <>
            <div className='experience-box'>

            <h1 className="experience-title">EXPERIENCE</h1>
                <div className="experience-text">
                    <p className="line role">{props.role}</p>
                    <p className="company"> {props.company}</p>
                    <p className="line date"> {props.startDate} {props.endDate}</p>
                    
                       
                        <ul className="job-tasks">
                            <li className="list-margin"> {props.task1}</li>
                            <li className="list-margin"> {props.task2}</li>
                            <li className="list-margin"> {props.task3}</li>
                        </ul>
                    

                </div>

            </div>
        </>
    )
}

export default PresentationExperience;