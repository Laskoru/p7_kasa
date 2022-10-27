import "./Logement.css"
import Accordion from "../../components/Accordion/Accordion";
import { useParams } from "react-router-dom";
import React,{useState, useEffect} from 'react';
import Slider from "../../components/Carroussel/Carroussel"
import Error from "../../pages/error/Page404";
import Rating from "../../components/Rating/Rating"


const Logement = () => {
  const {id} = useParams()
  const [data,setData]=useState([]);
  useEffect(() => {
    const url = "http://localhost:3004/logement/" + id;

    const fetchData = async () => {
      fetch(url)
  .then(
    function(res){
    return res.json()
  }).then(function(data){
    if (data.id === undefined) {
      data = "nodata"
    }
    setData(data)
    return null
  }).catch(
    function(err){
      console.log(err, "error")
      return null
    }
    
  )
  }
  fetchData()
}, [setData, id])



if(data === "nodata") {
  return (
    <Error />
  )
  
} else {
  return (
    <div key={data.id}>
  <div className="slider">
  <Slider slides={data?.pictures} />
  </div>
  <section className="logement-info">
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
  </section>
  <div className="group-accordion">
  <div className="logement-accordion description">
  <Accordion title="Description" content={data.description} /></div>
  <div className="logement-accordion">
  <Accordion title="Equipements" content={data.equipments} className="equipements" />
  </div>
  </div>
  
  </div>
  
  
    )

}

  
}

  

  
  
    export default Logement