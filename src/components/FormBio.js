
import './FormBio.css';

const FormBio = props => {

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
                    <label htmlFor="name"> Your name</label>
                    <input
                        className="form-input"
                        placeholder="Your name"
                        type="text"
                        // value={props.name}
                        onChange={props.handleNameChange}
                    />
                </div>

                <div className="form-item">
                    <label htmlFor="name"> Picture</label>
                    <input
                        className="form-input"
                        placeholder="Your name"
                        type="file"
                        // value={props.name}
                        onChange={props.handleNameChange}
                    />
                </div>
             
                <div className="form-item">
                    <label htmlFor="occupation"> Your (desired) occupation</label>
                    <input
                        className="form-input"
                        placeholder="Your occupation"
                        type="text"
                        // value={props.occupation}
                        onChange={props.handleOccupationChange}
                    />
                </div>

                <div className="form-item">
                    <label htmlFor="city"> Your city </label>
                    <input
                        className="form-input"
                        placeholder="City"
                        type="text"
                        onChange={props.handleCityChange}
                    />
                </div>

                <div className="form-item">
                <label> About </label>
                    <textarea
                        className="form-input"
                        placeholder="Add something about you"
                        type="text"
                        // value={props.about}
                        onChange={props.handleAboutChange}
                    />
                </div>

                <button className="next-btn" type="submit">Next</button>
            </form>
            </div>
        </>
    )
}

export default FormBio