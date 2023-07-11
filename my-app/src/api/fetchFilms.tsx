import { FC, ReactNode } from 'react';
import { IFilmParams } from '../interfaces/IFilmParams';
import { IFullFilm } from '../interfaces/IFullFilm';


interface IFetchFilms {
  filmTitle: string;
}

const options = {
    method: 'GET',
    headers: {
      'X-API-KEY': '1T3088V-6084GW5-JWFDH9M-F2MHHVP'
    }
  };


export const fetchFilms = async({filmTitle, limit}: IFilmParams) => {
    const response = await fetch(`https://api.kinopoisk.dev/v1.3/movie?page=1&limit=${limit}&name=${filmTitle}`, options)
    const data = await response.json();
    return data;
}; 
