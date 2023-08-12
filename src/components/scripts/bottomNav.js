import { Link } from "react-router-dom";
import "../styles/bottomNav.scss";

const BottomNav =  () => {

    return (
        <Link to={"/about"}>
        <div className="bottom-nav">
             Swipe for more        &rarr;
        </div>
        
        </Link>
    )
}

export default BottomNav;