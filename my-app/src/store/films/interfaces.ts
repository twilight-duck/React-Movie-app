import { IFullFilm } from '../../interfaces/IFullFilm';
import { GET_FILMS_ERROR, GET_FILMS_REQUEST, GET_FILMS_SUCCESS, TOGGLE_FAVORITE, SET_FAVORITE } from './actionTypes';


export interface IFilmsState {
    films: IFullFilm[] | null;
    error: string | null;
}

export interface IGetFilmsRequestAction {
    type: typeof GET_FILMS_REQUEST;
}

export interface IGetFilmsSuccessAction {
    type: typeof GET_FILMS_SUCCESS;
    payload: {
       data: IFullFilm[]
    };
}


export interface IGetFilmsErrorAction {
    type: typeof GET_FILMS_ERROR;
    payload: {
      error: string;
    };
}


export interface IToggleFavoriteAction {
    type: typeof TOGGLE_FAVORITE;
    payload: number;
  }

  export interface ISetFavoriteAction {
    type: typeof SET_FAVORITE;
  }

  export type ActionsType = 
    IGetFilmsRequestAction 
    | IGetFilmsSuccessAction 
    | IGetFilmsErrorAction 
    | IToggleFavoriteAction
    | ISetFavoriteAction;