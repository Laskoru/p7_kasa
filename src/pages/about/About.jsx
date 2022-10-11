import "./About.css"
import img from "../../assets/IMG_ABOUT.png"
import Accordion from "../../components/Dropdown/Accordion";
import {accordionData} from "../../data/accordion"


export default function About() {
    return (
        <><div>
            <div className="section1">
                <div className="maskgroup">
                    <img className="background img" src={img} alt="paysage" />
                </div>
            </div>
        </div>
      
      <div className="accordion">
        {accordionData.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
      </div>
  </>
      
    );
  }