import './PresentationEducation.css'
import educationimg from '../../images/blue-blob.png'

const PresentationEducation = props => {

    return (
        <>
            <div className="education-box">


                <div className="education-box-item">
                    <div className="education-image-div">
                      {props.form.degree1 && <img className="education-image" src={educationimg} alt="" />}  
                        
                    </div>
                    <div className="education-text marg">
                        <p className="role"> {props.form.degree1}</p>
                        <p className="institution"> {props.form.institution1}</p>
                        <p className="date"> {props.form.edstartdate1} - {props.form.edenddate1}</p>
                        <p>{props.form.eddescription1}</p>
                    </div>

                </div>

                <div className="education-box-item">

                    <div className="education-image-div">
                    {props.form.degree2 && <img className="education-image" src={educationimg} alt="" />}  
                    </div>
                    <div className="education-text marg">
                        <p className="role"> {props.form.degree2}</p>
                        <p className="institution"> {props.form.institution2}</p>
                        <p className="date">{props.form.edstartdate2}-{props.form.edenddate2}</p>
                        <p>{props.form.eddescription2}</p>
                    </div>


                </div>
            </div>
        </>
    )
}

export default PresentationEducation;