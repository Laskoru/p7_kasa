import "./Card.css";
import React, { Component } from 'react';
import { logementsData } from "../../data/logements";
import { Link } from "react-router-dom";
//import useFetch from "../useFetch";
// function Card() {
//   return logements.map(({ id, title, cover }) => (
//     <Link to={`/logement/${id}`}>
//       <article key={id}>
//         <div className="title">{title}</div>
//         <img src={cover} alt={title} className="photo" />
//       </article>
//     </Link>
//   ));
// }
// export default Card;

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = { logements: logementsData };
  }
  render() {
    return(
      
        this.state.logements.map((logement) =>
        <Link to={`/logement/${logement.id}`}>
      <article key={logement.id}>
        <div className="title">{logement.title}</div>
        <img src={logement.cover} alt={logement.title} className="photo" />
      </article>
    </Link>
        )
      
    )
  }
}

export default Card