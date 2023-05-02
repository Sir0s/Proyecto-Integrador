import React from "react";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";

export default function Card(props) {
  return (
    <div className={styles.card} key={props.id}>
      
      <button className={styles.boton} onClick={() => props.onClose(props.id)}>
        X
      </button>
      <img className={styles.image} src={props.image} alt="" />
      <Link to={`/detail/${props.id}`}>
        <h2 className="card-name">{props.name}</h2>
      </Link>
      <h2> {props.status} </h2>
      <h2> {props.species} </h2>
      <h2> {props.gender} </h2>
      <h2> {props.origin} </h2>
    </div>
  );
}
