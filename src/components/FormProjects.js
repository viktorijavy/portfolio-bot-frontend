import './FormBio.css'


const FormProjects = props => {

    // const [name, setName] = useState('');
    // const [occupation, setOccupation] = useState('');
    // const [city, setCity] = useState('');
    // const [about, setAbout] = useState('');
    // const [email, setEmail] = useState('');
    // const [imageUrl, setImageUrl] = useState();

    return (
        <>
        
        <div className="form-container">
        
            <form className="form">
            
                <div className="form-item">
                    <label htmlFor="name">Project Name</label>
                    <input
                        className="form-input"
                        placeholder="Project Name"
                        type="text"
                        // value={props.name}
                        onChange={props.handleProjectNameChange}
                    />
                </div>

                <div className="form-item">
                <label> Description </label>
                    <textarea
                        className="form-input"
                        placeholder="Describe your project shortly"
                        type="text"
                        onChange={props.handleProjectDescription}
                        
                    />
                </div>
             
                <div className="form-item">
                    <label htmlFor="occupation"> Add an image</label>
                    <input
                        className="form-input"
                        placeholder="Your occupation"
                        type="file"
                        // value={props.occupation}
                        
                    />
                </div>

                <div className="form-item">
                    <label htmlFor="city"> Technologies </label>
                    <input
                        className="form-input"
                        placeholder="Which technologies did you use?"
                        type="text"
                        
                    />
                </div>

               

                <button className="next-btn" type="submit"> Add Project</button>
            </form>
            </div>
        </>
    )
}

export default FormProjects;