

const ExperienceCard = ({companyName, title, date, workAchievemwnt}) => {

    return (
        <div>
        <div className="experience-container">
            <div className="experience-header">
                <h1>{companyName}</h1>
                <span>{title}</span>
                Date - {date}
            </div>

            <div className="experience-body">
                {workAchievemwnt}
            </div>
        </div>
        </div>
    )
}

export default ExperienceCard;