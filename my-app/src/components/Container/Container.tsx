import { FC, ReactNode } from 'react';
import { useAppSelector } from '../../store/hooks';
import { isDarkTheme } from '../../store/theme/selectors';
import './Container.scss';
// import { useAppContext } from '../../contexts/AppContex';

interface IContainer {
    children: ReactNode;
}

export const Container: FC<IContainer> = ({children}) => {
    const isDark = useAppSelector(isDarkTheme)

    return (
         <div className='container-theme'>
            <div className={`container ${isDark ? 'dark' : 'light'}`}>
                {children}
            </div>
        </div>
    )
};