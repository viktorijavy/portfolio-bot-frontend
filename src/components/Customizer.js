import './Customizer.css'
import FormBio from './Bio/FormBio'
import PresentationBio from './Bio/PresentationBio'
import { useState } from 'react';
import FormProjects from './Projects/FormProjects';
import PresentationProjects from './Projects/PresentationProjects';
import FormExperience from './Experience/FormExperience';
import PresentationExperience from './Experience/PresentationExperience';
import FormEducation from './Education/FormEducation';
import PresentationEducation from './Education/PresentationEducation';
import FormContact from './Contacts/FormContact';
import PresentationContact from './Contacts/PresentationContact';



const Customizer = () => {

    const [progress, setProgress] = useState(0)
    const [form, setform] = useState({})
    const [userObject, setuserObject] = useState({})


    const increaseProgress = (e) => {

        e.preventDefault()
        let currentPayload = {}  //create empty object for accumulation of new form data
        Array.from(e.target.elements).map(i => currentPayload[i.name] = i.value)  // get new form entries from form and put it int that object {name: "heyr", age: 15 ...}
        console.log(currentPayload);
        localStorage.setItem('progress', progress + 1) // set the current index to the LS, so we can later start directly in level 5
        const newUserObject = { ...userObject, ...currentPayload }  // temp object of the desconstructed new accumulated object what we put ...
        localStorage.setItem("userobject", JSON.stringify(newUserObject)) // ... the LS as a string
        if (progress === 4) {
            fetch('http://localhost:4000', {
                method: "POST",
                headers: {
                    'content-type': "application/json"
                },
                body:
                    JSON.stringify(newUserObject)

            })
        }
        setuserObject(newUserObject) // put new  big userobject in state
        console.log(userObject)
        setProgress(progress + 1)
    }

    console.log(userObject);


    return (
        <div className="main-container-flex">

            <div className="customizer-container">
                {progress === 0 && (<>
                    <PresentationBio
                        form={form}
                    />

                    <FormBio
                        form={form}
                        setform={setform}
                        increaseProgress={increaseProgress}
                    />
                </>)}

                {progress === 1 && (<>
                    <PresentationProjects
                        form={form}
                    />
                    <FormProjects
                        form={form}
                        setform={setform}
                        increaseProgress={increaseProgress}

                    />
                </>)}
                {progress === 2 && (<>
                    <PresentationExperience
                        form={form}

                    />
                    <FormExperience
                        form={form}
                        setform={setform}
                        increaseProgress={increaseProgress}

                    />

                </>)}

                {progress === 3 && (<>

                    <PresentationEducation
                        form={form}
                    />

                    <FormEducation
                        form={form}
                        setform={setform}
                        increaseProgress={increaseProgress}

                    />

                </>)}

                {progress === 4 && (<>

                    <PresentationContact
                        form={form}
                    />

                    <FormContact
                        form={form}
                        setform={setform}
                        increaseProgress={increaseProgress}

                    />

                </>)}


            </div>


        </div>


    )
}

export default Customizer