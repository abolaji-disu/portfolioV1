import { Link } from "react-router-dom";
import "../styles/bottomNav.scss";

const BottomNav =  ({styles, link}) => {



    return (
        <Link to={link}>
        <div style={styles} className="bottom-nav">
             Swipe for more        &rarr;
        </div>
        
        </Link>
    )
}

export default BottomNav;