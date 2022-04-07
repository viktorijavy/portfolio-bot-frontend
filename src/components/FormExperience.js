const FormExperience = props => {


    return (
        <>
         <div className="form-container">
         
        <form 
        onSubmit={(e)=>{
            props.increaseProgress(e)
        }}
        className="form">
            <h2> Tell us about your last professional experience</h2>
            <div className="form-item">
                <label htmlFor="name">Role</label>
                <input
                    className="form-input"
                    placeholder="what was your position there?"
                    type="text"
                    name="role"
                    onChange={props.handleRoleChange}
                />
            </div>

            <div className="form-item">
                <label htmlFor="name">Company</label>
                <input
                    className="form-input"
                    placeholder="Add company's name"
                    type="text"
                    name="company"
                    onChange={props.handleCompanyChange}
                />
            </div>
         
            <div className="form-item">
                <label htmlFor="occupation"> Start date </label>
                <input
                    className="form-input"
                    placeholder="When did you start there?"
                    type="date"
                    name="startdate"
                    onChange={props.handleStartDateChange}
                />
            </div>

            <div className="form-item">
                <label htmlFor="city"> End date </label>
                <input
                    className="form-input"
                    placeholder="When did you finish?"
                    type="date"
                    name="enddate"
                    onChange={props.handleEndDateChange}
                />
            </div>


            <div className="form-item">
                <label className="tasks-label" htmlFor="name"> What were your 3 main tasks there?</label>
                <input
                    className="form-input"
                    placeholder="Task 1"
                    type="text"
                    name="task1"
                    onChange={props.handleTask1Change}
                />
            </div>

            <div className="form-item">
                
                <input
                    className="form-input"
                    placeholder="Task 2"
                    type="text"
                    name="task2"
                    onChange={props.handleTask2Change}
                />
            </div>

            <div className="form-item">
                
                <input
                    className="form-input"
                    placeholder="Task 3"
                    type="text"
                    name="company"
                    onChange={props.handleTask3Change}
                />
            </div>

            <button className="next-btn"  type="submit">Next</button>
        </form>
        </div>
        </>
    )
}

export default FormExperience;