import Container from "../components/scripts/container";
import Header from "../components/scripts/header";
import Footer from "../components/scripts/footer";
import BottomNav from "../components/scripts/pageNav";
import "../pages/home.scss";




const Homepage = () => {

    const styles = {
        marginTop: "10rem"
    }


    return (
       
    <Container>
        <Header />

            <div className="landing-section">
                    <div>
                        <h6>hello, i'm</h6>
                        <h1>ABOLAJI DISU</h1>
                        <h5>Digital Designer / Developer,</h5>
                        <p>A versatile creative professional who thrives at the intersection of design and 
                            development, I am adept at crafting captivating visuals and building functional 
                            software solutions. With a background in both graphics design and development, 
                            I bring a unique blend of artistic vision and technical expertise to every project.
                            </p>
                    </div>

                    <div>
                        <Footer />
                    </div>
            </div>
            <div>
        <BottomNav styles={styles} link={"/about"} />
            </div>
    </Container>
        
    )
}


export default Homepage;