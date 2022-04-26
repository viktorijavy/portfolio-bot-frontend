import PresentationHeader from "../components/Header/PresentationHeader"
import PresentationAbout from "../components/About/PresentationAbout"
import PresentationProjects from "../components/Projects/PresentationProjects"
import PresentationExperience from "../components/Experience/PresentationExperience"
import PresentationEducation from "../components/Education/PresentationEducation"
import PresentationContact from "../components/Contacts/PresentationContact"
import './Portfolio.css';

const Portfolio = () => {
    const LS = localStorage.getItem('userobject')
    const form = JSON.parse(LS)

    return (


        <div className="portfolio-box">

            <div className="portfolio">
                <div className="component-1">
                    <PresentationHeader form={form} />
                </div>

                <div className="component-1">
                    <PresentationAbout form={form} />
                </div>
                <div className="component-1">
                    <PresentationProjects form={form} />
                </div>
                <div className="component-1">
                    <PresentationExperience form={form} />
                </div>
                <div className="component-1">
                    <PresentationEducation form={form} />
                </div>
                <div className="component-1">
                    <PresentationContact form={form} />
                </div>
            </div>
        </div>
    )
}

export default Portfolio