import { useState } from 'react';
import './FormBio.css'


const FormProjects = props => {
    function getBase64(file, e) {
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
          props.setform({...props.form, [e.target.name]:reader.result})
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

                    <div className="form-item">
                        <label htmlFor="name">Project Name</label>
                        <input
                            className="form-input"
                            placeholder="Project Name"
                            type="text"
                            name="projectname"
                            onChange={e=>{
                                props.setform({...props.form, [e.target.name]: e.target.value})
                                }}
                        />
                    </div>

                    <div className="form-item">
                        <label> Description </label>
                        <textarea
                            className="form-input"
                            placeholder="Describe your project shortly"
                            type="text"
                            name="projectdescription"
                            onChange={e=>{
                                props.setform({...props.form, [e.target.name]: e.target.value})
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
                                // console.log(e.target.files)
                                getBase64(e.target.files[0], e)
                            }}
                        />

                    </div>

                    <div className="form-item">
                        <label htmlFor="technologies"> Technologies </label>
                        <input
                            className="form-input"
                            placeholder="Which technologies did you use?"
                            type="text"
                            name="technologies"
                            onChange={e=>{
                                props.setform({...props.form, [e.target.name]: e.target.value})
                                }}
                        />
                    </div>

                    <div className="form-item">
                        <label htmlFor="demo"> Github </label>
                        <input
                            className="form-input"
                            placeholder="Add a link to a github repo"
                            type="text"
                            name="code"
                            onChange={e=>{
                                props.setform({...props.form, [e.target.name]: e.target.value})
                                }}
                        />
                    </div>

                    <div className="form-item">
                        <label htmlFor="code-link"> Code </label>
                        <input
                            className="form-input"
                            placeholder="Add a link to a demo"
                            type="text"
                            name="demo"
                            onChange={e=>{
                                props.setform({...props.form, [e.target.name]: e.target.value})
                                }}
                        />
                    </div>



                    <button className="next-btn" type="submit"> Add Project</button>
                </form>
            </div>
        </>
    )
}

export default FormProjects;