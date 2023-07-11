import { FC } from 'react';
import './Pagination.scss';

interface IPagination {
    pagesCount: number;
    page: number;
    handleNextClick: () => void;
}

export const Pagination: FC<IPagination> = ({ pagesCount, page, handleNextClick}) => {
    const totalPages = 281764;
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    const visiblePages = pageNumbers.filter((pageNumber) => (
        pageNumber === 1 ||
        pageNumber === page ||
        pageNumber === totalPages ||
        Math.abs(pageNumber - page) <= 2
    ));

    return (
        <>
      
        </>
    )
};
