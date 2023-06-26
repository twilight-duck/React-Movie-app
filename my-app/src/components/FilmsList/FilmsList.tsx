import { FC, useEffect, useState } from 'react';
import './FilmsList.scss';
import filmImage from '../../assets/images/wonder-woman.svg'
import { FilmCard } from '../FilmCard/FilmCard';
import { useNavigate } from 'react-router-dom';

interface IFilmList{
    filmTitle: string;
}

export const FilmsList: FC<IFilmList> = ({filmTitle}) => {
    const navigate = useNavigate();

    const handleClick = (id: string) => {
        navigate(`/films/${id}`)
    }


    const[film, setFilm] = useState([]);
    
    useEffect(() => {
    const getFilms = async () => {
        const response = await fetch(`http://www.omdbapi.com/?s=${filmTitle}&apikey=96a4368`);
        const data = await response.json();
        setFilm(data.Search);
        console.log(data);
        return data;
    }
    getFilms();
}, [filmTitle])

    return (
        <div className='list'>
            {film && film.map((film, index) => (
                <div>
                    <FilmCard key={film['imdbID']} id={film['imdbID']} title={film['Title']} year={film['Year']} poster={film['Poster']} onClick={handleClick}/>
                </div>
            ))}
        </div>
    )
};
