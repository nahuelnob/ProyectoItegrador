import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { addFav, removeFav } from '../../redux/action/actions';

import style from './card.module.css'

export default function Card(props) {
///////////////////////////////////////////////////
// Traigo el estado (en vez de mapStateToProps)
const myFavorites = useSelector((state)=> state.myFavorites)
//const allCharactersFav = useSelector((state)=> state.allCharactersFav) --> ESTE YA NO LO USO
// myFavorites es el nombre del estado ahora
///////////////////////////////////////////////////
// Hice esto en vez de mapDispatchToProps
const dispatch = useDispatch()
///////////////////////////////////////////////////
//El estado local
const [isFav, setIsFav] = useState(false)
///////////////////////////////////////////////////
//funcion handleFavorite para que se lleven a cabo las actions
const handleFavorite = () => {
   if(isFav){
      setIsFav(false);
      dispatch(removeFav(props.id));
   } else {
      setIsFav(true);
         dispatch(addFav(props));
      } 
   }
   ///////////////////////////////////////////////////
   //comprobará si el personaje que contiene la Card ya está dentro de tus favoritos. En ese caso setteará el estado isFav en true   
   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

///////////////////////////////////////////////////
   
   return (
      <div className={style.div}>
         
         {
            isFav ? (
            <button onClick={handleFavorite} className={style.botonFav}>💚</button>
            )  : (
            <button onClick={handleFavorite} className={style.botonFav}>🤍</button>
            )
         }
        
         <button className={style.boton} onClick={()=>props.onClose(props.id)}>x</button>
        
      <NavLink to={`/detail/${props.id}`}>
         <img className={style.img} src={props.image} alt=''/>
      </NavLink>
         
         <h2 className={style.name}>{props.name}</h2>

         <div className={style.divTexto}>

            <p>{props.status}</p>
            <p>{props.species}</p>
            <p>{props.gender}</p>
            <p>{props.origin}</p>

         </div>

      </div>
   );
}

/* const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (id) => dispatch(addFav(id)),
      removeFav: (id) => dispatch(removeFav(id)),
   }
}

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
} */

/* export default connect(mapStateToProps,mapDispatchToProps)(Card); */