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
import { useParams } from 'react-router-dom';
import { getFilm } from '../../api/getFilm';
import { IFullFilm } from '../../interfaces/IFullFilm';

interface IFilmPage {
}

export const FilmPage: FC<IFilmPage> = () => {

    const { id } = useParams();

    const [film, setFilm] = useState<null | IFullFilm>(null);
   

    useEffect(() => {
        if(id) {
            getFilm({id}).then((data) => {
                setFilm(data)
                console.log(data)
            })
            }
        },[id])

    const [filmTitle, setFilmTitle] = useState('');
    const handleFilmTitle = (newValue: string) => {
        setFilmTitle(newValue);
    }

    return (
        <PageTemplate isOpen={false} filmTitle={handleFilmTitle}>
            {film && (
                <div className='film-page'>
                <Menu/>
                <div className='film-page-details'>
                    <div className='film-card'>
                        <div className='film-card-img'>
                            <img src={film.Poster} alt="" />
                        </div>
                        <ButtonsGroup/>
                    </div>
                    <div className='film-description'>
                        <div className='film-description-breadcrumbs'>
                            <ul className="breadcrumbs">
                                <li className="breadcrumbs-item">{film.Genre.split(' ')[0].toString().slice(0, -1)}</li>
                                <li className="breadcrumbs-item">{film.Genre.split(' ')[1].toString().slice(0, -1)}</li>
                                <li className="breadcrumbs-item">{film.Genre.split(' ')[2].toString()}</li>
                            </ul>
                        </div>
                        <h2 className="film-description-title">{film.Title}</h2>
                        <div className='film-description-ratings'>
                            <div className='app-rating'>{film.imdbRating}</div>
                            <div className='imdb-rating'><img src={imdb} alt=""/>{film.imdbRating}</div>
                            <div className='film-length'>{film.Runtime}</div>
                        </div>
                        <div className='film-description-plot'>
                            {film.Plot} 
                        </div>
                        <table className='film-description-info'>
                            <tr className='table-cell'>
                                <td className='table-item'>Year</td>
                                <td className='table-item'>{film.Year}</td>
                            </tr>
                            <tr className='table-cell'>
                                <td className='table-item'>Released</td>
                                <td className='table-item'>{film.Released}</td>
                            </tr>
                            <tr className='table-cell'>
                                <td className='table-item'>BoxOffice</td>
                                <td className='table-item'>{film.BoxOffice}</td>
                            </tr>
                            <tr className='table-cell'>
                                <td className='table-item'>Country</td>
                                <td className='table-item'>{film.Country}</td>
                            </tr>
                            <tr className='table-cell'>
                                <td className='table-item'>Production</td>
                                <td className='table-item'>{film.Production}</td>
                            </tr>
                            <tr className='table-cell'>
                                <td className='table-item'>Actors</td>
                                <td className='table-item'>{film.Actors}</td>
                            </tr>
                            <tr className='table-cell'>
                                <td className='table-item'>Director</td>
                                <td className='table-item'>{film.Director}</td>
                            </tr>
                            <tr className='table-cell'>
                                <td className='table-item'>Writers</td>
                                <td className='table-item'>{film.Writer}</td>
                            </tr>
                        </table>
                        <div className='film-description-recommendations'>
                            <FilmCarousel>
                                <div className="recommended-film">
                                    <img src={starWars} alt="" />
                                    <div className='recommended-film-info'>
                                        <h4 className='film-title'>
                                        Star Wars: The Rise of Skywalker
                                        </h4>
                                        <ul className="breadcrumbs">
                                            <li className="breadcrumbs-item">Adventure</li>
                                            <li className="breadcrumbs-item">Action</li>
                                            <li className="breadcrumbs-item">Fantasy</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="recommended-film">
                                    <img src={bumblebee} alt="" />
                                    <div className='recommended-film-info'>
                                        <h4 className='film-title'>
                                        Bumblebee
                                        </h4>
                                        <ul className="breadcrumbs">
                                            <li className="breadcrumbs-item">Adventure</li>
                                            <li className="breadcrumbs-item">Action</li>
                                            <li className="breadcrumbs-item">Fantasy</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="recommended-film">
                                    <img src={avengers} alt="" />
                                    <div className='recommended-film-info'>
                                        <h4 className='film-title'>
                                        Avengers: Endgame 
                                        </h4>
                                        <ul className="breadcrumbs">
                                            <li className="breadcrumbs-item">Adventure</li>
                                            <li className="breadcrumbs-item">Action</li>
                                            <li className="breadcrumbs-item">Fantasy</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="recommended-film">
                                    <img src={aquaman} alt="" />
                                    <div className='recommended-film-info'>
                                        <h4 className='film-title'>
                                        Aquaman 2 
                                        </h4>
                                        <ul className="breadcrumbs">
                                            <li className="breadcrumbs-item">Adventure</li>
                                            <li className="breadcrumbs-item">Action</li>
                                            <li className="breadcrumbs-item">Fantasy</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="recommended-film">
                                    <img src={joker} alt="" />
                                    <div className='recommended-film-info'>
                                        <h4 className='film-title'>
                                        The Joker
                                        </h4>
                                        <ul className="breadcrumbs">
                                            <li className="breadcrumbs-item">Thriller</li>
                                            <li className="breadcrumbs-item">Crime</li>
                                            <li className="breadcrumbs-item">Drama</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="recommended-film">
                                    <img src={aladdin} alt="" />
                                    <div className='recommended-film-info'>
                                        <h4 className='film-title'>
                                        Aladdin
                                        </h4>
                                        <ul className="breadcrumbs">
                                            <li className="breadcrumbs-item">Fiction</li>
                                            <li className="breadcrumbs-item">Action</li>
                                            <li className="breadcrumbs-item">Fantasy</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="recommended-film">
                                    <img src={avengers} alt="" />
                                </div>
                                <div className="recommended-film">
                                    <img src={joker} alt="" />
                                </div>
                                <div className="recommended-film">
                                    <img src={starWars} alt="" />
                                </div>
                                <div className="recommended-film">
                                    <img src={aladdin} alt="" />
                                </div>
                            </FilmCarousel>
                        </div>
                    </div>
                </div>
            </div>
            )}
        </PageTemplate>
    )
};
