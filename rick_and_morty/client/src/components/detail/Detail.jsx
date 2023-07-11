import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import style from "./detail.module.css";

const Detail = () => {
  const { id } = useParams();

  const [characters, setCharacter] = useState({});

  /*     useEffect(()=>{
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then((res) => res.json())
        .then((data) => {
            setPersonajes(data)
        })
        .catch((error) => console.log(error))
        return () => setPersonajes({})
    },[])  */

  useEffect(() => {
    //axios(`https://rickandmortyapi.com/api/character/${id}`).then(
    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );
    return setCharacter({});
  }, [id]);

  return (
    <div className={style.container}>
      <div className={style.div}>
        <div className={style.divIm}>
          <img className={style.imagen} src={characters.image} alt="" />
        </div>

        <div className={style.divDatos}>
          <h1 className={style.titulo}>{characters.name}</h1>
          <br />
          <div className={style.texto}>
            <p>ID | {id}</p>
            <p>GENERO | {characters.gender}</p>
            <p>ESPECIE | {characters.species}</p>
            <p>ESTADO | {characters.status}</p>
            <p>ORIGIN | {characters.origin?.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
