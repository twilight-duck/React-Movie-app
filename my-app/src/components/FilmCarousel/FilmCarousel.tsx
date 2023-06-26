import { isDisabled } from '@testing-library/user-event/dist/utils';
import { FC, useEffect, useState, Children, cloneElement } from 'react';
import { Arrow } from '../Arrow/Arrow';
import './FilmCarousel.scss';

interface IFilmCarousel {
    children: any;
}

const PAGE_WIDTH = 306;

export const FilmCarousel: FC<IFilmCarousel> = ({children}) => {
    const [pages, setPages] = useState([]);
    const [offset, setOffset] = useState(0);

    const handleLeftArrowClick = () => {
        setOffset((currentOffset) => {
            const newOffset = currentOffset + PAGE_WIDTH

            return Math.min(newOffset, 0);
        })
    }
    
    
    const handleRightArrowClick = () => {
        setOffset((currentOffset) => {
            const newOffset = currentOffset - PAGE_WIDTH

            const maxOffset = -(PAGE_WIDTH * (pages.length - 4));
            console.log(newOffset, maxOffset)
            return Math.max(newOffset, maxOffset);
        })
    }

    let isDisabledLeft = false;
    let isDisabledRight= false;

    if(offset === 0 ){
       isDisabledLeft = true;
    } else if (offset === -(PAGE_WIDTH * (pages.length - 4))){
        isDisabledRight = true
    }
    


    useEffect(() => {
        setPages(
            Children.map(children, child => {
                return cloneElement(child, {
                    style: {
                        height: '100%',
                        // minWidth: `${PAGE_WIDTH}px`,
                        maxWidth: `${PAGE_WIDTH}px`
                    }
                })
            })
        )
    }, [])


    return (
        <div className='film-carousel'>
             <div className='recommendations-wrapper'>
                <h3 className='recommendations-title'>Recommendations</h3>
                <div className='recommendations-controls'>
                    <div className='arrow-left'>
                        <Arrow isDisabled={isDisabledLeft} handleClick={handleLeftArrowClick}/>
                    </div>
                    <Arrow isDisabled={isDisabledRight} handleClick={handleRightArrowClick}/>
                </div> 
             </div>
           
             <div className='main-container'>
                <div className='window'>
                    <div className='all-pages-container'
                        style={{
                            transform: `translateX(${offset}px)`,
                            transition: 'all ease 0.3s'
                        }}>
                    {pages}
                    </div>
                </div>
            </div>
        </div>
       )
};
