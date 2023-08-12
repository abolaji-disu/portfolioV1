import "../styles/header.scss";
import Logo from "../../assets/SVGs/my-logo.svg";
import Light from "../../assets/SVGs/light-icon.svg";

 

const Header = () => {


    return (
 

        <div className="logo-container">
          <img src={Logo} alt="my-logo" className="header-icon" />

        <div className="left-side">
            <img src={Light} alt="light-icon" className="header-icon" />
            <span className="route-btn">Routes</span>
        </div>
          </div>
        
    )
}


export default Header;