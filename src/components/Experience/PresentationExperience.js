import './PresentationExperience.css'
// import experienceimg from '../../images/experience.png'
import bluelinedcircle from '../../images/blue-lined-circle.png'

const PresentationExperience = props => {

    return (
        <>
            <div className='experience-box'>
            

                <div className="experience-text">
                    {props.form.role && <h1 className="experience-title">Experience.</h1>}

                    <p className="line role">{props.form.role}</p>
                    <p className="company"> {props.form.company}</p>
                    <p className="line date"> {props.form.startdate} {props.form.enddate}</p>


                    <ul className="job-tasks">

                        {props.form.task1 && <li className="list-item"> {props.form.task1}</li>}
                        {props.form.task2 && <li className="list-item"> {props.form.task2}</li>}
                        {props.form.task3 && <li className="list-item"> {props.form.task3}</li>}
                        {props.form.task4 && <li className="list-item"> {props.form.task3}</li>}


                    </ul>


                </div>

                <div>
                    <img className="experience-img" src={bluelinedcircle} alt="" />
                </div>

            </div>
        </>
    )
}

export default PresentationExperience;