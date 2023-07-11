import { isDisabled } from '@testing-library/user-event/dist/utils';
import { FC, useEffect, useState, Children, cloneElement, ReactNode } from 'react';
import { Arrow } from '../Arrow/Arrow';
import './FilmCarousel.scss';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


interface IFilmCarousel {
    children: ReactNode;
    title: string;
}

export const FilmCarousel: FC<IFilmCarousel> = ({children, title}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: Math.min(4),
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: true,
    autoplaySpeed: 4000,
    nextArrow: <button></button>,
    prevArrow: <button></button>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: Math.min(4),
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: Math.min(4),
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: Math.min(4),
        },
      },
    ],
  };

    return (
      <Slider>
        {children}
      </Slider>
       )
};
