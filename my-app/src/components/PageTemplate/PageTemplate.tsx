import { ButtonGroup } from '@mui/material';
import { FC, useState } from 'react';
import { MainPage } from '../../pages/MainPage';
import { SignInPage } from '../../pages/SignInPage/SignInPage';
import { useAppDispatch } from '../../store/hooks';
import { toggleThemeAction } from '../../store/theme/actions';
import { Arrow } from '../Arrow/Arrow';
import { Button } from '../Button/Button';
import { ButtonsGroup } from '../ButtonGroup/ButtonsGroup';
import { Container } from '../Container/Container';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import { Input } from '../Input/Input';
import { Logo } from '../Logo/Logo';
import { MultiSelect } from '../MultiSelect/MultiSelect';
import { Tab } from '../Tab/Tab';
import { Tabs } from '../Tabs/Tabs';
import { Toggle } from '../Toggle/Toggle';
import './PageTemplate.scss';

interface IPageTemplate {
    isOpen: boolean;
    filmTitle: any;
    children: any;
    onClick: () => void;
}

export const PageTemplate: FC<IPageTemplate> = ({isOpen=false, filmTitle, children, onClick}) => {
    const dispatch = useAppDispatch();

    const handleToggleTheme = () => {
        dispatch(toggleThemeAction());
    }

    return (
        <Container>
                <Header filmTitle={filmTitle} isOpen={false} onClick={onClick}/>
                    {children}
                <Footer/>
        </Container>
            )
};
