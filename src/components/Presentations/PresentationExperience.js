import './PresentationExperience.css'

const PresentationExperience = props => {
    
    return (
        <>
            <div className='experience-box'>

            <h1 className="experience-title">EXPERIENCE</h1>
                <div className="experience-text">
                    <p className="line role">{props.form.role}</p>
                    <p className="company"> {props.form.company}</p>
                    <p className="line date"> {props.form.startdate} {props.enddate}</p>
                    
                       
                        <ul className="job-tasks">
                            <li className="list-margin"> {props.form.task1}</li>
                            <li className="list-margin"> {props.form.task2}</li>
                            <li className="list-margin"> {props.form.task3}</li>
                        </ul>
                    

                </div>

            </div>
        </>
    )
}

export default PresentationExperience;