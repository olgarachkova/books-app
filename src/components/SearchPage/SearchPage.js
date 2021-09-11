import './searchPage.scss';

import React from 'react';
import { Link } from 'react-router-dom';

import { ContentBox } from 'components/ContentBox'
import { BookCard } from "components/BookCard";

export function SearchPage({ results, totalItems }) {
    return (
        <ContentBox>
            <div className='searchpage'>
                <p>Найдено {totalItems} книг</p>
                {results.map((book) =>
                    <Link to={'/book/' + book.id} key={book.id}>
                        <BookCard {...book} />
                    </Link>
                )}
            </div>
        </ContentBox>
    )
}