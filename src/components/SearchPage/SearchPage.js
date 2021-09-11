import './searchPage.scss';

import React from 'react';
import { Link } from 'react-router-dom';

import { BookCard } from "components/BookCard";

export function SearchPage({ results, totalItems }) {
    return (
        <div className='searchpage'>
            <p>Найдено {totalItems} книг</p>
            {results.map((book) =>
                <Link to={'/book/' + book.id} key={book.id}>
                    <BookCard
                        imagelink={book.volumeInfo?.imageLinks?.thumbnail}
                        title={book.volumeInfo?.title}
                        authors={book.volumeInfo?.authors}
                        categories={book.volumeInfo?.categories}
                        isExtended={false}
                    />
                </Link>
            )}
        </div>
    )
}