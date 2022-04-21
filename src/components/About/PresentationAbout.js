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
          {props.form.picture ? <img src={props.form.picture} alt="profile-pic" className="main-image"/>: <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80" alt="person" className="main-image"/>}
          {/* <img src={props.form.picture} alt="profile-pic" className="main-image"/> */}
          </div>
      </div>

     
        </>
    )
}

export default PresentationAbout;