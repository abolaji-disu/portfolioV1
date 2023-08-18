import  "../styles/modal.scss";  

  
  const Modal = (props) => {

    return (
        <div  onClick={props.toggleModal}  className={"modalContainer"}>
            <div className="modalRoutes">
                <ul>
                     <a href="/"><li>Home</li></a>
                    <a href="/about"><li>About</li></a>
                    <a href="/project"><li>Projects</li></a>
                    <a href="resume"><li>My Resume</li></a>
                    <a href="contact"><li>Contact me</li></a>
                    <a href="reads"><li>My Book collection</li></a>
                </ul>
            </div>
         </div>
    )
  }


  export default Modal;