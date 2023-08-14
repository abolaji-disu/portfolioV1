import BookIcon from "../../../src/assets/SVGs/book icon.svg";
import "../styles/readsCard.scss";

const ReadsCard = ({title}) => {

    return (
        <div className="reads-card"> 
            <img src={BookIcon} alt="book-icon" />
            {title}
        </div>
    )
}


export default ReadsCard;