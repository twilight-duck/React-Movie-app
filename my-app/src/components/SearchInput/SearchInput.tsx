
import { FC, useState } from 'react';
import { IconButton } from '../IconButton/IconButton';
import './SearchInput.scss';
import filterIcon from "../../assets/icons/filter-icon.svg";
import { useAppContext } from '../../contexts/AppContext';

interface ISearchInput{
    isDisabled?: boolean;
    filmTitle: any;
}


export const SearchInput: FC<ISearchInput> = ({isDisabled=false, filmTitle}) => {
    const { toggleTheme, isDarkTheme } = useAppContext();
   
    return (
        <div className='header-search'>
        <input 
        type="text" 
        className={`header-search-input ${isDarkTheme() ? 'dark' : 'light'}`}
        placeholder='Search'
        disabled={isDisabled}
        onChange={(e) => filmTitle(e.target.value)}
        />
        <div className='header-filter-icon'>
            <IconButton onClick={() => {console.log('a click has happened')}}>
                <img src={filterIcon} alt="filterIcon" />
            </IconButton>
        </div>
    </div>
    )
};


