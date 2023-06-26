import { FC, useState } from 'react';
import { Tab } from '../Tab/Tab';
import './Tabs.scss';

interface ITabs {
}

export const Tabs: FC<ITabs> = () => {
    const [tabs, setTabs] = useState([
        {id: 1, title: 'Text 1', isActive: false, isDisabled: true},
        {id: 2, title: 'Text 2', isActive: true, isDisabled: false},
    ]);

    return (
        <ul className='tabs'>
            {tabs.map(({id, title, isActive, isDisabled}) => (
                    <Tab key={id} title={title} isActive={isActive} isDisabled={isDisabled} />
            ))}
        </ul>
    )
};
