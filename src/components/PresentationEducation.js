import './PresentationEducation.css'

const PresentationEducation = props => {
    return (
        <>
            <div className="education-box">

            {/* <h1 className="education-title">EDUCATION</h1> */}
                <div className="education-text">
                   <p className="degree"> {props.degree1}</p>
                   <p className="institution"> {props.institution1}</p>
                   <p className="date"> {props.edStartDate1} - {props.edEndDate1}</p> 
                </div>

                <div className="education-text">
                   <p className="degree"> {props.degree2}</p>
                   <p className="institution"> {props.institution2}</p>
                   <p className="date"> {props.edStartDate2} - {props.edEndDate2}</p> 
                </div>
            </div>
        </>
    )
}

export default PresentationEducation;