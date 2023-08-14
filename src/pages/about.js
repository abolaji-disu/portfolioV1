import Container from "../components/scripts/container";
import Header from "../components/scripts/header";
import Footer from "../components/scripts/footer";
import "./about.scss";
import AboutCard from "../components/scripts/aboutCard";
import BacgroundIcon from "../assets/SVGs/fluent_window-dev-tools-24-regular.svg"
import CareerIcon from "../assets/SVGs/ic_baseline-work-history.svg";
import InterestIcon from "../assets/SVGs/Vector.svg";
import CollectionIcon from "../assets/SVGs/mdi_collection.svg";
import BottomNav from "../components/scripts/pageNav";


const About = () => {


    // const styles = {
    //     marginTop: "5%"
    // }

    return (
        <Container>
            <Header />
            <h1>About</h1>
        
        <div className="about-section">
            <div className="about-content">
            <AboutCard 
            title={"Technical Background"}
            icon={BacgroundIcon}
            content={"Sorem ipsum dolor sit amet, consectetur adipiscing elit.\
             Nunc vulputate libero et velit interdum, ac aliquet odio mattis. \
             Class aptent taciti sociosqu ad litora torquent per conubia nostra,\
              per inceptos himenaeos. Curabitur tempus urna at turpis condimentum\
               lobortis. Ut commodo efficitur neque."}
            />

             <AboutCard 
            title={"career summary"}
            icon={CareerIcon}
            content={"Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque."}
            />

             <AboutCard 
            title={"interest"}
            icon={InterestIcon}
            content={"Sorem ipsum dolor sit amet, consectetur adipiscing elit. \
             Nunc vulputate libero et velit interdum, ac aliquet odio mattis. \
             Class aptent taciti sociosqu ad litora torquent per conubia nostra,\
              per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.\
               Ut commodo efficitur neque."}
            />

             <AboutCard 
            title={"collections"}
            icon={CollectionIcon}
            content={"Sorem ipsum dolor sit amet, consectetur adipiscing elit. \
                    Nunc vulputate libero et velit interdum, ac aliquet odio mattis. \
                    Class aptent taciti sociosqu ad litora torquent per conubia nostra, \
                    per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. \
                    Ut commodo efficitur neque."}
            showLinks={true}
                    />


        
            </div>

            <div>
            <Footer />
            </div>
        </div>

        <BottomNav   link={"/project"}/>
        </Container>
    )
}


export default About;