import Container from "../components/scripts/container";
import Footer from "../components/scripts/footer";
import Header from "../components/scripts/header";
import ProjectCard from "../components/scripts/projectCard";
import PageNav from "../components/scripts/pageNav";
import "./project.scss"

const Project = () => {

    const styles = {
        marginTop: "6rem"
    }

    return (
        <Container>
            <Header />
            <h1>Projects</h1>
                    <div className="menu-tab">
                        <ul>
                            <li>All</li>
                            <li>Recent</li>
                            <li>Collaborations</li>
                            <li>Solo</li>
                            <li>Designs</li>
                        </ul>
                         </div>

            <div className="project-container">
                <div className="project-content">
                      
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />

                     <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    </div>


                <Footer />
            </div>

           <PageNav styles={styles} link={"/resume"} />

        </Container>
    )
}


export default Project;