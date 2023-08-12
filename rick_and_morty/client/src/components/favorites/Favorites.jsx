import style from "./favorites.module.css";
import Card from "../card/Card";

////////////////////////////////////////////////
//Ultima integracion
import { filterCards, orderCards, reset } from "../../redux/action/actions";
import { useDispatch } from "react-redux";
import { useState } from "react";
////////////////////////////////////////////////

const Favorites = (props) => {
  const { onClose } = props;

  ////////////////////////////////////////////////
  //Ultima integracion
  const dispatch = useDispatch();

  const handleOrder = (e) => {
    e.preventDefault();
    dispatch(orderCards(e.target.value));
    /* setAux(true) */
  };

  const handleFilter = (e) => {
    e.preventDefault();
    dispatch(filterCards(e.target.value));
  };

  const resetBtn = (e) => {
    e.preventDefault();
    dispatch(reset());
  };

  /*     const [aux, setAux] = useState(false) */
  ////////////////////////////////////////////////

  const lista = props.myFavorites.map((carta) => {
    const { id, name, status, species, gender, origin, image} = carta;

    return (
      <Card
        id={id}
        name={name}
        status={status}
        species={species}
        gender={gender}
        origin={origin.name}
        image={image}
        onClose={onClose}
      />
    );
  });

  return (
    <div className={style.container}>
      <div className={style.div}>
        <div className={style.botonera}>
          <select
            className={style.btnOrder}
            onChange={handleOrder}
            name="Order"
          >
            <option className={style.opcion}>Select order</option>
            <option className={style.opcion} value="A">
              Ascendente
            </option>
            <option className={style.opcion} value="D">
              Descendente
            </option>
          </select>
          <button className={style.resetBtn} onClick={resetBtn}>
            Reset
          </button>
          <select
            className={style.btnFiter}
            onChange={handleFilter}
            defaultValue={"DEFAULT"}
            name="Filter"
          >
            <option className={style.opcion} value="DEFAULT" disable>
              Filtrado
            </option>
            <option className={style.opcion} value="Male">
              Male
            </option>
            <option className={style.opcion} value="Female">
              Female
            </option>
            <option className={style.opcion} value="Genderless">
              Genderless
            </option>
            <option className={style.opcion} value="unknown">
              unknown
            </option>
          </select>
        </div>

        <div className={style.divCard}>{lista}</div>
      </div>
    </div>
  );
  /*     return (
        <div>
        <button className={style.boton} onClick={()=>props.onClose(props.id)}>x</button>
        
        <NavLink to={`/detail/${props.id}`}>
        <img className={style.img}src={props.myFavorites.image} alt=''/>
        </NavLink>
        
        <h2 className={style.name}>{props.myFavorites.name}</h2>

        <div className={style.divTexto}>

           <p>{props.myFavorites.status}</p>
           <p>{props.myFavorites.species}</p>
           <p>{props.myFavoritesgender}</p>
           <p>{props.myFavoritesorigin}</p>

        </div>
        </div>
    ) */
};

export default Favorites;
