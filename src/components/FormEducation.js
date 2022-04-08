
const FormEducation = props => {

    return (
        <>
            <div className="form-container">

                <form

                    className="form"
                    onSubmit={(e) => {
                        props.increaseProgress(e)
                    }}>

                    <h2> Tell us about your education</h2>

                    <div className="form-item">
                        <label htmlFor="degree"> Degree/Subject </label>
                        <input
                            className="form-input"
                            placeholder="What did you study there?"
                            type="text"
                            name="degree1"
                            onChange={props.handleDegree1Change}
                        />
                    </div>

                    <div className="form-item">
                        <label htmlFor="institutionname"> Institution name</label>
                        <input
                            className="form-input"
                            placeholder="Institution name"
                            type="text"
                            name="institutionname1"

                            onChange={props.handleInstitution1Change}
                        />
                    </div>

                    <div className="form-item">
                        <label htmlFor="occupation"> Start date </label>
                        <input
                            className="form-input"
                            placeholder="When did you start there?"
                            type="date"
                            name="edstartdate1"
                            onChange={props.handleEdStartDate1Change}
                        />
                    </div>

                    <div className="form-item">
                        <label htmlFor="city"> End date </label>
                        <input
                            className="form-input"
                            placeholder="When did you finish?"
                            type="date"
                            name="edenddate1"
                            onChange={props.handleEdEndDate1Change}
                        />
                    </div>

                    <div className="form-item">
                        <label htmlFor="degree"> Degree/Subject </label>
                        <input
                            className="form-input"
                            placeholder="What did you study there?"
                            type="text"
                            name="degree2"
                            onChange={props.handleDegree2Change}
                        />
                    </div>

                    <div className="form-item">
                        <label htmlFor="institutionname"> Institution name</label>
                        <input
                            className="form-input"
                            placeholder="Institution name"
                            type="text"
                            name="institutionname2"

                            onChange={props.handleInstitution2Change}
                        />
                    </div>

                    <div className="form-item">
                        <label htmlFor="occupation"> Start date </label>
                        <input
                            className="form-input"
                            placeholder="When did you start there?"
                            type="date"
                            name="edstartdate2"
                            onChange={props.handleEdStartDate2Change}
                        />
                    </div>

                    <div className="form-item">
                        <label htmlFor="city"> End date </label>
                        <input
                            className="form-input"
                            placeholder="When did you finish?"
                            type="date"
                            name="edenddate2"
                            onChange={props.handleEdEndDate2Change}
                        />
                    </div>

                    <button className="next-btn" type="submit">Next</button>
                </form>
            </div>
        </>
    )
}

export default FormEducation;


