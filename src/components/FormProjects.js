import './FormBio.css'


const FormProjects = props => {


    return (
        <>

            <div className="form-container">

                <form 
                    className="form"
                    onSubmit={(e) => {
                    props.increaseProgress(e)
                }}>

                    <div className="form-item">
                        <label htmlFor="name">Project Name</label>
                        <input
                            className="form-input"
                            placeholder="Project Name"
                            type="text"
                            name="projectname"
                            onChange={props.handleProjectNameChange}
                        />
                    </div>

                    <div className="form-item">
                        <label> Description </label>
                        <textarea
                            className="form-input"
                            placeholder="Describe your project shortly"
                            type="text"
                            name="projectdescription"
                            onChange={props.handleProjectDescription}

                        />
                    </div>

                    <div className="form-item">
                        <label htmlFor="image"> Add an image</label>
                        <input
                            className="form-input"
                            placeholder="add image"
                            type="file"
                            name="projectimage"
                        />

                    </div>

                    <div className="form-item">
                        <label htmlFor="technologies"> Technologies </label>
                        <input
                            className="form-input"
                            placeholder="Which technologies did you use?"
                            type="text"
                            name="technologies"
                            onChange={props.handleTechnologiesChange}
                        />
                    </div>

                    <div className="form-item">
                        <label htmlFor="demo"> Github </label>
                        <input
                            className="form-input"
                            placeholder="Add a link to a github repo"
                            type="text"
                            name="code"
                            onChange={props.handleLink1Change}
                        />
                    </div>

                    <div className="form-item">
                        <label htmlFor="code-link"> Code </label>
                        <input
                            className="form-input"
                            placeholder="Add a link to a demo"
                            type="text"
                            name="demo"
                            onChange={props.handleLink2Change}
                        />
                    </div>



                    <button className="next-btn" type="submit"> Add Project</button>
                </form>
            </div>
        </>
    )
}

export default FormProjects;