import styles from './Card.module.css'
export default function Card({id,name,status,species,gender,origin,image,onClose}) {
   
   return (
      <div className={styles.card} key={id}>
         <button className={styles.boton}onClick={onClose}>X</button>
         <img className={styles.image} src={image} alt='' /> 
         <h2> {name} </h2>
         <h2> {status} </h2>
         <h2> {species} </h2>
         <h2> {gender} </h2>
         <h2> {origin} </h2>
         
      </div>
   );
}
