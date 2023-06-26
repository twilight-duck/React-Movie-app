import { FC } from 'react';
import { useAppContext } from '../../contexts/AppContext';
import './Input.scss';

interface IInput {
    value: string;
    handleChange: (newValue: string) => void;
    title: string;
    placeholder?: string;
    isDisabled?: boolean;
    errorMessage?: string;
}

export const Input: FC<IInput> = ({value, handleChange, title, placeholder, isDisabled=false, errorMessage}) => {

    const { toggleTheme, isDarkTheme } = useAppContext();

    return (
        <div className='input-wrapper'>
            <label className='label' htmlFor="input-text">{title}</label>
            <input 
            className={`input ${errorMessage && "error"} ${isDarkTheme() ? 'dark' : 'light'}`}
            placeholder={placeholder}
            disabled={isDisabled}
            id='input-text'
            value={value}
            onChange={(e) => handleChange(e.target.value)}
            type="text"
             />
             {errorMessage && <div className='errorMessage'>{errorMessage}</div>}
        </div>
    )
};
