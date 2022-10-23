import "./Rating.css";
import {RiStarSFill} from "react-icons/ri";


const Rating = ({rating}) => {
    const ratingMax = 5
    
   
    return (
        <div>
            {[...new Array(ratingMax)].map((arr, index) =>
            
            {
                <li key={index} />
                    return index < rating ? <RiStarSFill fill="gold" className="stars" /> : <RiStarSFill fill="grey" className="stars" />;
              })}
        </div>
    )

}

export default Rating