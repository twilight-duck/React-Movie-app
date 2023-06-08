import { FC } from 'react';
import './Menu.scss';

interface IMenu {
}

export const Menu: FC<IMenu> = () => {
    return (
        <div className='menu'>
            <ul className='menu-list'>
                <li className="menu-list-item"><a href="">Home</a></li>
                <li className="menu-list-item"><a href="">Trends</a></li>
                <li className="menu-list-item"><a href="">Favorites</a></li>
                <li className="menu-list-item"><a href="">Settings</a></li>
            </ul>
        </div>
    )
};
