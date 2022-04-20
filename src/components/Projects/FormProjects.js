import Button from "../Button";

const FormProjects = props => {
    function getBase64(file, e) {
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            props.setform({ ...props.form, [e.target.name]: reader.result })
        };
        reader.onerror = function (error) {
            console.log('Error: ', error);
        };
    }

    return (
        <>

            <div className="form-container">

                <form
                    className="form"
                    onSubmit={(e) => {
                        props.increaseProgress(e)
                    }}>

                    <h2> Add the best project of yours</h2>

                    <div className="form-item">
                        <label> Project Name</label>
                        <input
                            className="form-input"
                            placeholder="Project Name"
                            type="text"
                            required
                            name="projectname"
                            value={props.form.projectname}
                            onChange={e => {
                                props.validateAndSetForm(e)
                            }}
                        />
                    </div>

                    <div className="form-item">
                        <label> Description </label>
                        <textarea
                            className="form-input"
                            placeholder="Describe your project shortly"
                            type="text"
                            required
                            rows='5'
                            name="projectdescription"
                            value={props.form.projectdescription}
                            onChange={e => {
                                props.validateAndSetForm(e)
                            }}

                        />
                    </div>

                    <div className="form-item">
                        <label htmlFor="image"> Add an image</label>
                        <input
                            className="form-input"
                            placeholder="add image"
                            type="file"
                            name="projectimage"
                            onChange={e => {
                                props.validateAndSetForm(e)
                                getBase64(e.target.files[0], e)
                            }}
                        />

                    </div>

                    <div className="form-item">
                        <label> Technologies </label>
                        <input
                            className="form-input"
                            placeholder="Which technologies did you use?"
                            type="text"
                            required
                            name="technologies"
                            value={props.form.technologies}
                            onChange={e => {
                                props.validateAndSetForm(e)
                            }}
                        />
                    </div>

                    <div className="form-item">
                        <label> Github </label>
                        <input
                            className="form-input"
                            placeholder="Add a link to a github repo"
                            type="text"
                            required
                            name="code"
                            value={props.form.code}
                            onChange={e => {
                                props.validateAndSetForm(e)
                            }}
                        />
                    </div>

                    <div className="form-item">
                        <label> Demo </label>
                        <input
                            className="form-input"
                            placeholder="Add a link to a demo"
                            type="text"
                            name="demo"
                            value={props.form.demo}
                            onChange={e => {
                                props.validateAndSetForm(e)
                            }}
                        />
                    </div>



                    
                    <Button disabled={Object.keys(props.errors).length > 0} type="submit"> Next</Button>
                 
                    {props.errors && (
                        <div className="error-message">
                            {Object.values(props.errors).map((error, index) => (
                                <div key={index}>*{error}</div>
                            ))}
                        </div>
                    )}
                    
                </form>

            </div>
        </>
    )
}

export default FormProjects;