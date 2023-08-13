import "../styles/experienceCard.scss";

const ExperienceCard = ({companyName, title, date, workAchievemwnt}) => {

    return (
        <div>
        <div className="experience-container">
            <div className="experience-header">
                <h1>{companyName} - <em>{title}</em></h1>
                <h1>Date - {date}</h1>
            </div>

            <div className="experience-body">
                {workAchievemwnt}
            </div>
        </div>
        </div>
    )
}

export default ExperienceCard;