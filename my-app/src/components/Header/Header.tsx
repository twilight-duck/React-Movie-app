import { FC, useState } from 'react';
import { IconButton } from '../IconButton/IconButton';
import { Logo } from '../Logo/Logo';
import filterIcon from "../../assets/icons/filter-icon.svg";
import './Header.scss';
import { UserInfo } from '../UserInfo/UserInfo';
import { SearchInput } from '../SearchInput/SearchInput';
import { Container } from '../Container/Container';

interface IHeader{
    filmTitle: string;
    isOpen: boolean;
    onClick: () => void;
}

export const Header: FC<IHeader> = ({filmTitle, isOpen, onClick}) => {
       
    return (
            <header className='header'>
                <div className='header-logo'>
                    <Logo/>
                </div>
                <SearchInput filmTitle={filmTitle} onClick={onClick}/>
                <div header-user-box>
                    <UserInfo userName={'Artem Lapitsky'}/>
                </div>
            </header>
    )
};
