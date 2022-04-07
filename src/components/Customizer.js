import './Customizer.css'
import FormBio from './FormBio'
import PresentationBio from './PresentationBio'
import { useState } from 'react';
import FormProjects from './FormProjects';
import PresentationProjects from './PresentationProjects';
import FormExperience from './FormExperience';
import PresentationExperience from './PresentationExperience';


const Customizer = () => {

    const [progress, setProgress] = useState(0)
    const [userObject, setuserObject] = useState({})

    //bio states
    const [name, setName] = useState('');
    const [occupation, setOccupation] = useState('');
    const [city, setCity] = useState('');
    const [about, setAbout] = useState('');

    //project states
    const [projectName, setProjectName] = useState('')
    const [projectDescription, setProjectDescription] = useState('')
    const [technologies, setTechnologies] = useState('')
    const [link1, setLink1] = useState('')
    const [link2, setLink2] = useState('')


    //experience states

    const [ role, setRole ] = useState('')
    const [ company, setCompany ] = useState('')
    const [ startDate, setStartDate ] = useState('')
    const [ endDate, setEndDate ] = useState('')
    const [ task1, setTask1 ] = useState('')
    const [ task2, setTask2 ] = useState('')
    const [ task3, setTask3 ] = useState('')

    

    //project-section state changes 
    const handleProjectNameChange = e => {
        setProjectName(e.target.value)
    }

    const handleProjectDescription = e => {
        setProjectDescription(e.target.value)
    }

    const handleTechnologiesChange = e => {
        setTechnologies(e.target.value)
    }

    const handleLink1Change = e => {
        setLink1(e.target.value)
    }

    const handleLink2Change = e => {
        setLink2(e.target.value)
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

    //experience state changes 

    const handleRoleChange = e => {
        setRole(e.target.value)
    }
    const handleCompanyChange = e => {
        setCompany(e.target.value)
    }

    const handleStartDateChange = e => {
        setStartDate(e.target.value)
    }

    const handleEndDateChange = e => {
        setEndDate(e.target.value)
    }

    const handleTask1Change = e => {
        setTask1(e.target.value)
    }

    const handleTask2Change = e => {
        setTask2(e.target.value)
    }

    const handleTask3Change = e => {
        setTask3(e.target.value)
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
                        link2={link2}
                    />
                    <FormProjects
                        handleProjectNameChange={handleProjectNameChange}
                        handleProjectDescription={handleProjectDescription}
                        increaseProgress={increaseProgress}
                        handleTechnologiesChange={handleTechnologiesChange}
                        handleLink1Change={handleLink1Change}
                        handleLink2Change={handleLink2Change}

                    />
                </>)}
                {progress === 2 && (<>
                    <PresentationExperience 
                         role={role}
                        company={company}
                        startDate={startDate}
                        endDate={endDate}
                        task1={task1} 
                        task2={task2}
                        task3={task3}
                    />
                    <FormExperience

                        handleRoleChange={handleRoleChange}
                        handleCompanyChange={handleCompanyChange}
                        handleStartDateChange={handleStartDateChange}
                        handleEndDateChange={handleEndDateChange}
                        handleTask1Change={handleTask1Change}
                        handleTask2Change={handleTask2Change}
                        handleTask3Change={handleTask3Change}
                      
                        />

                </>)}
                {progress === 3 && (<>
                    Step 3

                </>)}

               

            </div>


        </div>


    )
}

export default Customizer