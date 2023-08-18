import modalStyles from "../styles/modal.module.scss";  

  
  const Modal = (props) => {


    // const toggleModalBox = () => {
    
    //     const elemRefClass = modalRef.current.classList;
    //     const containerStyles = modalStyles.modalContainer;

    //     const elemRef = modalRef.current;

    //     // if (elemRef != null) elemRef.parentNode.removeChild()



    //     if (!elemRefClass.contains(containerStyles)) elemRefClass.add(containerStyles)
    //         else  elemRefClass  .remove(containerStyles)
        

    // }

    return (
        <div  onClick={props.toggleModal}  className={modalStyles.modalContainer}>
            <div className="modalRoutes">
                <ul>
                    <li>About</li>
                    <li>Projects</li>
                    <li>My Resume</li>
                    <li>Contact me</li>
                    <li>My Book collection</li>
                </ul>
            </div>
         </div>
    )
  }


  export default Modal;