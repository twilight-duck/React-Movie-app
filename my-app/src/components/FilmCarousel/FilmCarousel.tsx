import { isDisabled } from '@testing-library/user-event/dist/utils';
import { FC, useEffect, useState, Children, cloneElement, ReactNode } from 'react';
import { Arrow } from '../Arrow/Arrow';
import './FilmCarousel.scss';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import avengers from "../../assets/images/avengers.svg";


interface IFilmCarousel {
    title: string;
    children: any;
}

export const FilmCarousel: FC<IFilmCarousel> = ({title, children}) => {

  const PAGE_WIDTH = 290

  const [pages, setPages] = useState([])
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    setPages(
      Children.map(children, (child) => {
        return cloneElement(child, {
          style: {
            minWidth: `${PAGE_WIDTH}px`,
            maxWidth: `${PAGE_WIDTH}px`,
            height: '100%',
          },
        })
      })
    )
  }, [children])

  const handleLeftArrowClick = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset + PAGE_WIDTH
      console.log(newOffset)
      return Math.min(newOffset, 0)
    })
  }
  const handleRightArrowClick = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset - PAGE_WIDTH

      const maxOffset = -(PAGE_WIDTH * (pages.length - 4))

      console.log(newOffset, maxOffset)
      return Math.max(newOffset, maxOffset)
    })
  }
 
return (   
  <div className='recommendations'>
  <div className='wrapper'>
  <h2 className='title'>{title}</h2>
    <div className='controls'>
        <button className='arrow-left'><Arrow isDisabled={false} handleClick={handleLeftArrowClick} /></button>
        <Arrow isDisabled={false} handleClick={handleRightArrowClick} />
    </div>
</div>
  <div className="main-container">
      <div className="window">
        <div
          className="all-pages-container"
          style={{
            transform: `translateX(${offset}px)`,
          }}
        >
          {pages}
        </div>
      </div>
    </div>
  </div>
       )
}
