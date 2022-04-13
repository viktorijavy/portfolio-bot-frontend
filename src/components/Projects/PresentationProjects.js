import './PresentationProjects.css'
// import pic2 from '../../project-pic.png'
import logo from '../../GitHub_Logo_White.png'


const PresentationProjects = props => {

    return (
        <>
            <div className="project-box">

                <div className="project-text">
                    <h1>{props.form.projectname}</h1>
                    <p className="project-description"> {props.form.projectdescription}</p>
                    <div className="project-technologies">

                        {props.form.technologies && <p>  Made with: </p>}

                        <p className="technologies"> {props.form.technologies}</p>
                    </div>
                    <div className="project-links">
                        {props.form.code &&
                            <a href={props.form.code}> <img src={logo} alt="" className='github-logo' /> </a>}
                        {props.form.demo &&
                            <a href={props.form.demo} className="demo"> Demo </a>}

                    </div>

                </div>
                <div className="project-image-box">
                    {props.form.projectimage && <img className="project-img" src={props.form.projectimage} alt="project-img" />}

                </div>

            </div>
        </>
    )
}

export default PresentationProjects;