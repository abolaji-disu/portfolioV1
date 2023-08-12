import "../styles/aboutCard.scss";
import LinkIcon from "../../assets/SVGs/fxemoji_linksymbol.svg";

const AboutCard = ({title, icon, content, showLinks}) => {

    return (
        <div>

            <div className="card-header">
                <img src={icon} alt="icon" />
                <h1>{title}</h1>
            </div>

            <div className="about-content">
              {content}
            </div>

            {showLinks ? <div style={{display: "flex", justifyContent: "flex-start", columnGap: "50px", textDecoration: "none"}}>
                <a href="/works">
                    <img src={LinkIcon} alt="Link" />
                    Works
                </a>

                <a href="/works">
                    <img src={LinkIcon} alt="Link" />
                    Playlist
                </a>

                <a href="/works">
                    <img src={LinkIcon} alt="Link" />
                    Testimonials
                </a>

                <a href="/works">
                    <img src={LinkIcon} alt="Link" />
                    Clients
                </a>
            </div> : ""}

        </div>
    )
}


export default AboutCard;