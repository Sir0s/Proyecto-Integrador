import Card from './Card';
import styles from './Cards.module.css'
export default function Cards({characters}) {
   return (
   <div className={styles.cards}>{
      characters.map(({id,name,status,origin,species,gender,image}) =>
      {
         return (
         <Card 
         id={id} 
         name = {name} 
         status = {status}
         species={species}
         gender={gender}
         origin={origin.name}
         image={image}
         onClose={()=>window.alert('Emulamos que se cierra la card '+id)}
          />
         )
      })
   }
   </div>
   )
}
