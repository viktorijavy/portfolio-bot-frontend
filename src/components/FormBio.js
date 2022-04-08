
import './FormBio.css';

const FormBio = props => {


    return (
        <>
        
        <div className="form-container">
        
            <form 
            onSubmit={(e)=>{
                props.increaseProgress(e)
            }}
            className="form">
            
                <div className="form-item">
                    <label htmlFor="name"> Your name</label>
                    <input
                        className="form-input"
                        placeholder="Your name"
                        type="text"
                        name="name"
                        
                        onChange={props.handleNameChange}
                    />
                </div>

                <div className="form-item">
                    <label htmlFor="name"> Picture</label>
                    <input
                        className="form-input"
                        placeholder="Your name"
                        type="file"
                        name="picture"
                      
                        onChange={props.handleNameChange}
                    />
                </div>
             
                <div className="form-item">
                    <label htmlFor="occupation"> Your (desired) occupation</label>
                    <input
                        className="form-input"
                        placeholder="Your occupation"
                        type="text"
                        name="occupation"
                        
                        onChange={props.handleOccupationChange}
                    />
                </div>

                <div className="form-item">
                    <label htmlFor="city"> Your city </label>
                    <input
                        className="form-input"
                        placeholder="City"
                        type="text"
                        name="city"
                        onChange={props.handleCityChange}
                    />
                </div>

                <div className="form-item">
                <label> About </label>
                    <textarea
                        className="form-input"
                        placeholder="Add something about you"
                        type="text"
                        name="about"
                        
                        onChange={props.handleAboutChange}
                    />
                </div>

                <button className="next-btn"  type="submit">Next</button>
            </form>
            </div>
        </>
    )
}

export default FormBio