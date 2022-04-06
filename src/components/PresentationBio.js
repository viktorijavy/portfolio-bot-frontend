import './PresentationBio.css'
import vicpic from '../avatar.png'

const PresentationBio = props => {

    return (
        <>
            <div className="presentation">

                <div className="intro">

                    <h1 className="presentation-title"> Hi, my name is {props.name}</h1>
                    <p className="presentation-line"> I am a {props.occupation}</p>
                    <p className="presentation-line"> based in {props.city}, Germany</p>
                    <p className="paragraph"> {props.about}</p>

                    <button className="see-projects-btn"> See my projects </button>
                    
                    {/* <ul>
                    <li> Currently looking for work</li>
                    <li> Remotely </li>
                    <li> On-site</li>
                    </ul> */}
                </div>

                <div className="picture">
                    <img src={vicpic} className="avatar" alt="avatar" />
                </div>

               
            </div>
        </>
    )
}

export default PresentationBio