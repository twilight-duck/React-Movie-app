import { FC, useState } from 'react';
import './ModalSorting.scss';
import { ReactComponent as CancelIcon } from "../../assets/icons/cancel.svg";
import { ButtonsGroup } from '../ButtonGroup/ButtonsGroup';
import { Tabs } from '../Tabs/Tabs';
import { Input } from '../Input/Input';
import { MultiSelect } from '../MultiSelect/MultiSelect';
import { Button } from '../Button/Button';
import { useAppSelector } from '../../store/hooks';
import { isDarkTheme } from '../../store/theme/selectors';


interface IModalSorting {
    isActive: boolean;
    setIsactive: () => void;
    onClick: () => void;
    filmName: any;
    yearFrom: any;
    yearTo: any;
    ratingFrom: any;
    ratingTo: any;
    options: string[];
}

export const ModalSorting: FC<IModalSorting> = ({isActive, setIsactive, onClick, filmName, yearFrom, yearTo, ratingFrom, ratingTo, options}) => {

    const [value, setValue] = useState('');
    

    const handleChange = (newValue: string) =>{
        setValue(newValue);
    }

    const isDark = useAppSelector(isDarkTheme)
   

    return (
        <div className={`modal ${isActive && 'active'}`} onClick={onClick}>
            <div className={`modal-content ${isDark ? 'dark' : 'light'}`} onClick={e => e.stopPropagation()}>
                <div className='modal-content-top'>
                    <h3 className='modal-content-top-title'>Filters</h3>
                    <button onClick={onClick}><CancelIcon/></button>
                </div>
                <div className='modal-content-sortby'>
                    <h5 className='modal-content-sortby-title'>Сортировать по</h5>
                    <Tabs/>
                </div>
                <div className='modal-content-movie_name'>
                    <h4 className='modal-content-title'>Часть названия либо полное название фильма</h4>
                <input 
                        type="text" 
                        className={`modal-content-input ${isDark ? 'dark' : 'light'}`}
                        placeholder='Ваш текст'
                        disabled={false}
                        onChange={(e) => filmName(e.target.value)}
                />
                </div>
                {/* <div className='modal-content-genre_select'>
                    <MultiSelect title='Жанр' options={options}/>
                </div> */}
                <div className='modal-content-years'>
                <h4 className='modal-content-title'>Год</h4>
                    <div className='modal-content-years-inputs'>
                        <input 
                            type="text" 
                            className={`modal-content-input ${isDark ? 'dark' : 'light'}`}
                            placeholder='От'
                            disabled={false}
                            onChange={(e) => yearFrom(e.target.value)}
                        />
                        <input 
                            type="text" 
                            className={`modal-content-input ${isDark ? 'dark' : 'light'}`}
                            placeholder='До'
                            disabled={false}
                            onChange={(e) => yearTo(e.target.value)}
                        />
                    </div>
                </div>
                <div className='modal-content-rating'>
                    <h4 className='modal-content-title'>Рейтинг</h4>
                    <div className='modal-content-rating-inputs'>
                        <input 
                            type="text" 
                            className={`modal-content-input ${isDark ? 'dark' : 'light'}`}
                            placeholder='От'
                            disabled={false}
                            onChange={(e) => ratingFrom(e.target.value)}
                        />
                        <input 
                            type="text" 
                            className={`modal-content-input ${isDark ? 'dark' : 'light'}`}
                            placeholder='До'
                            disabled={false}
                            onChange={(e) => ratingTo(e.target.value)}
                        />
                    </div>
                </div>
                <div className='modal-content-buttons'>
                   <Button type={'secondary'} content={'Очистить фильтры'} onClick={onClick}/>
                   <Button type={'primary'} content={'Показать результаты'} onClick={onClick}/>
                </div>
            </div>
        </div>
    )
};
