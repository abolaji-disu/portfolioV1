import Container from "../components/scripts/container";
import Header from "../components/scripts/header";
import DownloadIcon from "../assets/SVGs/download button.svg";
import "./resume.scss";
import Footer from "../components/scripts/footer";
import ExperienceCard from "../components/scripts/experienceCard";
import BottomNav from "../components/scripts/pageNav";

const Resume = () => {

    const styles = {
        marginTop: "5rem"
    }


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
                    <ExperienceCard 
                    companyName={"Company Name"} 
                    title={"title"}
                    date={"date"}
                    workAchievemwnt={"Rorem ipsum dolor sit amet,\
                     consectetur adipiscing elit.\
                     Nunc vulputate libero et velit interdum, \
                     ac aliquet odio mattis."}
                    />
                      <ExperienceCard 
                    companyName={"Company Name"} 
                    title={"title"}
                    date={"date"}
                    workAchievemwnt={"Rorem ipsum dolor sit amet,\
                     consectetur adipiscing elit.\
                     Nunc vulputate libero et velit interdum, \
                     ac aliquet odio mattis."}
                    />
                      <ExperienceCard 
                    companyName={"Company Name"} 
                    title={"title"}
                    date={"date"}
                    workAchievemwnt={"Rorem ipsum dolor sit amet,\
                     consectetur adipiscing elit.\
                     Nunc vulputate libero et velit interdum, \
                     ac aliquet odio mattis."}
                    />
                    
                    <h1>EDUCATION</h1>
                      <ExperienceCard 
                    companyName={"Company Name"} 
                    title={"title"}
                    date={"date"}
                    workAchievemwnt={"Lagos state university"}
                    />

                      <ExperienceCard 
                    companyName={"Company Name"} 
                    title={"title"}
                    date={"date"}
                    workAchievemwnt={"Semicolon Africa"}
                    />
                </div>

                <div className="tools-section">
                      <h1>SKILLS</h1>
                      
                      <ul>
                        <b>Dev Stack</b>
                        <li>Java</li>
                        <li>Spring Boot</li>
                        <li>React</li>
                        <li>Javascript & Typescript</li>
                        <li>Junit</li>
                        <li>NoSQL & SQL</li>
                        <li>HTMl & CSS</li>
                      </ul>

                      <ul>
                        <b>Design Stack</b>
                        <li>Adobe Photoshop</li>
                        <li>Adobe Illustrator</li>
                        <li>Adobe AfterEffects</li>
                        <li>CorelDraw</li>
                        <li>Camtasia</li>
                      </ul>
                </div>

                <Footer />
            </div>

            <BottomNav  styles={styles} link={"/contact"}/>
        </Container>
    )
}


export default Resume;