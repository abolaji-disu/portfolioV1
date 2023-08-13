import Container from "../components/scripts/container";
import Header from "../components/scripts/header";
import DownloadIcon from "../assets/SVGs/download button.svg";
import "./resume.scss";
import Footer from "../components/scripts/footer";
import ExperienceCard from "../components/scripts/experienceCard";

const Resume = () => {
    return (
        <Container>
            <Header />
            <div className="resume-header">
                <h1>Resùme</h1>
                <img src={DownloadIcon} alt="download-icon" />
            </div>

            <div className="resume-container">

                <div className="experience-section">
                    <h1>WORK EXPERIENCE</h1>
                    <ExperienceCard />
                </div>

                <div className="tools-section">
                      <h1>TOOLS</h1>
                </div>

                <Footer />
            </div>
        </Container>
    )
}


export default Resume;