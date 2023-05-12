import React from "react";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import { addFav, removeFav } from "../../redux/actions";
import { connect } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";

function Card(props) {
  const [isFav, setIsFav] = useState(false);

  const handleFavorite = (event) => {
     event.preventDefault();
     if (isFav) {
       setIsFav(false);
       props.removeFavCard(props.id);
     } else {
       setIsFav(true);
       props.addFavCard(props);
     }
  };

  useEffect(() => {
     props.myFavoriteCard.forEach((fav) => {
        if (fav.id === props.id) {
           setIsFav(true);
        }
     });
  }, [props.myFavoriteCard]);


  return (
    <div className={styles.card} key={props.id}>
      
      <button className={styles.boton} onClick={() => props.onClose(props.id)}>
        X
      </button>
      <img className={styles.image} src={props.image} alt="" />
      <Link to={`/detail/${props.id}`}>
        <h2 className="card-name">{props.name}</h2>
      </Link>
      {/*<h2> {props.status} </h2>
      <h2> {props.species} </h2>
      <h2> {props.gender} </h2>
      <h2> {props.origin} </h2>*/}
      {
            isFav ? (
               <button onClick={handleFavorite}>❤️</button>
            ) : (
               <button onClick={handleFavorite}>🤍</button>
            )
         }
    </div>
  );
}
export function mapDispatchToProps(dispatch) {
  return {
     addFavCard: (char) => dispatch(addFav(char)),
     removeFavCard: (id) => dispatch(removeFav(id))
  }
}

export function mapStateToProps(state) {
  return {
     myFavoriteCard: state.myFavorites
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);