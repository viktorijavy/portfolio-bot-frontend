import './PresentationBio.css'
import vicpic from '../../avatar.png'

const PresentationBio = props => {

    return (
        <>
            <div className="presentation">

                <div className="intro">

                    <h1 className="presentation-title"> Hi, my name is {props.form.name}</h1>
                    <p className="presentation-line"> I am a {props.form.occupation}</p>
                    <p className="presentation-line"> based in {props.form.city}, Germany</p>
                    <p className="paragraph"> {props.form.about}</p>

                    <button className="see-projects-btn"> See my projects </button>
                    
                </div>

                <div className="picture">
                    <img src={props.form.picture} className="avatar" alt="avatar" />
                </div>

               
            </div>
        </>
    )
}

export default PresentationBio