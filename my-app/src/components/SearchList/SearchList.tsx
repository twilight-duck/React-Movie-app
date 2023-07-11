import { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchFilms } from '../../api/fetchFilms';
import { fetchFilteredMovies } from '../../api/fetchFilteredMovies';
import { FilmCard } from '../FilmCard/FilmCard';
import './SearchList.scss';

interface ISearchList {
    filmTitle: string;
    yearFrom?: string;
    yearTo?: string;
    ratingFrom?: string;
    ratingTo?: string;
}

export const SearchList: FC<ISearchList> = ({filmTitle, yearFrom, yearTo, ratingFrom, ratingTo}) => {
    const[films, setFilms] = useState([]);

    const navigate = useNavigate();

    const handleClick = (id: string) => {
        navigate(`/films/${id}`)
    }
   
    useEffect(() => {
        fetchFilteredMovies({filmTitle, yearFrom, yearTo, ratingFrom, ratingTo}).then((data) => {
            setFilms(data.docs)
            console.log(data)
        }
    )}, [filmTitle, yearFrom, yearTo, ratingFrom, ratingTo])


    return (
    <>
        <h1 className='search-list-title'>Результаты поиска</h1>
        <div className='search-list'>
            {films && films.map((film, index) => (
                  <FilmCard key={film['id']} id={film['id']} title={film['name']} year={film['year']} poster={film['poster'] ? film['poster']['url'] : ''} onClick={handleClick}/>
              ))}
        </div>
    </>
    )
};
