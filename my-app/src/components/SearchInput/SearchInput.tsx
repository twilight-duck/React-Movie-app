
import { FC, useState } from 'react';
import { IconButton } from '../IconButton/IconButton';
import './SearchInput.scss';
import filterIcon from "../../assets/icons/filter-icon.svg";
import { useAppSelector } from '../../store/hooks';
import { isDarkTheme } from '../../store/theme/selectors';


interface ISearchInput{
    isDisabled?: boolean;
    filmTitle: any;
    onClick: () => void;
}


export const SearchInput: FC<ISearchInput> = ({isDisabled=false, filmTitle,onClick}) => {
    const isDark = useAppSelector(isDarkTheme)
   
    return (
        <div className='header-search'>
        <input 
        type="text" 
        className={`header-search-input ${isDark ? 'dark' : 'light'}`}
        placeholder='Search'
        disabled={isDisabled}
        onChange={(e) => filmTitle(e.target.value)}
        />
        <div className='header-filter-icon'>
            <IconButton onClick={onClick}>
                <img src={filterIcon} alt="filterIcon" />
            </IconButton>
        </div>
    </div>
    )
};


