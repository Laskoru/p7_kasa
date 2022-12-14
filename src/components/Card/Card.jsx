import "./Card.css";
import React,{useState, useEffect} from 'react';
import { Link } from "react-router-dom";


const Card = () => {
  const [data,setData]=useState([]);
  useEffect(() => {
    const url = "http://localhost:3004/logement";

    const fetchData = async () => {
      fetch(url)
  .then(
    function(res){
    return res.json()
  }).then(function(data){
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
  }, [])

  return(
    
      data.map(
        (data) => {
          return (
            
      <figure key={data.id}>
        <Link to={`/logement/${data.id}`}>
        <img src={data.cover} alt={data.title} className="photo" />
        <figcaption>{data.title}</figcaption>
        </Link>
      </figure>


          )

        }
        )
        
        )     
      }
      


  export default Card