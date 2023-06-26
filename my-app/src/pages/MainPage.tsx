import { FC, useEffect, useState } from 'react';
import { FilmsList } from '../components/FilmsList/FilmsList';
import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';
import { Menu } from '../components/Menu/Menu';
import { PageTemplate } from '../components/PageTemplate/PageTemplate';
import { SearchInput } from '../components/SearchInput/SearchInput';
import './MainPage.scss';

interface IMainPage{
}

export const MainPage: FC<IMainPage> = () => {
    
    const [filmTitle, setFilmTitle] = useState('');
    const handleFilmTitle = (newValue: string) => {
        setFilmTitle(newValue);
    }
   
       return (
    <PageTemplate isOpen={false} filmTitle={handleFilmTitle}>
        <div className='main-page'>
           <div className='main-page-content'>
                <Menu/>
                <div className='main-page-films'>
                    <FilmsList filmTitle={filmTitle}/>
                </div>
            </div>
        </div>
    </PageTemplate>
    )
};
