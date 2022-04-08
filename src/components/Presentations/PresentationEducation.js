import './PresentationEducation.css'

const PresentationEducation = props => {
    return (
        <>
            <div className="education-box">

            {/* <h1 className="education-title">EDUCATION</h1> */}
                <div className="education-text">
                   <p className="degree"> {props.form.degree1}</p>
                   <p className="institution"> {props.form.institution1}</p>
                   <p className="date"> {props.form.edstartdate1} - {props.edenddate1}</p> 
                </div>

                <div className="education-text">
                   <p className="degree"> {props.form.degree2}</p>
                   <p className="institution"> {props.form.institution2}</p>
                   <p className="date"> {props.form.edstartdate2} - {props.form.edenddate2}</p> 
                </div>
            </div>
        </>
    )
}

export default PresentationEducation;