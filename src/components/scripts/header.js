import "../styles/header.scss";
import Logo from "../../assets/SVGs/my-logo.svg";
import Light from "../../assets/SVGs/light-icon.svg";
import { useState } from "react";
import Modal from "./modal";
import { Link } from "react-router-dom";
import { useRef } from "react";

 

const Header = () => {

  const myRef = useRef();

  const [showModal, setShowModal] = useState(false);

  const toggleLight = () => {
    // alert("toggling")

    let currentNode = myRef.current;

while (currentNode !== document.body) {
  currentNode = currentNode.parentNode;
}
currentNode.classList.add('my-styled-body')

console.log(currentNode.classList);
    
  }

    

  const toggleModal = () => {
      if (showModal) setShowModal(false) 
        else  setShowModal(true)
  }


    return (
 

        <div className="logo-container" ref={myRef}>

        <Link to={"/"}>
          <img  src={Logo} alt="my-logo" className="header-icon" />
        </Link>

        <div className="left-side">
            <img src={Light} alt="light-icon" className="header-icon" onClick={toggleLight} />
            <span className="route-btn" onClick={toggleModal}>Routes</span>
        </div>


        {showModal && <Modal toggleModal={toggleModal} />}

         </div>
        
    )
}


export default Header;