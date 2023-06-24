import styles from "./Detail.module.css"
import axios from "axios";
import { useEffect, useState } from "react";
import {Link, useParams} from "react-router-dom";

const Detail = ()=>{
    const {id} = useParams()
    const [characters, setCharacters] = useState()
    useEffect(() => {
      // luego cambiar la url por el local host del servidor : `http://localhost:3001/rickandmorty/character/${id}`
        axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({data}) => {
           if (data.name) {
              setCharacters(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacters({})
     }, [id]);
     

     return(
        <>
       <Link to ="/home"><button className={styles.boton}>Back</button></Link>
        {characters?.name ?(
     <div className={styles.detail}>  
     
     <img  src={characters.image} alt={characters.name} />
     <h2> Nombre: {characters.name} </h2>
     <h2> Status: {characters.status} </h2>
     <h2> Species: {characters.species} </h2>
     <h2> Gender: {characters.gender} </h2>
     <h2> Origin: {characters.origin.name} </h2>
   </div>   
    ) : <div>Loading</div>}
  
   
    </>
    );
};
    export default Detail;
