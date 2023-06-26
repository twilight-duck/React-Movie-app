import { Component, FC, useState } from 'react';
import './Toggle.scss';


interface IToggle {
  isDisabled: boolean;
}

export const Toggle: FC<IToggle> = ({isDisabled=false}) => {
  const [isActive, setActive] = useState(false);
  
  const toggleActive = () => {
       setActive(!isActive);
    }

  const switchClass = `checkbox ${isActive && 'active'} ${isDisabled && 'disabled'}`

     return (
        
             <button className={switchClass} onClick={toggleActive} disabled={isDisabled}>
                <input type="checkbox" checked/>
            </button>
      

    )
};
