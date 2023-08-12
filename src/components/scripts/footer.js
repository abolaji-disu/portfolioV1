import {mail} from "../../assets/SVGs/mail.svg";
import {twitter} from "../../assets/SVGs/twitter.svg";
import {github} from "../../assets/SVGs/github.svg";
import {linkedin} from "../../assets/SVGs/linkedin.svg";

const Footer = () => {

    return (
        <div className="icon-container">
            <img src={mail} alt="mail-icon" />
            <img src={twitter} alt="twitter-icon" />
            <img src={github} alt="github-icon" />
            <img src={linkedin} alt="linkedin-icon" />            
         </div>
    )
}


export default Footer;