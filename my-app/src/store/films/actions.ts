import { IFullFilm } from '../../interfaces/IFullFilm';
import { GET_FILMS_ERROR, GET_FILMS_REQUEST, GET_FILMS_SUCCESS, TOGGLE_FAVORITE, SET_FAVORITE } from './actionTypes';
import { IGetFilmsRequestAction, IGetFilmsErrorAction, IGetFilmsSuccessAction, ActionsType, IToggleFavoriteAction, ISetFavoriteAction } from "./interfaces";
import { fetchFilms } from '../../api/fetchFilms';
import { ThunkDispatch } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { IFilmParams } from '../../interfaces/IFilmParams';

const getFilmsRequestAction = (): IGetFilmsRequestAction => {
    return { type: GET_FILMS_REQUEST };
  }

  const getFilmsSuccessAction = (data: IFullFilm[]): IGetFilmsSuccessAction => {
    return { type: GET_FILMS_SUCCESS, payload: { data} };
  }

  const getFilmsErrorAction = (): IGetFilmsErrorAction => {
    return { type: GET_FILMS_ERROR, payload: { error: 'Unknown error' } };
  }

  export const setToggleFavoriteAction = (id: number): IToggleFavoriteAction => {
    return { type: TOGGLE_FAVORITE, payload: id };
  }

  export const setFavoriteAction = (): ISetFavoriteAction => {
    return { type: SET_FAVORITE };
  }

  export const getFilmsAction = ({filmTitle, limit}: IFilmParams) => async (dispatch: ThunkDispatch<RootState, unknown, ActionsType>) => {
    try {
        dispatch(getFilmsRequestAction());
        const data = await fetchFilms({filmTitle, limit});
        dispatch(getFilmsSuccessAction(data))
    } catch(error){
        dispatch(getFilmsErrorAction());
    }
  }