import { ADD_FAV, REMOVE_FAV, FILTER, ORDER, RESET } from "../action/types";

export const initialState = {
  myFavorites: [],
  allCharactersFav: [], // VA A TENER TODOS LOS FAVORITOS (solo lo cambian el add o el remove)
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAV:
      return {
        ...state,
        myFavorites: [...state.allCharactersFav, action.payload],
        allCharactersFav: [...state.allCharactersFav, action.payload],
      };

    case REMOVE_FAV:
      return {
        ...state,
        myFavorites: state.allCharactersFav.filter(
          (favorito) => favorito.id !== Number(action.payload)
        ),
        allCharactersFav: state.allCharactersFav.filter(
          (favorito) => favorito.id !== Number(action.payload)
        ),
      };

    case FILTER:
      return {
        ...state,
        myFavorites: state.allCharactersFav.filter(
          (genero) => genero.gender === action.payload
        ),
      };

    case ORDER:
      const newOrder = state.allCharactersFav.sort((a, b) => {
        if (action.payload === "A") {
          if (a.id < b.id) return -1;
          if (b.id < a.id) return 1;
          return 0;
        }
        if (action.payload === "D") {
          if (a.id < b.id) return 1;
          if (b.id < a.id) return -1;
          return 0;
        }
      });
      return {
        ...state,
        myFavorites: [...newOrder],
      };
    /*         case ORDER:
                const newOrder = state.allCharactersFav.sort((a,b) => {
                    if (a.id > b.id) {
                        return 'A' === action.payload ? 1 : -1
                    }
                    if (a.id < b.id) {
                        return 'D' === action.payload ? 1 : -1
                    }
                    return 0
                });
                return {
                    ...state,
                    myFavorites: newOrder
                } */

    case RESET:
      return {
        ...state,
        myFavorites: [...state.allCharactersFav],
      };

    /* case FILTER:
            return {...state.allCharacters, allCharacters: state.allCharacters.filter((genero)=> genero.gender === (action.payload))}
   
        case ORDER:
            if (action.payload === 'A'){
                return {...state.allCharacters.sort((a,b) => a.id - b.id)}
            }; 
            if (action.payload === 'D'){
                return {...state.allCharacters.sort((a,b) => b.id - a.id)}
            }; */

    default:
      return { ...state };
  }
};

export default rootReducer;
