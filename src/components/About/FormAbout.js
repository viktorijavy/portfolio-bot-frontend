
const FormAbout = props => {

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
                    onSubmit={(e) => {
                        props.increaseProgress(e)
                    }}
                    className="form">

                    <h2>Add some information about yourself</h2>

                    <div className="form-item">
                        <label htmlFor="name"> Picture of you</label>
                        <input
                            className="form-input"
                            placeholder="Your name"
                            type="file"
                            name="picture"
                            onChange={e => { 
                                getBase64(e.target.files[0], e)
                            }}

                        />
                    </div>

                  
                    <div className="form-item">
                        <label> About </label>
                        <textarea
                            className="form-input"
                            placeholder="Add something about you"
                            type="text"
                            rows="7" 
                            // cols="5"
                            name="description"
                            onChange={e => {
                                props.setform({ ...props.form, [e.target.name]: e.target.value })
                            }}

                        />
                    </div>

                    <button className="next-btn" type="submit">Next</button>
                </form>
            </div>
        </>
    )
}

export default FormAbout;