import "./Logement.css"
import Accordion from "../../components/Accordion/Accordion";
import { useParams } from "react-router-dom";
import React,{useState, useEffect} from 'react';
import Slider from "../../components/Carroussel/Carroussel"



import Rating from "../../components/Rating/Rating"


const Logement = () => {
  const [data, setData] = useState([])
  const {id} = useParams()
  useEffect(() => {
  const fetchData = async () => {
    const response = await fetch("http://localhost:3004/logement/" + id, {
      credentials: "include",
      method: "GET"
    })
    const data = await response.json()
    setData(data)
  }
  fetchData()
}, [setData, id])

  return (
    <body key={data.id}>
  <div className="slider">
  <Slider slides={data?.pictures} />

  </div>
  <div className="logement-info">

  
  <div className="logement-intro">
  <h3 className="logement-title">{data.title}</h3>
  <h4 className="logement-location">{data.location}</h4>
  
  
  <div className="logement-tags">
  {data.tags?.map((tag, index) => (<li key={index} className="logement-tag">{tag}</li>))}
  </div></div>
  <div className="logement-photo-name-rating">
  <div className="logement-name-photo">
  <div className="logement-name">{data.host?.name}</div>
  <img src={data.host?.picture} alt="propriétaire" className="logement-prop" />
  </div>
  <div className="logement-rating">
    <Rating rating={parseInt(data.rating)} />
  </div>
  </div>
  </div>
  <div className="group-accordion">
  <div className="logement-accordion description">
  <Accordion title="Description" content={data.description} /></div>
  <div className="logement-accordion">
  <Accordion title="Equipements" content={data.equipments} className="equipements" />
  </div>
  </div>
  
  </body>
  
  
    )
}

  

  
  
    export default Logement