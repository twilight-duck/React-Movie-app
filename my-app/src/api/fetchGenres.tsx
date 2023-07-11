import { FC, ReactNode } from 'react';


interface IFetchSGenres {
}

const options = {
    method: 'GET',
    headers: {
      'X-API-KEY': '1T3088V-6084GW5-JWFDH9M-F2MHHVP'
    }
  };


export const fetchGenres = async() => {
    const response = await fetch('https://api.kinopoisk.dev/v1/movie/possible-values-by-field?field=genres.name', options)
    const data = await response.json();
    return data;
}; 