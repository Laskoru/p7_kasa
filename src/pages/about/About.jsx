import "./About.css"
import img from "../../assets/IMG_ABOUT.png"
import Accordion from "../../components/Accordion/Accordion";
import {accordionData} from "../../data/accordion"


export default function About() {
    return (
        <div>
          <div className="about-intro">   
        <img className="background img" src={img} alt="paysage" />
        </div>
      
      <div className="accordion">
        {accordionData.map(({ title, content, index }) => (
          <li key={index}>
            <Accordion title={title} content={content} />
          </li>
        ))}
      </div>
  </div>
      
    );
  }