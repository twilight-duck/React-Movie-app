import { FC } from 'react';
import { Logo } from '../../Logo/Logo';
import bg from '../../../assets/images/bg.jpg';
import './FormBackground.scss';
import { SignInPage } from '../../../pages/SignInPage/SignInPage';

interface IFormBackground {
    children: any;
}

export const FormBackground: FC<IFormBackground> = ({children}) => {
    const background = {background:`url(${bg}) center center/cover no-repeat`}

    return (
        <div className='form-background'  style = {background}>
            <div className="form-background__logo">
                <Logo/>
            </div>
               {children}
            <footer className='form-background__footer'>© All Rights Reserved</footer>
        </div>
    )
};
