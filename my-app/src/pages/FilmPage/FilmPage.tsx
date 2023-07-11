import { FC, useEffect, useState } from 'react';
import { Header } from '../../components/Header/Header';
import { Menu } from '../../components/Menu/Menu';
import { PageTemplate } from '../../components/PageTemplate/PageTemplate';
import filmImg from "../../assets/images/wonder-woman.svg";
import imdb from "../../assets/icons/imdb.svg"
import './FilmPage.scss';
import { ButtonsGroup } from '../../components/ButtonGroup/ButtonsGroup';
import { Arrow } from '../../components/Arrow/Arrow';
import { FilmCarousel } from '../../components/FilmCarousel/FilmCarousel';
import starWars from "../../assets/images/star-wars.svg";
import avengers from "../../assets/images/avengers.svg";
import aquaman from "../../assets/images/aquaman.svg";
import bumblebee from "../../assets/images/bumblebee.svg";
import joker from "../../assets/images/joker.svg";
import aladdin from "../../assets/images/Aladdin.svg";
import { useNavigate, useParams } from 'react-router-dom';
import { getFilm } from '../../api/getFilm';
import { IFullFilm } from '../../interfaces/IFullFilm';
import { fetchSimilarFilms } from '../../api/fetchSimilarFilms';
import { FilmCard } from '../../components/FilmCard/FilmCard';
import { ISimilarFilm } from '../../interfaces/ISimilarFilm';

interface IFilmPage {
    onClick: () => void;
}

export const FilmPage: FC<IFilmPage> = ({onClick}) => {

    const { id } = useParams();

    const [film, setFilm] = useState<null | IFullFilm>();
    const [similarFilms, setSimilarFilms] = useState<null | ISimilarFilm[]>(null);
   

    useEffect(() => {
        if(id) {
            getFilm({id}).then((data) => {
                setFilm(data)
                console.log(data)
            })
            }
        },[id])

        useEffect(() => {
            if(id) {
                fetchSimilarFilms({id}).then((data) => {
                    setSimilarFilms(data.docs)
                    console.log(data)
                })
                }
            },[id])

    const [filmTitle, setFilmTitle] = useState('');
    const handleFilmTitle = (newValue: string) => {
        setFilmTitle(newValue);
    }


    const actors = film?.persons.filter((person => person.profession === 'актеры'));
    const director = film?.persons.filter((person => person.profession === 'режиссеры'));
    const writers= film?.persons.filter((person => person.profession === 'редакторы'));

    const navigate = useNavigate();

    const handleClick = (id: string) => {
        navigate(`/films/${id}`)
    }

    return (
        <PageTemplate isOpen={false} filmTitle={handleFilmTitle} onClick={onClick}>
                <div className='film-page'>
                <Menu/>
                <div className='film-page-details'>
                    <div className='film-card'>
                        <div className='film-card-img'>
                            <img src={film?.poster.url} alt="" />
                        </div>
                        <ButtonsGroup/>
                    </div>
                    <div className='film-description'>
                        <div className='film-description-breadcrumbs'>
                            <ul className="breadcrumbs">
                                <li className="breadcrumbs-item">{film?.genres[0].name}</li>
                                <li className="breadcrumbs-item">{film?.genres[1]?.name}</li>
                                <li className="breadcrumbs-item">{film?.genres[2]?.name}</li>
                            </ul>
                        </div>
                        <h2 className="film-description-title">{film?.name}</h2>
                        <div className='film-description-ratings'>
                            <div className='app-rating'>{film?.rating.kp.toFixed(1)}</div>
                            <div className='imdb-rating'><img src={imdb} alt=""/>{film?.rating.imdb}</div>
                            <div className='film-length'>{film?.movieLength} мин</div>
                        </div>
                        <div className='film-description-plot'>
                            {film?.description} 
                        </div>
                        <table className='film-description-info'>
                            <tr className='table-cell'>
                                <td className='table-item'>Год</td>
                                <td className='table-item'>{film?.year}</td>
                            </tr>
                            <tr className='table-cell'>
                                <td className='table-item'>Мировая премьера</td>
                                <td className='table-item'>{film?.premiere.world.slice(0, -14)}</td>
                            </tr>
                            <tr className='table-cell'>
                                <td className='table-item'>Сборы</td>
                                <td className='table-item'>{film?.fees.world.value} $</td>
                            </tr>
                            <tr className='table-cell'>
                                <td className='table-item'>Страна</td>
                                <td className='table-item'>{film?.countries[0].name}</td>
                            </tr>
                            <tr className='table-cell'>
                                <td className='table-item'>Производство</td>
                                <td className='table-item'>{film?.productionCompanies?.map((company) => company.name).join(', ')}</td>
                            </tr>
                            <tr className='table-cell'>
                                <td className='table-item'>Актёрский состав</td>
                                <td className='table-item'>{actors?.map((actor => actor.name)).join(', ')}</td>
                            </tr>
                            <tr className='table-cell'>
                                <td className='table-item'>Режиссёр</td>
                                <td className='table-item'>{director?.map((director => director.name)).join(', ')}</td>
                            </tr>
                            <tr className='table-cell'>
                                <td className='table-item'>Сценаристы</td>
                                <td className='table-item'>{writers?.map((writer => writer.name)).join(', ')}</td>
                            </tr>
                        </table>
                        <div className='film-description-recommendations'>
                            <FilmCarousel title='Вам также может понравиться'>
                            {similarFilms && similarFilms.map((movie) =>
                                //
                                <div className="recommended-film">
                                    <FilmCard key={movie['id']} id={movie['id'].toString()} title={movie['name']} year={movie['year'].toString()} poster={movie['poster']['url']} onClick={handleClick}/>
                                    <ul className="breadcrumbs">
                                         <li className="breadcrumbs-item">{movie.genres[0].name}</li>
                                         <li className="breadcrumbs-item">{movie.genres[1]?.name}</li>
                                         <li className="breadcrumbs-item">{movie.genres[2]?.name}</li>
                                    </ul>
                                </div>
                                 )}
                            </FilmCarousel>
                        </div>
                    </div>
                </div>
            </div>
        </PageTemplate>
    )
};
