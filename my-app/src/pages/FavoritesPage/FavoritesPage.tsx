import { FC } from 'react';
import { Menu } from '../../components/Menu/Menu';
import { PageTemplate } from '../../components/PageTemplate/PageTemplate';
import './FavoritesPage.scss';
import { ReactComponent as FavoriteImg} from '../../assets/images/favorites.svg'

interface IFavoritesPage {
}

export const FavoritesPage: FC<IFavoritesPage> = () => {
    return (
       <PageTemplate isOpen={false} filmTitle={''}  onClick={() => console.log('A click')}>
            <div className='favorites-page'>
                <div className='favorites-page-content'>
                <Menu/>
                <div className='favorites-page-content_img'>
                    <FavoriteImg/>
                    <h3 className='favorites-page-content_text'>Добавьте сюда любимые фильмы</h3>
                </div>
                </div>
            </div>
       </PageTemplate>
    )
};
