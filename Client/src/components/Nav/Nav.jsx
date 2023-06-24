import React from "react";
import styles from "./Nav.module.css";
import SearchBar from "../SearchBar/SearchBar";
import { Link, useLocation, useParams } from "react-router-dom";

const Nav = ({ onSearch }) => {
  
  const { pathname } = useLocation();
  const id = pathname.replace(/\D/g, "");
  const showSearchBar = (pathname !== "/favorites" && pathname !== "/about" && pathname !=="/detail/"+id);
  
  return (
    <div className={styles.Nav}>
      <Link to="/home">
        <button>Home</button>
      </Link>
      <Link to="/about">
        <button>About</button>
      </Link>
      <Link to="/favorites">
        <button>My Favorites</button>
      </Link>
      {showSearchBar && <SearchBar onSearch={onSearch} />}
    </div>
  );
};

export default Nav;