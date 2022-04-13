import './PresentationExperience.css'
import experienceimg from '../../experience.png'

const PresentationExperience = props => {

    return (
        <>
            <div className='experience-box'>

                <div>
                    <img className="experience-img" src={experienceimg} alt="" />
                </div>

                <div className="experience-text">
                    {props.form.role && <h1 className="experience-title">EXPERIENCE</h1>}

                    <p className="line role">{props.form.role}</p>
                    <p className="company"> {props.form.company}</p>
                    <p className="line date"> {props.form.startdate} {props.form.enddate}</p>


                    <ul className="job-tasks">

                        {props.form.task1 ? <li className="list-margin"> {props.form.task1}</li> : null}
                        {props.form.task2 ? <li className="list-margin"> {props.form.task2}</li> : null}
                        {props.form.task3 ? <li className="list-margin"> {props.form.task3}</li> : null}
                        {props.form.task4 ? <li className="list-margin"> {props.form.task3}</li> : null}


                    </ul>


                </div>

            </div>
        </>
    )
}

export default PresentationExperience;