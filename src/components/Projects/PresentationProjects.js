import './PresentationProjects.css'
// import pic2 from '../../project-pic.png'
import logo from '../../images/GitHub_Logo_White.png'


const PresentationProjects = props => {

    return (
        <>
            <div className="project-box">
            

                <div className="project-text">
                <h1 className="projects-title"> Projects.</h1>
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
                    {props.form.projectimage ? <img className="project-img" src={props.form.projectimage} alt="project-img" /> : <img src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1055&q=80" alt="project-img" className="project-img"/> }

                </div>

            </div>
        </>
    )
}

export default PresentationProjects;