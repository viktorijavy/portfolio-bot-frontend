import './PresentationAbout.css'
import kabute from '../../images/kabutes.png'


const PresentationAbout = props => {
    return (
        <>
      <div className="about-box">
          <div className="about-text">

           <h1 className="about-title"> About.</h1>
            
            {props.form.description &&  <img src={kabute} alt="" className="kabute kabute-first"/>}
            
              <p className="about-paragraph"> {props.form.description}</p>
              {props.form.description &&  <img src={kabute} alt="" className="kabute kabute-last"/>}
            
          </div>

          <div className="about-image-box">
          <img src={props.form.picture} alt="profile-pic" className="main-image"/>
          </div>
      </div>

     
        </>
    )
}

export default PresentationAbout;