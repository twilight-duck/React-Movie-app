import { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchFilms } from '../../api/fetchFilms';
import { fetchFilteredMovies } from '../../api/fetchFilteredMovies';
import { FilmCard } from '../FilmCard/FilmCard';
import './SearchList.scss';

interface ISearchList {
    filmTitle: string;
    limit: number;
}

export const SearchList: FC<ISearchList> = ({filmTitle, limit}) => {
    const[films, setFilms] = useState([]);

    const navigate = useNavigate();

    const handleClick = (id: string) => {
        navigate(`/films/${id}`)
    }
   
    useEffect(() => {
        fetchFilms({filmTitle, limit}).then((data) => {
            setFilms(data.docs)
            console.log(data)
        }
    )}, [filmTitle])


    return (
    <>
        <h1 className='search-list-title'>Результаты поиска</h1>
        <div className='search-list'>
            {films && films.map((film, index) => (
                <FilmCard 
                     key={film['id']} 
                     id={film['id']} 
                     title={film['name']} 
                     year={film['year']} 
                     poster={film['poster'] ? film['poster']['url'] : ''} 
                     onClick={handleClick} 
                     rating={film['rating']['imdb']}
                     genre={film['genres'][0]['name']}
                     />
              ))}
        </div>
    </>
    )
};
