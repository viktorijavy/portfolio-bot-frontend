import Button from "../Button";

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
                            placeholder="What did you study?"
                            type="text"
                            name="degree1"
                            value={props.form.degree1}
                            onChange={e => {
                                props.validateAndSetForm(e)
                            }}
                        />
                    </div>

                    <div className="form-item">
                        <label htmlFor="institutionname"> Institution name</label>
                        <input
                            className="form-input"
                            placeholder="Institution name"
                            type="text"
                            name="institution1"
                            value={props.form.institution1}

                            onChange={e => {
                                props.validateAndSetForm(e)
                            }}
                        />
                    </div>

                    <div className="form-item-flex">

                        <div className="form-item">
                            <label htmlFor="occupation"> Start date </label>
                            <input
                                className="form-input input-date"
                                placeholder="When did you start there?"
                                type="date"
                                name="edstartdate1"
                                value={props.form.edstartdate1}
                                onChange={e => {
                                    props.validateAndSetForm(e)
                                }} />
                        </div>

                        <div className="form-item">
                            <label htmlFor="city"> End date </label>
                            <input
                                className="form-input input-date"
                                placeholder="When did you finish?"
                                type="date"
                                name="edenddate1"
                                value={props.form.edenddate1}
                                onChange={e => {
                                    props.validateAndSetForm(e)
                                }}
                            />
                        </div>
                    </div>

                    <div className="form-item">
                        <label> Description </label>
                        <textarea
                            className="form-input"
                            placeholder="What skills did you learn there"
                            type="text"
                            rows="3" 
                            maxLength="130"
                            name="eddescription1"
                            value={props.form.eddescription1}
                            onChange={e => {
                                props.validateAndSetForm(e)
                            }}

                        />
                    </div>

                    <div className="form-item">
                        <label htmlFor="degree"> Degree/Subject </label>
                        <input
                            className="form-input"
                            placeholder="What did you study there?"
                            type="text"
                            name="degree2"
                            value={props.form.degree2}
                            onChange={e => {
                                props.validateAndSetForm(e)
                            }}
                        />
                    </div>

                    <div className="form-item">
                        <label htmlFor="institutionname"> Institution name</label>
                        <input
                            className="form-input"
                            placeholder="Institution name"
                            type="text"
                            name="institution2"
                            value={props.form.institution2}
                            onChange={e => {
                                props.validateAndSetForm(e)
                            }}
                        />
                    </div>

                   <div className="form-item-flex">

                    <div className="form-item">
                        <label htmlFor="occupation"> Start date </label>
                        <input
                            className="form-input input-date"
                            placeholder="When did you start there?"
                            type="date"
                            name="edstartdate2"
                            value={props.form.edstartdate2}
                            onChange={e => {
                                props.validateAndSetForm(e)
                            }}
                        />
                    </div>

                    <div className="form-item">
                        <label htmlFor="city"> End date </label>
                        <input
                            className="form-input input-date"
                            placeholder="When did you finish?"
                            type="date"
                            name="edenddate2"
                            value={props.form.edenddate2}
                            onChange={e => {
                                props.validateAndSetForm(e)
                            }}
                        />
                    </div>

                    </div>

                    <div className="form-item">
                        <label> Description </label>
                        <textarea
                            className="form-input"
                            placeholder="What skills did you learn there"
                            type="text"
                            rows="3" 
                            maxLength="130"
                            name="eddescription2"
                            value={props.form.eddescription2}
                            onChange={e => {
                                props.validateAndSetForm(e)
                            }}

                        />
                    </div>

                   <Button type="submit"> Next </Button>
                </form>
            </div>
        </>
    )
}

export default FormEducation;


