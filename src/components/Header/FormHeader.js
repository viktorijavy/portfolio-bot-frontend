import './FormHeader.css';
import Button from '../Button';

const FormHeader = props => {
    return (
        <>
            {props.errors && (
                <div>
                    {Object.values(props.errors).map((error, index) => (
                        <div key={index}>{error}</div>
                    ))}
                </div>
            )}
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
                            value={props.form.name}
                            onChange={e => {
                                props.validateAndSetForm(e)
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
                            value={props.form.occupation}
                            onChange={e => {
                                props.validateAndSetForm(e)
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
                            value={props.form.city}
                            maxlength="25"
                            onChange={e => {
                                props.validateAndSetForm(e)
                            }}
                        />
                    </div>

                    <div className="form-item">
                        <label> About </label>
                        <textarea
                            className="form-input"
                            placeholder="Add something short about you"
                            type="text"
                            rows="7" 
                            maxlength="500"
                            name="about"
                            value={props.form.about}
                            onChange={e => {
                                props.validateAndSetForm(e)
                            }}

                        />
                    </div>
                    <Button disabled={Object.keys(props.errors).length > 0} type="submit">Next</Button>
                    
                </form>
            </div>
        </>
    )
}

export default FormHeader;