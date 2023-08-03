import { FC } from 'react';
import './ButtonsGroup.scss';
import { ReactComponent as FavoritesIcon } from "../../assets/icons/Bookmark.svg";
import { ReactComponent as ShareIcon } from "../../assets/icons/Share.svg";

interface IButtonsGroup {
    addFavorites: () => void;
    removeFavorites: () => void;
    isFavorite: boolean;
}

export const ButtonsGroup: FC<IButtonsGroup> = ({addFavorites,  removeFavorites, isFavorite}) => {

    const handleClick = () => {
        if (isFavorite) {
            removeFavorites();
        } else {
            addFavorites();
        }
      };

    return (
        <div className='button-group'>
            <button className='favorites-button' onClick={handleClick}>
                <FavoritesIcon/>
            </button>
            <button className='share-button'>
                <ShareIcon/>
            </button>
        </div>
    )
};
