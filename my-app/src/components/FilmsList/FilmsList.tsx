import { FC, useEffect, useState } from 'react';
import './FilmsList.scss';
import filmImage from '../../assets/images/wonder-woman.svg'
import { FilmCard } from '../FilmCard/FilmCard';
import { useNavigate } from 'react-router-dom';
import { fetchFilms } from '../../api/fetchFilms';
import { searchFilm } from '../../api/searchFilm';
import { fetchCartoons } from '../../api/fetchCartoons';
import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FilmCarousel } from '../FilmCarousel/FilmCarousel';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getFilmsAction } from '../../store/films/actions';
import { IFilmParams } from '../../interfaces/IFilmParams';
import { Pagination } from '../Pagination/Pagination';

interface IFilmList{
    filmTitle: string;
}

export const FilmsList: FC<IFilmList> = ({filmTitle}) => {
    const navigate = useNavigate();

    const handleClick = (id: string) => {
        navigate(`/films/${id}`)
    }

    const[films, setFilms] = useState([]);
    const [limit, setLimit] = useState(20);
    const [totalLimit, setTotalLimit] = useState(0);


    const dispatch = useAppDispatch();
    // const { films, error } = useAppSelector(state => state.films);
    
    
    useEffect(() => {
        fetchFilms({filmTitle, limit}).then((data) => {
            setFilms(data.docs)
            setTotalLimit(data.total)
            console.log(data)
            
        }
        )}, [filmTitle, limit])
    

    return (
        <div className='list'>
                {films && films.map((film, index) => (
                    <FilmCard key={film['id']} id={film['id']} title={film['name']} year={film['year']} poster={film['poster']['url']} onClick={handleClick}/>
                ))}
                {limit < totalLimit && 
                    <button className='list-button' onClick={() => setLimit(limit + 20)}>Show More</button>
                }
        </div>
        )
};
