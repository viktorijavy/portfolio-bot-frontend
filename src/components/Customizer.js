import './Customizer.css'
import FormHeader from './Header/FormHeader'
import PresentationHeader from './Header/PresentationHeader'
import { useState } from 'react';
import FormProjects from './Projects/FormProjects';
import PresentationProjects from './Projects/PresentationProjects';
import FormExperience from './Experience/FormExperience';
import PresentationExperience from './Experience/PresentationExperience';
import FormEducation from './Education/FormEducation';
import PresentationEducation from './Education/PresentationEducation';
import FormContact from './Contacts/FormContact';
import PresentationContact from './Contacts/PresentationContact';
import PresentationAbout from './About/PresentationAbout';
import FormAbout from './About/FormAbout';

//TODO add value={props.form.occupation} to all form fields to make them to a controlled component
//TODO before setform run validationhandler with abstracted setform method
//TODO make projects, education nestable to have multiple
//TODO print into html
//TODO make multiple designs applicable

const Customizer = () => {
    const initialForm = {
        name: "Maria Musterfrau",
        occupation: "Frontend developer"
    }
    const [progress, setProgress] = useState(0)
    const [form, setform] = useState(initialForm)
    const [errors, seterrors] = useState({})
    const [userObject, setuserObject] = useState({})


    const increaseProgress = (e) => {

        e.preventDefault()
        let currentPayload = {}  //create empty object for accumulation of new form data
        Array.from(e.target.elements).map(i => currentPayload[i.name] = i.value)  // get new form entries from form and put it int that object {name: "heyr", age: 15 ...}
        localStorage.setItem('progress', progress + 1) // set the current index to the LS, so we can later start directly in level 5
        const newUserObject = { ...userObject, ...currentPayload }  // temp object of the desconstructed new accumulated object what we put ...
        localStorage.setItem("userobject", JSON.stringify(newUserObject)) // ... the LS as a string
        if (progress === 5) {
            fetch('http://localhost:4000/generate', {
                method: "POST",
                headers: {
                    'content-type': "application/json"
                },
                body: JSON.stringify(newUserObject)
            })
        }
        setuserObject(newUserObject) // put new  big userobject in state
        setProgress(progress + 1)
    }
    const validateAndSetForm = e => { //This runs on ALL onchange handlers. You get the event where the target and the name
        if (e.target.name === 'occupation') {
            if (e.target.value.length < 4) {
                e.target.style.border = "1px solid red"
                seterrors({ ...errors, occupation: "The occupation should be longer than 2 letters" })
            } else {
                e.target.style.border = "0 none"
                const errrorClone = {...errors} //pure programming => never touch the original object
                delete errrorClone.occupation
                seterrors(errrorClone)
            }
        }

        setform({ ...form, [e.target.name]: e.target.value })
    }

    return (
        <div className="main-container-flex">
            
            <div className="customizer-container">
                {progress === 0 && (<>
                    <PresentationHeader
                        form={form}
                    />

                    <FormHeader
                        form={form}
                        errors={errors}
                        validateAndSetForm={validateAndSetForm}
                        increaseProgress={increaseProgress}
                    />
                </>)}

                {progress === 1 && (<>
                    <PresentationAbout
                        form={form}
                    />

                    <FormAbout
                        form={form}
                        validateAndSetForm={validateAndSetForm}
                        increaseProgress={increaseProgress}
                    />
                </>)}

                {progress === 2 && (<>
                    <PresentationProjects
                        form={form}
                    />
                    <FormProjects
                        form={form}
                        validateAndSetForm={validateAndSetForm}
                        increaseProgress={increaseProgress}

                    />
                </>)}
                {progress === 3 && (<>
                    <PresentationExperience
                        form={form}

                    />
                    <FormExperience
                        form={form}
                        validateAndSetForm={validateAndSetForm}
                        increaseProgress={increaseProgress}

                    />

                </>)}

                {progress === 4 && (<>

                    <PresentationEducation
                        form={form}
                    />

                    <FormEducation
                        form={form}
                        validateAndSetForm={validateAndSetForm}
                        increaseProgress={increaseProgress}

                    />

                </>)}

                {progress === 5 && (<>

                    <PresentationContact
                        form={form}
                    />

                    <FormContact
                        form={form}
                        validateAndSetForm={validateAndSetForm}
                        increaseProgress={increaseProgress}

                    />

                </>)}


            </div>


        </div>


    )
}

export default Customizer