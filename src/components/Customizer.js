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
import initialForm from '../initialForm.json';


//TODO before setform run validationhandler with abstracted setform method
//TODO make projects, education nestable to have multiple
//TODO print into html
//TODO make multiple designs applicable

const Customizer = () => {

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
        setuserObject(newUserObject) // put new  big userobject in state
        setProgress(progress + 1)
        if (progress === 6) {
            fetch('http://localhost:4000/generate', {
                method: "POST",
                headers: {
                    'content-type': "application/json"
                },
                body: JSON.stringify(newUserObject)
            })
        }
    }

    console.log(userObject);

    const isValidGithubRepo = (url) => {
        return "" === url || (url.startsWith("https://github.com/") || url.startsWith("http://github.com/"))

    }

    const isValidUrl = (url) => {
        return url.startsWith("https://") || url.startsWith("http://")

    }

    const isValidLinkedinUrl = (url) => {
        return /^(http(s)?:\/\/)?([\w]+\.)?linkedin\.com\/(pub|in|profile)/gm.test(url);
    };
    const isValidGitHubUrl = (url) => {
        return /^(http(s)?:\/\/)?([\w]+\.)?github\.com\//gm.test(url);
    };

    const validateAndSetForm = e => { //This runs on ALL onchange handlers. You get the event where the target and the name
        if (e.target.name === 'code') {

            if (isValidGithubRepo(e.target.value) === false) {
                e.target.style.border = "1px solid red"
                seterrors({ ...errors, code: "Should be valid url" })
            } else {
                e.target.style.border = "0 none"
                const errrorClone = { ...errors } //pure programming => never touch the original object
                delete errrorClone.code
                seterrors(errrorClone)
            }

        }

        if (e.target.value === 'demo') {
            if (isValidUrl(e.target.value) === false) {
                e.target.style.border = "1px solid red"
                seterrors({ ...errors, code: "Should be valid url" })
            } else {
                e.target.style.border = "0 none"
                const errrorClone = { ...errors } 
                delete errrorClone.demo
                seterrors(errrorClone)
            }

        }

        if (e.target.name === 'linkedin') {
            if (isValidLinkedinUrl(e.target.value) === false) {
                e.target.style.border = "1px solid red"
                seterrors({ ...errors, linkedin: "Should be a valid linkedin url" })
            } else {
                e.target.style.border = "0 none"
                const errrorClone = { ...errors } 
                delete errrorClone.linkedin
                seterrors(errrorClone)
            }

        }

        if (e.target.name === 'github') {
            if (isValidGitHubUrl(e.target.value) === false) {
                e.target.style.border = "1px solid red"
                seterrors({ ...errors, github: "Should be a valid github url" })
            } else {
                e.target.style.border = "0 none"
                const errrorClone = { ...errors } 
                delete errrorClone.github
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
                        setform={setform}
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
                        errors={errors}
                        setform={setform}
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
                        errors={errors}
                        validateAndSetForm={validateAndSetForm}
                        increaseProgress={increaseProgress}

                    />

                </>)}


            </div>


        </div>


    )
}

export default Customizer;