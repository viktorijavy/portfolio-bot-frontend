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

            <div className="relative">
                <div className="component-1">
                    <PresentationHeader form={form} />
                </div>

                <div className="component-2">
                    <PresentationAbout form={form} />
                </div>
                <div className="component-3">
                    <PresentationProjects form={form} />
                </div>
                <div className="component-4">
                    <PresentationExperience form={form} />
                </div>
                <div className="component-5">
                    <PresentationEducation form={form} />
                </div>
                <div className="component-6">
                    <PresentationContact form={form} />
                </div>
            </div>
        </div>
    )
}

export default Portfolio