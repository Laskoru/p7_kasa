import "./Logement.css"
import Accordion from "../../components/Dropdown/Accordion";
//import { useParams } from "react-router-dom";
//import { logementsData } from "../../data/logements";

const logementTest = {id: "c67ab8a7",
title: "Appartement cosy",
cover:
  "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg",
pictures: [
  "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg",
  //"https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-2.jpg",
 // "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-3.jpg",
  //"https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-4.jpg",
  //"https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-5.jpg",
],
description:
  "Votre maison loin de chez vous. Que vous veniez de l'autre bout du monde, ou juste de quelques stations de RER, vous vous sentirez chez vous dans notre appartement.",
host: {
  name: "Nathalie Jean",
  picture:
    "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-12.jpg",
},
rating: "5",
location: "Ile de France - Paris 17e",
equipments: [
  "Équipements de base",
  "Micro-Ondes",
  "Douche italienne",
  "Frigo",
  "WIFI",
],
tags: ["Batignolle", "Montmartre"],}



export default function Logement() {
    //let {id} = useParams()
   
    return (
      //console.log({id})
      <>
        <div className="logement-images">
        <img src={logementTest.pictures} alt="appartement" className="img-caroussel"></img>
        </div>
        <div className="logement-intro">
        <div className="logement-title">{logementTest.title}</div>
        <div className="logement-location">{logementTest.location}</div>
        </div>
        <div className="logement-tags">
          <div className="logement-tag">

          
          {logementTest.tags}</div></div>
        <div className="logement-photo-name-rating">
          <div className="logement-name-photo">
          <img src={logementTest.host.picture} alt="propriétaire" className="logement-prop"></img>
          <div className="logement-name">{logementTest.host.name}</div>
          </div>
          <div className="logement-rating">{logementTest.rating}</div>
        </div>
        <div className="group-accordion">
          <div className="logement-accordion">
          <Accordion title="Description" content={logementTest.description} /></div>
          <div className="logement-accordion">
          <Accordion title="Equipements" content={logementTest.equipments} />
          </div>
          </div>
          

        </>
      
     
    );
      
    
  }