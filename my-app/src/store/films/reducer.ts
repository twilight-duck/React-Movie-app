import { GET_FILMS_ERROR, GET_FILMS_REQUEST, GET_FILMS_SUCCESS,TOGGLE_FAVORITE, SET_FAVORITE } from "./actionTypes";
import { ActionsType, IFilmsState } from "./interfaces";

const initialState: IFilmsState = {
    films: null,
    error: null,
  };

  export const filmsReducer = (state = initialState, action: ActionsType): IFilmsState => {
    switch (action.type) {
      case GET_FILMS_REQUEST:
        return {
          ...state,
          error: null,
        };
      case GET_FILMS_SUCCESS:
        return {
          ...state,
            films: action.payload.data
        };
      case GET_FILMS_ERROR:
        return {
          ...state,
          error: action.payload.error,
        };
      default:
        return state;
    }
  };