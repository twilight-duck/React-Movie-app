import { FC, ReactNode } from 'react';


interface IFetchCartoons {
}

const options = {
    method: 'GET',
    headers: {
      'X-API-KEY': '1T3088V-6084GW5-JWFDH9M-F2MHHVP'
    }
  };


export const fetchCartoons = async() => {
    const response = await fetch('https://api.kinopoisk.dev/v1.3/movie?page=1&limit=10&type=cartoon', options)
    const data = await response.json();
    return data;
}; 