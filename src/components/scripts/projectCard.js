import  "../styles/projectCard.scss";

const ProjectCard = ({cardIcon}) => {

    return (
        <div className="card">
            <img src={cardIcon} alt="card-icon" />
        </div>
    )
}

export default ProjectCard;