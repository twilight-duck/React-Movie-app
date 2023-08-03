import { FC, useState } from 'react';
import { useAppSelector } from '../../store/hooks';
import { isDarkTheme } from '../../store/theme/selectors';
import { Tab } from '../Tab/Tab';
import './Tabs.scss';

interface ITabs {

}

export const Tabs: FC<ITabs> = () => {
    const [tabs, setTabs] = useState([
        {id: 1, title: 'Year', isActive: false, isDisabled: true},
        {id: 2, title: 'Rating', isActive: true, isDisabled: false},
    ]);

    const isDark = useAppSelector(isDarkTheme)

    return (
        <ul className={`tabs ${isDark ? 'dark' : 'light'}`}>
            {tabs.map(({id, title, isActive, isDisabled}) => (
                    <Tab key={id} title={title} isActive={isActive} isDisabled={isDisabled} />
            ))}
        </ul>
    )
};
