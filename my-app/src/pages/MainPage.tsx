import { FC, useEffect, useState } from 'react';
import { fetchFilms } from '../api/fetchFilms';
import { fetchGenres } from '../api/fetchGenres';
import { FilmCard } from '../components/FilmCard/FilmCard';
import { FilmsList } from '../components/FilmsList/FilmsList';
import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';
import { Menu } from '../components/Menu/Menu';
import { ModalSorting } from '../components/ModalSorting/ModalSorting';
import { PageTemplate } from '../components/PageTemplate/PageTemplate';
import { SearchInput } from '../components/SearchInput/SearchInput';
import { SearchList } from '../components/SearchList/SearchList';
import './MainPage.scss';

interface IMainPage{
    filmTitle: string
    handleFilmTitle: () => void;
}

export const MainPage: FC<IMainPage> = ({}) => {

    const [modalActive, setModalActive] = useState(false);
     const[options, setOptions] = useState([]);

    const handleActive= () => {
        setModalActive(!modalActive);
    }

    const [filmTitle, setFilmTitle] = useState('');
    const [filmName, setFilmName] = useState('');
    const [yearFrom, setYearFrom] = useState('');
    const [yearTo, setYearTo] = useState('');
    const [ratingFrom, setRatingFrom] = useState('');
    const [ratingTo, setRatingTo] = useState('');

    const handleYearFrom = (newValue: string) =>{
        setYearFrom(newValue);
    }

    const handleYearTo = (newValue: string) =>{
        setYearTo(newValue);
    }

    const handleRatingFrom = (newValue: string) =>{
        setRatingFrom(newValue);
    }

    const handleRatingTo = (newValue: string) =>{
        setRatingTo(newValue);
    }
    const handleFilmTitle = (newValue: string) => {
        setFilmTitle(newValue);
    }

    const handleFilmName= (newValue: string) => {
        setFilmName(newValue);
    }

    //  useEffect(() => {
    //     fetchGenres().then((data) => {
    //         setOptions(data)
    //         console.log(data)
    //     }
    // )}, [])

       return (
    <PageTemplate isOpen={false} filmTitle={handleFilmTitle} onClick={handleActive}>
        <div className='main-page'>
           <div className='main-page-content'>
                <Menu/>
                <div className='main-page-films'>
                    {filmTitle ? <SearchList 
                                filmTitle={filmTitle} 
                                yearFrom={yearFrom} 
                                yearTo={yearTo} 
                                ratingFrom={ratingFrom}
                                ratingTo={ratingTo}
                                /> : <FilmsList filmTitle={''}/>}
                </div>
            </div>
        </div>
        <ModalSorting 
        isActive={modalActive} 
        setIsactive={handleActive}
        onClick={handleActive} 
        filmName={handleFilmName} 
        yearFrom={handleYearFrom} 
        yearTo={handleYearTo}
        ratingFrom={handleRatingFrom}
        ratingTo={handleRatingTo}
        options={options.map((option) => option['name'])}
        />
    </PageTemplate>
    )
};
