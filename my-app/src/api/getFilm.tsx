import { FC } from 'react';
import { urls } from "./urls";

interface IgetFilm {
    id: string;
}


const options = {
    method: 'GET',
    headers: {
      'X-API-KEY': '1T3088V-6084GW5-JWFDH9M-F2MHHVP',
      'accept': 'application/json'
    }
  };

export const getFilm = async ({id}: IgetFilm) => {
    const response = await fetch(`https://api.kinopoisk.dev/v1.3/movie/${id}`, options);
    const data = await response.json();
    return data
};
