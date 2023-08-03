import { FC, useEffect } from 'react';
import { Menu } from '../../components/Menu/Menu';
import { PageTemplate } from '../../components/PageTemplate/PageTemplate';
import './FavoritesPage.scss';
import { ReactComponent as FavoriteImg} from '../../assets/images/favorites.svg'
import { useSelector } from 'react-redux';
import { FilmCard } from '../../components/FilmCard/FilmCard';

interface IFavoritesPage {
}

export const FavoritesPage: FC<IFavoritesPage> = () => {
    const favorites = useSelector((state: any) => state.favorites || []);

    useEffect(() => {
       console.log(favorites.map((film: any) => film))
        },[])     

    return (
       <PageTemplate isOpen={false} filmTitle={''}  onClick={() => console.log('A click')}>
        {favorites.length === 0 ? (
              <div className='favorites-page'>
              <div className='favorites-page-content'>
              <Menu/>
              <div className='favorites-page-content_img'>
                  <FavoriteImg/>
                  <h3 className='favorites-page-content_text'>Добавьте сюда любимые фильмы</h3>
              </div>
              </div>
          </div>
        ): (
            <div className='favorites'>
                <Menu/>
                    <div className='favorites-list'>
                    {favorites.map((movie: any) => (
                        <FilmCard 
                            title={movie.name} 
                            year={movie.year} 
                            poster={movie.poster.url} 
                            id={movie.id} onClick={() => console.log('a click')} 
                            rating={movie.rating.imdb} 
                            genre={movie.genres[0].name}
                        />
                        ))}
                    </div>
            </div>
        )}
       </PageTemplate>
    )
};
