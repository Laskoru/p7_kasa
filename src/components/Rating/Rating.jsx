import "./Rating.css";
import {RiStarSFill} from "react-icons/ri";


const Rating = ({rating}) => {
    const ratingMax = 5
    
   
    return (
        <div>
            {[...new Array(ratingMax)].map((arr, index) =>
            
            {
                
                return index < rating ? <RiStarSFill fill="gold" className="stars" key={"rating" + index} /> : <RiStarSFill fill="grey" className="stars" key={"rating" + index} />;
                 
              })}
        </div>
    )

}

export default Rating