import { FC } from 'react';
import './Logo.scss';
import  {ReactComponent as LogoImg}  from '../../assets/icons/logo.svg'
import { useAppSelector } from '../../store/hooks';
import { isDarkTheme } from '../../store/theme/selectors';


export const Logo: FC = () => {
    const isDark = useAppSelector(isDarkTheme)

    return (
        <div className={`logo ${isDark ? 'dark' : 'light'}`}>
            <LogoImg/>
        </div>
    )
};
