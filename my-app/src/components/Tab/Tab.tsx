import { FC } from 'react';
import { useAppSelector } from '../../store/hooks';
import { isDarkTheme } from '../../store/theme/selectors';
import './Tab.scss';

interface ITab {
    title: string;
    isActive?: boolean;
    isDisabled?: boolean;
}

export const Tab: FC<ITab> = ({title, isActive = false, isDisabled = false}) => {
    const buttonClass = `tab ${isDisabled && 'disabled'} ${isActive && 'active'}`;

    const isDark = useAppSelector(isDarkTheme)

    return <li className={`${buttonClass} ${isDark ? 'dark' : 'light'}`}>{title}</li>
};
