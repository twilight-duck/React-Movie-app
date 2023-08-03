import { FC } from 'react';
import './Arrow.scss';
import { ReactComponent as ArrowIcon } from "../../assets/icons/Arrow.svg";
import { useAppSelector } from '../../store/hooks';
import { isDarkTheme } from '../../store/theme/selectors';

interface IArrow {
    isDisabled: boolean;
    handleClick: () => void;
}

export const Arrow: FC<IArrow> = ({isDisabled=false, handleClick}) => {
    const isDark = useAppSelector(isDarkTheme)

    const buttonClass = `arrow-button ${isDark ? 'dark' : 'light'} ${isDisabled && 'disabled'}`  
    return (
        <button className={buttonClass} disabled={isDisabled} onClick={handleClick}>
            <ArrowIcon/>
        </button>
    )
};
