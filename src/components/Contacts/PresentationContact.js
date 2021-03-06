import './PresentationContact.css'
import linkedin from '../../images/linkedin.png'
import github from '../../images/github.png'
import twitter from '../../images/twitter.png'
import contact from '../../images/contact-me-guy.png'

const PresentationContact = props => {

    return (
        <>
            <div className="contact-box">

                <div className="contact-title">
                    <h1> {props.form.contacttitle}</h1>

                </div>

                <div className="contact-email">
                    {props.form.email && <p> Contact me at:</p>}

                    <p> {props.form.email}</p>

                </div>
                <div className="social-links">

                    {(props.form.github || props.form.linkedin) && <div className="find-me-on">Find me on:</div>}



                    <div className="social-link-items">

                        {props.form.linkedin && <a href={props.form.linkedin}><img src={linkedin} alt="" className="linkedin social-logo" /> </a>}

                        {props.form.github && <a href={props.form.github}><img src={github} alt="" className="github social-logo" /> </a>}

                        {props.form.twitter && <a href={props.form.twitter}><img src={twitter} alt="" className="twitter social-logo" /> </a>}

                    </div>
                </div>

                <div className="contact-image-holder">

                    <img src={contact} alt="" className="contact-img"/>
                </div>

            </div>
        </>
    )
}

export default PresentationContact;