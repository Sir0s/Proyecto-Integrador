import React from "react";
import styles from "./Nav.module.css";
import SearchBar from "../SearchBar/SearchBar";
import { Link, useLocation } from "react-router-dom";

const Nav = ({ onSearch }) => {
  const { pathname } = useLocation();
  const showSearchBar = pathname !== "/favorites";

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