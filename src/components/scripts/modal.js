import modalStyles from "../styles/modal.module.scss";  

  
  const Modal = (props) => {

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