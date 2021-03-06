import Button from "../Button";

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
                            required
                            name="role"
                            value={props.form.role}
                            onChange={e => {
                                props.validateAndSetForm(e)
                            }}
                        />
                    </div>

                    <div className="form-item">
                        <label htmlFor="name">Company</label>
                        <input
                            className="form-input"
                            placeholder="Add company's name"
                            type="text"
                            required
                            name="company"
                            value={props.form.company}
                            onChange={e => {
                                props.validateAndSetForm(e)
                            }}
                        />
                    </div>

                    <div className="form-item">
                        <label htmlFor="occupation"> Start date </label>
                        <input
                            className="form-input"
                            placeholder="When did you start there?"
                            type="date"
                            required
                            name="startdate"
                            value={props.form.startdate}
                            onChange={e => {
                                props.validateAndSetForm(e)
                            }}
                        />
                    </div>

                    <div className="form-item">
                        <label htmlFor="city"> End date </label>
                        <input
                            className="form-input"
                            placeholder="When did you finish?"
                            type="date"
                            required
                            name="enddate"
                            value={props.form.enddate}
                            onChange={e => {
                                props.validateAndSetForm(e)
                            }}
                        />
                    </div>


                    <div className="form-item">
                        <label className="tasks-label" htmlFor="name"> What were your 3 main tasks there?</label>
                        <input
                            className="form-input"
                            placeholder="Task 1"
                            type="text"
                            required
                            name="task1"
                            value={props.form.task1}
                            onChange={e => {
                                props.validateAndSetForm(e)
                            }}
                        />
                    </div>

                    <div className="form-item">

                        <input
                            className="form-input"
                            placeholder="Task 2"
                            type="text"
                            required
                            name="task2"
                            value={props.form.task2}
                            onChange={e => {
                                props.validateAndSetForm(e)
                            }}
                        />
                    </div>

                    <div className="form-item">

                        <input
                            className="form-input"
                            placeholder="Task 3"
                            type="text"
                            required
                            name="task3"
                            value={props.form.task3}
                            onChange={e => {
                                props.validateAndSetForm(e)
                            }}
                        />
                    </div>

                    <div className="form-item">

                        <input
                            className="form-input"
                            placeholder="Task 4"
                            type="text"
                            name="task4"
                            value={props.form.task4}
                            onChange={e => {
                                props.validateAndSetForm(e)
                            }}
                        />
                    </div>
                    <Button type="submit"> Next</Button>
                    
                </form>
            </div>
        </>
    )
}

export default FormExperience;