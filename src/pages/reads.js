import Container from "../components/scripts/container"
import Header from "../components/scripts/header"
import BottomNav from "../components/scripts/pageNav";
import ReadsCard from "../components/scripts/readsCard";



const Reads = () => {


    const styles = {
        marginTop: "10%"
    }


    return (
        <Container>
            <Header />
            <h1>My Reads</h1>
            <div className="reads-container">

            <ReadsCard  title={"The art of war"}/>   
            <ReadsCard  title={"The art of war"}/>   
            <ReadsCard  title={"The art of war"}/>   
            <ReadsCard  title={"The art of war"}/>   
            <ReadsCard  title={"The art of war"}/>   
            <ReadsCard  title={"The art of war"}/>   

            <div className="photo-container">
                <img src="" alt="iconphoto" />
            </div>

            </div>

            <BottomNav styles={styles} link={"/"} />

        </Container>
    )

}


export default Reads;