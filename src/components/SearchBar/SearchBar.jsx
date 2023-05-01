import { useState } from "react";
import styles from "../SearchBar/SearchBar.module.css"

export default function SearchBar({onSearch}) {
   const [id,setID] = useState('');
   const handleChange =(event) =>{
      setID(event.target.value)
   }

   const handleClick = () => {
      onSearch(id);
      setID('');
   }
    return (
       <div className={styles.SearchBar}>
          <input type='search' onChange={handleChange} value={id} />
          <button onClick={handleClick}>Agregar</button>
       </div>
    );
 }