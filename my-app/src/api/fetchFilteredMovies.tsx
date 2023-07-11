import { FC, ReactNode } from 'react';


interface IFetchFilteredMovies {
    filmTitle: string;
    yearFrom?: string;
    yearTo?: string;
    ratingFrom?: string;
    ratingTo?: string;
}

const options = {
    method: 'GET',
    headers: {
      'X-API-KEY': '1T3088V-6084GW5-JWFDH9M-F2MHHVP'
    }
  };


export const fetchFilteredMovies = async({filmTitle, yearFrom, yearTo, ratingFrom, ratingTo}: IFetchFilteredMovies) => {
    const response = await fetch(`https://api.kinopoisk.dev/v1.3/movie?page=1&limit=10&name=${filmTitle}&year=${yearFrom}-${yearTo}&rating.imdb=${ratingFrom}-${ratingTo}`, options)
    const data = await response.json();
    return data;
}; 