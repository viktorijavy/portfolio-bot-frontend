import './Customizer.css'
import FormBio from './FormBio'
import PresentationBio from './PresentationBio'
import { useState } from 'react';
import FormProjects from './FormProjects';
import PresentationProjects from './PresentationProjects';


const Customizer = () => {

    const [name, setName] = useState('');
    const [occupation, setOccupation] = useState('');
    const [city, setCity] = useState('');
    const [about, setAbout] = useState('');


    const [ projectName, setProjectName ] = useState('')
    const [ projectDescription, setProjectDescription] = useState('')
    const [ technologies, setTechnologies ] = useState('')
    const [ link1, setLink1 ] = useState('')
    const [ link2, setLink2 ] = useState('')

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
    

    return (
        <div className="main-container-flex">

            <div className="customizer-container">

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
                />

                
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