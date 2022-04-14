import './PresentationBio.css'
import substitutepic from '../../images/avatar.png'

const PresentationBio = props => {

    return (
        <>
            <div className="presentation">

                <div className="intro">
                    {props.form.name && <h1 className="presentation-title"> Hi, my name is {props.form.name}</h1>}

                    {props.form.occupation && <p className="presentation-line"> I am a {props.form.occupation}</p>}
                    {props.form.city && <p className="presentation-line"> based in {props.form.city}</p>}

                    <p className="paragraph"> {props.form.about}</p>

                    {props.form.about && <button className="see-projects-btn"> See my projects </button>}

                </div>

                <div className="picture">
                    {props.form.picture ? <img src={props.form.picture} className="avatar" alt="avatar" /> : 
                    <img src={substitutepic} alt="" className="avatar"/>}
                    

                </div>


            </div>
        </>
    )
}

export default PresentationBio;