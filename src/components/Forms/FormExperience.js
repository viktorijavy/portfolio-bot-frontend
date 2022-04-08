const FormExperience = props => {


    return (
        <>
            <div className="form-container">

                <form
                    className="form"
                    onSubmit={(e) => {
                        props.increaseProgress(e)
                    }}
                >

                    <h2> Tell us about your last professional experience</h2>
                    <div className="form-item">
                        <label htmlFor="name">Role</label>
                        <input
                            className="form-input"
                            placeholder="what was your position there?"
                            type="text"
                            name="role"
                            onChange={e => {
                                props.setform({ ...props.form, [e.target.name]: e.target.value })
                            }}
                        />
                    </div>

                    <div className="form-item">
                        <label htmlFor="name">Company</label>
                        <input
                            className="form-input"
                            placeholder="Add company's name"
                            type="text"
                            name="company"
                            onChange={e => {
                                props.setform({ ...props.form, [e.target.name]: e.target.value })
                            }}
                        />
                    </div>

                    <div className="form-item">
                        <label htmlFor="occupation"> Start date </label>
                        <input
                            className="form-input"
                            placeholder="When did you start there?"
                            type="date"
                            name="startdate"
                            onChange={e => {
                                props.setform({ ...props.form, [e.target.name]: e.target.value })
                            }}
                        />
                    </div>

                    <div className="form-item">
                        <label htmlFor="city"> End date </label>
                        <input
                            className="form-input"
                            placeholder="When did you finish?"
                            type="date"
                            name="enddate"
                            onChange={e => {
                                props.setform({ ...props.form, [e.target.name]: e.target.value })
                            }}
                        />
                    </div>


                    <div className="form-item">
                        <label className="tasks-label" htmlFor="name"> What were your 3 main tasks there?</label>
                        <input
                            className="form-input"
                            placeholder="Task 1"
                            type="text"
                            name="task1"
                            onChange={e => {
                                props.setform({ ...props.form, [e.target.name]: e.target.value })
                            }}
                        />
                    </div>

                    <div className="form-item">

                        <input
                            className="form-input"
                            placeholder="Task 2"
                            type="text"
                            name="task2"
                            onChange={e => {
                                props.setform({ ...props.form, [e.target.name]: e.target.value })
                            }}
                        />
                    </div>

                    <div className="form-item">

                        <input
                            className="form-input"
                            placeholder="Task 3"
                            type="text"
                            name="task3"
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

export default FormExperience;