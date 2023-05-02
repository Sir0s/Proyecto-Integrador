import styles from "./Nav.module.css"
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";



const Nav = ({onSearch}) =>{
   return(
   <div className={styles.Nav}>
      <Link to="/home">
      <button>Home</button>
      </Link>
      <Link to="/about">
      <button>About</button>
      </Link>
      <SearchBar onSearch={onSearch}/>
      
   </div>
);}
export default Nav;