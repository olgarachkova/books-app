import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, Redirect } from "react-router-dom";

import { SearchPage } from 'components/SearchPage';
import { Loader } from 'components/Loader'
import { getBooksByKeyword } from "actions/booksActions"

export function SearchPageContainer() {
    const searchQuery = (new URLSearchParams(useLocation().search)).get('search');
    const dispatch = useDispatch();

    const loading = useSelector(state => state.books.loading);
    const error = useSelector(state => state.books.error);
    const results = useSelector(state => state.books.searchResults);
    const totalItems = useSelector(state => state.books.totalItems);

    useEffect(() => {
        dispatch(getBooksByKeyword(searchQuery));
    }, [searchQuery]);

    if (error) {
        return <Redirect to='/error' />
    }

    return (
        <>
            {loading && <Loader />}
            {!loading && <SearchPage results={results} totalItems={totalItems} />}
        </>
    )
}