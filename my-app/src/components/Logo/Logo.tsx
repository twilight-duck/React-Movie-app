import { FC } from 'react';
import './Logo.scss';
import  logo  from '../../assets/icons/logo.svg'


export const Logo: FC = () => {
    return (
        <div>
            <img src={logo} alt="logo" />
        </div>
    )
};
