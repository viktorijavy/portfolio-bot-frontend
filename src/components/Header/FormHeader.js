
import './FormHeader.css';

const FormHeader = props => {

 
    return (
        <>

            <div className="form-container">

                <form
                    onSubmit={(e) => {
                        props.increaseProgress(e)
                    }}
                    className="form">

                    <h2> Design your header </h2>

                    <div className="form-item">
                        <label htmlFor="name"> Your name</label>
                        <input
                            className="form-input"
                            placeholder="Your name"
                            type="text"
                            name="name"
                            onChange={e => {
                                props.setform({ ...props.form, [e.target.name]: e.target.value })
                            }}

                        />
                    </div>


                    <div className="form-item">
                        <label htmlFor="occupation"> Your (desired) occupation</label>
                        <input
                            className="form-input"
                            placeholder="Your occupation"
                            type="text"
                            name="occupation"
                            minlength="10"
                            maxlength="50"
                            onChange={e => {
                                props.setform({ ...props.form, [e.target.name]: e.target.value })
                            }}

                        />
                    </div>

                    <div className="form-item">
                        <label htmlFor="city"> Your city </label>
                        <input
                            className="form-input"
                            placeholder="City"
                            type="text"
                            name="city"
                            maxlength="25"
                            onChange={e => {
                                props.setform({ ...props.form, [e.target.name]: e.target.value })
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
                            maxlength="500"
                            name="about"
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

export default FormHeader;