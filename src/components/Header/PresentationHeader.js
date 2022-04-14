import './PresentationHeader.css'
import bluedots from '../../images/small-blue-dots.png'

const PresentationHeader = props => {

    return (
        <>
            <div className="presentation">

                <div className="presentation-text">
                    {props.form.name && <h1 className="presentation-title"> Hi, my name is <p className='input-name'>{props.form.name}</p> </h1>}

                    {props.form.occupation && <p className="presentation-line"> I am a {props.form.occupation}</p>}
                    {props.form.city && <p className="presentation-line"> based in {props.form.city}</p>}

                    <p className="paragraph"> {props.form.about}</p>

                    {props.form.about && <button className="see-projects-btn"> See my projects </button>}

                </div>

                <div className="picture">

                    <img src={bluedots} className="avatar" alt="avatar" /> 
                    
                
                </div>


            </div>
        </>
    )
}

export default PresentationHeader;