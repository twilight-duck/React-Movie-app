import { FC } from 'react';
import { urls } from "./urls";

interface IgetFilm {
    id: string;
}

export const getFilm = async ({id}: IgetFilm) => {
    const response = await fetch(`${urls.SEARCH_FILMS}/?i=${id}&apikey=96a4368`);
    const data = await response.json();
    return data
};
