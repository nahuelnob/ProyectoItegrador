import "./App.css";

import Cards from "./components/cards/Cards";
import Nav from "./components/nav/NavBar";
import Detail from "./components/detail/Detail";
import About from "./views/AAbout";
import Form from "./components/form/Form";
import Favorites from "./components/favorites/Favorites";
import SearchBar from "./components/searchBar/SearchBar";
import Title from "./components/title/Title";

import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

import store from "./redux/store/store";
import { useDispatch, useSelector } from "react-redux";
import { removeFav } from "./redux/action/actions";
import validation from "./components/form/validation";

function App() {
  ////////////////////////////////////////////////
  //Estado local que contiene a los personajes
  const [characters, setCharacters] = useState([]);

  ////////////////////////////////////////////////
  // Para que no se vea NAVIGATE
  const { pathname } = useLocation();

  ////////////////////////////////////////////////
  const dispatch = useDispatch();
  ////////////////////////////////////////////////
  //          LOGIN

  const [access, setAccess] = useState(false);
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const login = async ({ email, password }) => {
    try {
      const { data } = await axios(
        `http://localhost:3001/rickandmorty/login?email=${email}&password=${password}`
      );
      console.log("la datarda --->", data);
      const { access } = data;
      access === true && alert("login exitoso");
      setAccess(access);
      setEmail(email);
      access && navigate("/home");
    } catch (error) {
      window.alert(error.message);
    }
  };

  const logout = () => {
    setAccess(false);
    alert("logout exitoso");
  };

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  ////////////////////////////////////////////////
  //          ONSEARCH
  const onSearch = async (id) => {
    const repetido = characters.find((item) => item.id === Number(id));
    if (repetido) return alert("¡Este personaje ya fue agregado!");

    try {
      const { data } = await axios(
        `http://localhost:3001/rickandmorty/character/${id}`
      );
      if (data.name) {
        setCharacters((oldChars) => [...oldChars, data]);
      }
    } catch (error) {
      window.alert(error.message);
    }
  };
  ////////////////////////////////////////////////

  const onClose = (id) => {
    const confirmar = window.confirm("Estas seguro que desea eliminar?");
    if (confirmar) {
      console.log("confirmado");
      setCharacters((oldChars) => oldChars.filter((char) => char.id !== id));
      dispatch(removeFav(id));
    } else {
      console.log("cancelado");
    }
  };

  ////////////////////////////////////////////////
  //Conecto con el estado Global
  const myFavorites = useSelector((state) => state.myFavorites);
  ////////////////////////////////////////////////

  return (
    <div className="App">
      {pathname !== "/" && (
        <>
          <Title />
          <Nav onSearch={onSearch} logout={logout} email={email} />
        </>
      )}

      <Routes className="App">
        <Route path="/" element={<Form login={login} />} />

        <Route
          path="/home"
          element={
            <>
              <SearchBar onSearch={onSearch} />
              <Cards characters={characters} onClose={onClose} />
            </>
          }
        />

        <Route
          path="/favorites"
          element={<Favorites myFavorites={myFavorites} onClose={onClose} />}
        />

        <Route path="/about" element={<About />} />

        <Route
          path="/detail/:id"
          element={<Detail characters={characters} />}
        />
      </Routes>
    </div>
  );
}

export default App;

////////////////////////////////////////////////////////////////////
//* OnSearch viejo con promesas

//axios(`https://rickandmortyapi.com/api/character/${id}`)
/* axios(`http://localhost:3001/rickandmorty/character/${id}`)
.then(({ data }) => {
  if (data.name) {
    setCharacters((oldChars) => [...oldChars, data]);
  } else {
    window.alert("No escribiste nada payaso");
  }
})
.catch(() => {
  window.alert("No existe personaje con ese ID");
}); */

////////////////////////////////////////////////////////////////////
//* Login Viejo
/*    const login = (userData) => {
  if (userData.email === EMAIL && userData.password === PASSWORD){
    setAccess(true); 
         alert('Login exitoso')
         navigate('/home');
      } else {
         alert('Alguno de los datos son incorrectos')
      } */
//* Login con promesa
/*     axios(
      `http://localhost:3001/rickandmorty/login?email=${email}&password=${password}`
    ).then(({ data }) => {
      const { access } = data;
      access === true
        ? alert("Login exitoso")
        : 
      setAccess(access);
      setEmail(email);
      access && navigate("/home");
    }); */
////////////////////////////////////////////////////////////////////
