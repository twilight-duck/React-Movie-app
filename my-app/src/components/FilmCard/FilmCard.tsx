import React, { useState } from 'react';
import { FC } from 'react';
import './FilmCard.scss';
import { ReactComponent as FavoritesIcon } from "../../assets/icons/Bookmark.svg";
import { useDispatch } from 'react-redux';
import { addToFavorites, removeFromFavorites } from '../../store/favorites/Actions';

interface IFilmCard {
    title: string;
    year: string;
    poster: string;
    id: string;
    onClick: (id: string) => void;
    rating: number;
    genre: string;
}

export const FilmCard: FC<IFilmCard> = ({id, poster, title, year, onClick, rating, genre}) => {

    const dispatch = useDispatch();
    const [isFavorite, setIsFavorite] = useState(false);


    const handleAddToFavorites = () => {
        dispatch(addToFavorites((e: any) => e.target.value));
        setIsFavorite(true);
      };

      const handleRemoveFromFavorites = () => {
        dispatch(removeFromFavorites(Number(id)))
        setIsFavorite(false);
      };


    return (
        <article className='film-card' onClick={() => onClick(id)}>
            <div className='film-card-image'>
                <img src={poster} alt={title} />
                <p className={`film-card-rating  ${rating > 7.5 ? 'good' : 'bad'}`}>{rating}</p>
            </div>
            <div className='film-card-data'>
                <div className='film-card-year'>{year}{','}</div>
                <div className='film-card-genre'>{genre}</div>
            </div>
            <h4 className='film-card-title'>{title}</h4>
            <div className={`film-card-is_favorite ${isFavorite && 'active'}`}>
                <FavoritesIcon/>
            </div>
            <button className='film-card-add_to_favorites' onClick={handleAddToFavorites}>
                <FavoritesIcon/>
            </button>
        </article>
    )
};
