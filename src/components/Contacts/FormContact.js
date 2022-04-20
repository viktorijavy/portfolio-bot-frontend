import Button from "../Button";
import { Link } from 'react-router-dom';

const FormContact = props => {
    return (
        <>
            <div className="form-container">

                <form
                    onSubmit={(e) => {
                        props.increaseProgress(e)
                    }}
                    className="form">

                    <h2> Contact information</h2>

                    <div className="form-item">
                        <label htmlFor="name"> Title</label>
                        <input
                            className="form-input"
                            placeholder="for example... 'Interested in working together?' "
                            type="text"
                            name="contacttitle"
                            value={props.form.contacttitle}
                            onChange={e => {
                                props.validateAndSetForm(e)
                            }}

                        />
                    </div>

                    <div className="form-item">
                        <label htmlFor="email"> Email</label>
                        <input
                            className="form-input"
                            placeholder="Add your email address"
                            type="email"
                            name="email"
                            value={props.form.email}
                            onChange={e => { 
                                props.validateAndSetForm(e)
                            }}

                        />
                    </div>

                    <div className="form-item">
                        <label htmlFor="github"> Github account</label>
                        <input
                            className="form-input"
                            placeholder="Share your github account"
                            type="text"
                            name="github"
                            value={props.form.github}
                            onChange={e => {
                                props.validateAndSetForm(e)
                            }}

                        />
                    </div>

                    <div className="form-item">
                        <label htmlFor="linkedin"> LinkedIn account </label>
                        <input
                            className="form-input"
                            placeholder="Share your linkedin account"
                            type="text"
                            name="linkedin"
                            value={props.form.linkedin}
                            onChange={e => {
                                props.validateAndSetForm(e)
                            }}
                        />
                    </div>

                    <div className="form-item">
                        <label htmlFor="twitter"> Twitter account </label>
                        <input
                            className="form-input"
                            placeholder="Share another account"
                            type="text"
                            name="twitter"
                            value={props.form.twitter}
                            onChange={e => {
                                props.validateAndSetForm(e)
                            }}
                        />
                    </div>

                    <div className="form-item">
                        <label> Anything else you would like to add? </label>
                        <textarea
                            className="form-input"
                            placeholder="Add anything here"
                            type="text"
                            rows="7" 
                            
                            name="anything"
                            value={props.form.anything}
                            onChange={e => {
                                props.validateAndSetForm(e)
                            }}

                        />
                    </div>

                 <Link to="/portfolio"><Button disabled={Object.keys(props.errors).length > 0} type="submit"> Submit </Button> </Link> 

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

export default FormContact;