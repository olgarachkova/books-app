import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, Redirect } from "react-router-dom";

import { SearchPage } from 'components/SearchPage';
import { Loader } from 'components/Loader'
import { Button } from 'components/Button';
import { getBooksByKeyword } from "actions/booksActions"

export function SearchPageContainer() {
    const searchQuery = (new URLSearchParams(useLocation().search)).get('search');
    const orderBy = (new URLSearchParams(useLocation().search)).get('orderBy');
    const subject = (new URLSearchParams(useLocation().search)).get('subject');
    const dispatch = useDispatch();

    const maxResults = 30;
    const [startIndex, setStartIndex] = useState(0);
    const [isFetchingNeeded, setIsFetchingNeeded] = useState(true);

    const loading = useSelector(state => state.books.loading);
    const error = useSelector(state => state.books.error);
    const results = useSelector(state => state.books.searchResults);
    const totalItems = useSelector(state => state.books.totalItems);

    useEffect(() => {
        let category = '';
        if (subject !== 'all') {
            category = `+subject:${subject}`;
        }
        dispatch(getBooksByKeyword(searchQuery, category, startIndex, maxResults, orderBy));
    }, [startIndex, orderBy, subject]);

    useEffect(() => {
        if (startIndex + maxResults > totalItems) {
            setIsFetchingNeeded(false)
        } else {
            setIsFetchingNeeded(true)
        };
    }, [totalItems]);

    if (error) {
        return <Redirect to='/error' />
    }

    const handleLoadMore = () => {
        setStartIndex(startIndex + maxResults);
    }

    return (
        <>
            {loading && <Loader />}
            {!loading && <SearchPage results={results} totalItems={totalItems} />}
            {isFetchingNeeded && <Button onClick={handleLoadMore}>Load more</Button>}
        </>
    )
}