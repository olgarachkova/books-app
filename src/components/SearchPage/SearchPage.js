import './searchPage.scss';

import React from 'react';
import { Link } from 'react-router-dom';

import { BookCard } from "components/BookCard";

export function SearchPage({ results }) {
    return (
        <main className='content'>
            <div className='container'>
                <div className='searchpage'>
                    {results.map((book) =>
                        <a to={'/book/' + book.id} key={book.id}>
                            <BookCard {...book} />
                        </a>
                    )}
                </div>
            </div>
        </main>
    )
}