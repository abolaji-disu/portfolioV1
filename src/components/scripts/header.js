import "../styles/header.scss";
import Logo from "../../assets/SVGs/my-logo.svg";
import Light from "../../assets/SVGs/light-icon.svg";
import { useState } from "react";
import Modal from "./modal";

 

const Header = () => {

  const [showModal, setShowModal] = useState(true);

  const toggleModal = () => {
    
  }


    return (
 

        <div className="logo-container">
          <img src={Logo} alt="my-logo" className="header-icon" />

        <div className="left-side">
            <img src={Light} alt="light-icon" className="header-icon" />
            <span className="route-btn">Routes</span>
        </div>


        {showModal && <Modal />}


          </div>
        
    )
}


export default Header;