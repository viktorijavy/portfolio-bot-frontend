import './Customizer.css'
import FormBio from './FormBio'
import PresentationBio from './PresentationBio'
import { useState } from 'react';
import FormProjects from './FormProjects';
import PresentationProjects from './PresentationProjects';


const Customizer = () => {

    const [progress, setProgress] = useState(0)

    const [name, setName] = useState('');
    const [occupation, setOccupation] = useState('');
    const [city, setCity] = useState('');
    const [about, setAbout] = useState('');


    const [projectName, setProjectName] = useState('')
    const [projectDescription, setProjectDescription] = useState('')
    const [technologies, setTechnologies] = useState('')
    const [link1, setLink1] = useState('')
    const [link2, setLink2] = useState('')
    const [userObject, setuserObject] = useState({})

    //project-section state changes 
    const handleProjectNameChange = e => {
        setProjectName(e.target.value)
    }

    const handleProjectDescription = e => {
        setProjectDescription(e.target.value)
    }


    //bio-section state changes
    const handleNameChange = e => {
        setName(e.target.value)

    }

    const handleOccupationChange = e => {
        setOccupation(e.target.value)

    }

    const handleCityChange = e => {
        setCity(e.target.value)
    }

    const handleAboutChange = e => {
        setAbout(e.target.value)
    }

    //TODOS
    //TODO navigation state stars with 0
    //TODO on click increase navaigation state ++
    //TODO conditional rendering with navigation index
    //TODO persist current index in localStorage
    //TODO after reload, go to index of localStorage
    const increaseProgress = (e) => {
        e.preventDefault()
        let currentPayload = {}  //create empty object for accumulation of new form data
        Array.from(e.target.elements).map(i => currentPayload[i.name] = i.value)  // get new form entries from form and put it int that object {name: "heyr", age: 15 ...}
        console.log(currentPayload);
        localStorage.setItem('progress', progress + 1) // set the current index to the LS, so we can later start directly in level 5
        const newUserObject = { ...userObject, ...currentPayload }  // temp object of the desconstructed new accumulated object what we put ...
        localStorage.setItem("userobject", JSON.stringify(newUserObject)) // ... the LS as a string

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
                        name={name}
                        occupation={occupation}
                        city={city}
                        about={about}
                    />

                    <FormBio
                        handleNameChange={handleNameChange}
                        handleOccupationChange={handleOccupationChange}
                        handleCityChange={handleCityChange}
                        handleAboutChange={handleAboutChange}
                        increaseProgress={increaseProgress}
                    />
                </>)}

                {progress === 1 && (<>
                    <PresentationProjects
                        name={projectName}
                        description={projectDescription}
                        technologies={technologies}
                        link1={link1}
                    />
                    <FormProjects
                        handleProjectNameChange={handleProjectNameChange}
                        handleProjectDescription={handleProjectDescription}
                        increaseProgress={increaseProgress}
                    />
                </>)}
                {progress === 2 && (<>
                    Step 2

                </>)}
                {progress === 3 && (<>
                    Step 3

                </>)}

                {/* <PresentationProjects 
                name={projectName}
                description={projectDescription} 
                technologies={technologies}
                link1={link1}   
                />
                <FormProjects 
                handleProjectNameChange={handleProjectNameChange}
                handleProjectDescription={handleProjectDescription}    
                /> */}

            </div>


        </div>


    )
}

export default Customizer