import PresentationHeader from "../components/Header/PresentationHeader"
import PresentationAbout from "../components/About/PresentationAbout"
import PresentationProjects from "../components/Projects/PresentationProjects"

const Portfolio = props => {
    const LS = localStorage.getItem('userobject')
    const form = JSON.parse(LS)
    return (
        <>
            <PresentationHeader form={form} />
            <PresentationAbout form={form} />
            <PresentationProjects form={form} />
        </>
    )
}

export default Portfolio