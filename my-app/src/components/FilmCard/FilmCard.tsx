import { FC } from 'react';
import './FilmCard.scss';

interface IFilmCard {
    title: string;
    year: string;
    poster: string;
    id: string;
    onClick: (id: string) => void;
}

export const FilmCard: FC<IFilmCard> = ({id, poster, title, year, onClick}) => {
    return (
        <article className='film-card' onClick={() => onClick(id)}>
            <div className='film-card-image'>
                <img src={poster} alt={title} />
            </div>
            <p className='film-card-ranking'></p>
            <h4 className='film-card-title'>{title}</h4>
            <p className='film-card-text'></p>
        </article>
    )
};
