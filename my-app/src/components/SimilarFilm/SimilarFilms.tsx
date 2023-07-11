import { FC } from 'react';
import './SimilarFilms.scss';

interface ISimilarFilms {
    id: string | number;
    rating: number;
    title: string;
    genre: string;
    onClick: (id: string) => void;
    poster: string;
}

export const SimilarFilms: FC<ISimilarFilms> = ({id, rating, title, genre, onClick, poster}) => {
    return (
        <div className="recommended-film">
             <div className='recommended-film-ranking'>{rating}</div>
             <img src={poster} alt=""/>
             <div className='recommended-film-info'>
                 <h4 className='film-title'>
                 {title}
                 </h4>
                 <ul className="breadcrumbs">
                     <li className="breadcrumbs-item">{genre}</li>
                     <li className="breadcrumbs-item">{genre}</li>
                     <li className="breadcrumbs-item">{genre}</li>
                 </ul>
             </div>
         </div>
    )
};
