import { FC } from 'react';
import './ButtonsGroup.scss';
import { ReactComponent as FavoritesIcon } from "../../assets/icons/Bookmark.svg";
import { ReactComponent as ShareIcon } from "../../assets/icons/Share.svg";

interface IButtonsGroup {
}

export const ButtonsGroup: FC<IButtonsGroup> = () => {
    return (
        <div className='button-group'>
            <button className='favorites-button'>
                <FavoritesIcon/>
            </button>
            <button className='share-button'>
                <ShareIcon/>
            </button>
        </div>
    )
};
