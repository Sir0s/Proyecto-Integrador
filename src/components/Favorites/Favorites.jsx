import { useDispatch, useSelector } from "react-redux"
import Card from "../Card/Card"
import { removeFav, filterCards, orderCards } from "../../redux/actions"
import styles from "./Favorites.module.css"

const Favorites =()=>{

   const dispatch = useDispatch()

   const { myFavorites } = useSelector((state)=> state)
   // const [aux, setAux] = useState(false)

   const onClose = (id)=>{
      dispatch(removeFav(id))
   }

   const handleFilter = (event) => {
      const gender = event.target.value
      dispatch(filterCards(gender))
      // setAux(!aux)
   }
   
   const handleOrder = (event) => {
      const order = event.target.value
      dispatch(orderCards(order))
      // setAux(!aux)
   }
   

   return ( 
      <div>
         <div>
            <select name="" id="" onChange={handleFilter}>
               <option value="All" >All</option>
               <option value="Male">Male</option>
               <option value="Female">Female</option>
               <option value="Genderless">Genderless</option>
               <option value="unknown">unknown</option>
            </select>
         </div>
         <div>
            <select name="" id="" onChange={handleOrder}>
               <option value="" selected disabled>Sort by</option>
               <option value="A">Ascendente</option>
               <option value="D">Descendente</option>
            </select>
         </div>
            <div className={styles.Favorites}>
            {myFavorites.map(props => {
               return(
                        <Card
                           key={props.id}
                           id={props.id}
                           name={props.name}
                           status={props.status}
                           species={props.species}
                           gender={props.gender}
                           image={props.image}
                           origin={props.origin}
                           onClose={onClose}
                        />
                     ) 
                  }
               )
            }
            </div>
      </div>
   )
}

export default Favorites