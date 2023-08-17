import modalStyles from "../styles/modal.module.scss";  
import { useRef } from "react";


  
  const Modal = () => {

    const modalRef = useRef();

    const toggleModalBox = () => {
    
        const elemRef = modalRef.current.classList;
        const containerStyles = modalStyles.modalContainer;

        if (!elemRef.contains(containerStyles)) elemRef.add(containerStyles)
            else  elemRef.remove(containerStyles)
        

    }

    return (
        <div ref={modalRef} onClick={toggleModalBox} className={modalStyles.modalContainer}>
            123456789
         </div>
    )
  }


  export default Modal;