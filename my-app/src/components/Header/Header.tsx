import { FC, useState } from 'react';
import { IconButton } from '../IconButton/IconButton';
import { Logo } from '../Logo/Logo';
import filterIcon from "../../assets/icons/filter-icon.svg";
import './Header.scss';
import { UserInfo } from '../UserInfo/UserInfo';


interface IComponentName {
}

export const Header: FC<IComponentName> = () => {
        const [searchValue, setSearchValue] = useState('');

        const handleChangeSearch = (newValue: string) => {
            setSearchValue(newValue);
          }

    return (
        <header className='header'>
            <div className='header-logo'>
                <Logo/>
            </div>
            <div className='header-search-input'>
                <input 
                type="text" 
                className='header-search-input'
                placeholder='Search'
                value={searchValue}
                onChange={(e) => handleChangeSearch(e.target.value)}
                />
                <div className='header-filter-icon'>
                    <IconButton onClick={() => {console.log('a click has happened')}}>
                        <img src={filterIcon} alt="filterIcon" />
                    </IconButton>
                </div>
            </div>
            <div header-user-box>
                <UserInfo userName={'Artem Lapitsky'}/>
            </div>
        </header>
    )
};
