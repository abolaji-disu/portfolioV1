import Container from "../components/scripts/container"
import Footer from "../components/scripts/footer";
import Header from "../components/scripts/header";
import BottomNav from "../components/scripts/pageNav";
import "./contact.scss";

const Contact = () => {


    const styles = {
        marginTop: "8rem"
    }

    return (
        <Container>
            <Header />
            <h1>Contact</h1>

            <div className="contact-container">
                <div className="profile-pics">
                    <img src="" alt="profile-pics" />
                </div>

                <div className="form-section" >
                    <input placeholder="Name:" type="text"/>
                    <input placeholder="Title:" type="text"/>
                    <textarea  placeholder="Write your message..."/>
                    <button>Hit me up !</button>
                </div>

                <Footer />
            </div>

            <BottomNav styles={styles} link={"/reads"} />

        </Container>
    )
}


export default Contact;