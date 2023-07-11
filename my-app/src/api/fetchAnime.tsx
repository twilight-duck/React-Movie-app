import { FC, ReactNode } from 'react';


interface IFetchAnime {
}

const options = {
    method: 'GET',
    headers: {
      'X-API-KEY': '1T3088V-6084GW5-JWFDH9M-F2MHHVP'
    }
  };


export const fetchAnime = async() => {
    const response = await fetch('https://api.kinopoisk.dev/v1.3/movie?page=1&limit=10&type=anime', options)
    const data = await response.json();
    return data;
}; 