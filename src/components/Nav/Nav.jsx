import styles from "./Nav.module.css"
import SearchBar from "../SearchBar/SearchBar";
const Nav = ({onSearch}) =>{
   return(
   <div className={styles.Nav}>
      <SearchBar onSearch={onSearch}/>
   </div>
);}
export default Nav;