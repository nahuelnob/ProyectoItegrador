import { ADD_FAV, REMOVE_FAV, FILTER, ORDER, RESET } from "./types";
import axios from "axios";

/* export const addFav = (personaje) => {
    return {
        type: ADD_FAV,
        payload: personaje
    };
} */
const URL = "http://localhost:3001/rickandmorty/fav";

export const addFav = (personaje) => {
  return (dispatch) => {
    axios
      .post(`${URL}`, personaje /*-> personaje es lo q va a llegar por body */)
      .then(({ data }) => {
        return dispatch({
          type: ADD_FAV,
          payload: data,
        });
      });
  };
};

export const removeFav = (id) => {
  return (dispatch) => {
    axios.delete(`${URL}/${id}`).then(({ data }) => {
      return dispatch({
        type: REMOVE_FAV,
        payload: data,
      });
    });
  };

  return {
    type: REMOVE_FAV,
    payload: id,
  };
};

export const filterCards = (gender) => {
  return {
    type: FILTER,
    payload: gender,
  };
};

export const orderCards = (order) => {
  return {
    type: ORDER,
    payload: order,
  };
};

export const reset = () => {
  return {
    type: RESET,
  };
};
