import { FC, ReactNode } from 'react';


interface ISearchFilm {
    filmTitle: string;
}

const options = {
    method: 'GET',
    headers: {
      'X-API-KEY': '1T3088V-6084GW5-JWFDH9M-F2MHHVP',
      'accept': 'application/json'
    }
  };


export const searchFilm = async({filmTitle}: ISearchFilm) => {
    const response = await fetch(`https://api.kinopoisk.dev/v1.3/movie?page=1&name=${filmTitle}`, options)
    const data = await response.json();
    return data;
}; 