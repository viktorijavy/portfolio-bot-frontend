import Button from "../Button";


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
                            onChange={e => {
                                props.setform({ ...props.form, [e.target.name]: e.target.value })
                            }}

                        />
                    </div>

                    <div className="form-item">
                        <label htmlFor="email"> Email</label>
                        <input
                            className="form-input"
                            placeholder="Add your email address"
                            type="text"
                            name="email"
                            onChange={e => { 
                                props.setform({ ...props.form, [e.target.name]: e.target.value })
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
                            onChange={e => {
                                props.setform({ ...props.form, [e.target.name]: e.target.value })
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
                            onChange={e => {
                                props.setform({ ...props.form, [e.target.name]: e.target.value })
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
                            onChange={e => {
                                props.setform({ ...props.form, [e.target.name]: e.target.value })
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
                            onChange={e => {
                                props.setform({ ...props.form, [e.target.name]: e.target.value })
                            }}

                        />
                    </div>

                   <Button type="submit"> Submit </Button>
                </form>
            </div>
        </>
    ) 
}

export default FormContact;