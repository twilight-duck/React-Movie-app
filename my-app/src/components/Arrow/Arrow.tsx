import { FC } from 'react';
import './Arrow.scss';
import { ReactComponent as ArrowIcon } from "../../assets/icons/Arrow.svg";

interface IArrow {
    isDisabled: boolean;
    handleClick: () => void;
}

export const Arrow: FC<IArrow> = ({isDisabled=false, handleClick}) => {

    const buttonClass = `arrow-button ${isDisabled && 'disabled'}`    
    return (
        <button className={buttonClass} disabled={isDisabled} onClick={handleClick}>
            <ArrowIcon/>
        </button>
    )
};
