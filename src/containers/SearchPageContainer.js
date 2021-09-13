import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, Redirect } from "react-router-dom";

import { SearchPage } from 'components/SearchPage';
import { Loader } from 'components/Loader'
import { Button } from 'components/Button';
import { getBooksByKeyword, clear } from "actions/booksActions"

export function SearchPageContainer() {
    const searchParams = new URLSearchParams(useLocation().search);
    const searchQuery = searchParams.get('search');
    const orderBy = searchParams.get('orderBy');
    const subject = searchParams.get('subject');
    const dispatch = useDispatch();

    const maxResults = 30;
    const [startIndex, setStartIndex] = useState(0);
    const [isFetchingNeeded, setIsFetchingNeeded] = useState(true);

    const loading = useSelector(state => state.books.loading);
    const error = useSelector(state => state.books.error);
    const results = useSelector(state => state.books.searchResults);
    const totalItems = useSelector(state => state.books.totalItems);

    useEffect(() => {
        dispatch(clear());
    }, [searchQuery, orderBy, subject]);

    useEffect(() => {
        let category = '';
        if (subject !== 'all') {
            category = `+subject:${subject}`;
        }
        dispatch(getBooksByKeyword(searchQuery, category, startIndex, maxResults, orderBy));
    }, [startIndex, searchQuery, orderBy, subject]);

    useEffect(() => {
        (startIndex + maxResults > totalItems) ? setIsFetchingNeeded(false) : setIsFetchingNeeded(true);
    }, [totalItems]);

    const handleLoadMore = () => {
        setStartIndex(startIndex + maxResults);
    }

    if (error) {
        return <Redirect to='/error' />
    }

    return (
        <>
            <SearchPage results={results} totalItems={totalItems} />
            {loading && <Loader />}
            {isFetchingNeeded && <Button type='button' onClick={handleLoadMore}>Load more</Button>}
        </>
    )
}