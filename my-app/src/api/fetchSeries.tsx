import { FC, ReactNode } from 'react';


interface IFetchSeries {
}

const options = {
    method: 'GET',
    headers: {
      'X-API-KEY': '1T3088V-6084GW5-JWFDH9M-F2MHHVP'
    }
  };


export const fetchSeries= async() => {
    const response = await fetch('https://api.kinopoisk.dev/v1.3/movie?page=1&limit=10&countries.name=%D0%A1%D0%A8%D0%90&isSeries=true', options)
    const data = await response.json();
    return data;
}; 