import "./Rating.css";
import {RiStarSFill} from "react-icons/ri";


const Rating = ({rating}) => {
    const ratingMax = 5
    
   
    return (
        <box>
            {[...new Array(ratingMax)].map((arr, index) => {
                return index < rating ? <RiStarSFill fill="gold" className="stars" /> : <RiStarSFill fill="grey" className="stars" />;
              })}
        </box>
    )

}

export default Rating