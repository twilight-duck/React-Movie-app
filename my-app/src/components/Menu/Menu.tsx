import { FC } from 'react';
import './Menu.scss';
import { ReactComponent as HomeIcon } from "../../assets/icons/Home.svg";
import { ReactComponent as TrendsIcon } from "../../assets/icons/Flame.svg";
import { ReactComponent as FavoritesIcon } from "../../assets/icons/Bookmark.svg";
import { ReactComponent as SettingsIcon } from "../../assets/icons/Setting.svg";
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../store/hooks';

interface IMenu {
}

export const Menu: FC<IMenu> = () => {



    return (
        
            <div className='menu'>
            <ul className='menu-list'>
                <Link to='/films'><li className="menu-list-item"><a className='menu-list-link' href=""><HomeIcon/>Home</a></li></Link>
                <li className="menu-list-item"><a className='menu-list-link' href=""><TrendsIcon/>Trends</a></li>
                <Link to='/favorites'><li className="menu-list-item"><a className='menu-list-link' href=""><FavoritesIcon/>Favorites</a></li></Link>
                <Link to='/settings'><li className="menu-list-item"><a className='menu-list-link' href=""><SettingsIcon/> Settings</a></li></Link>
            </ul>
            </div>
        
    )
};
