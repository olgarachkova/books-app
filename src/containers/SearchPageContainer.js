import React, { useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from "react-router-dom";

import { SearchPage } from 'components/SearchPage';
import { Loader } from 'components/Loader'
import { Error } from 'components/Error'
import { GET_SEARCH_RESULTS, LOADING } from "actions/booksActions"

import { gkey } from 'api/gkey';
import { gbooks_searchRequest } from 'api/gbooks'


export function SearchPageContainer() {
    const searchQuery = (new URLSearchParams(useLocation().search)).get('search');
    const dispatch = useDispatch();

    useEffect(() => {
        async function getBooksByKeyword() {
            dispatch({
                type: LOADING
            });
            try {
                const response = await axios.get(gbooks_searchRequest + searchQuery + gkey);
                dispatch({
                    type: GET_SEARCH_RESULTS,
                    payload: response.data
                });
            } catch (error) {
                console.error(error);
            }
        }
        getBooksByKeyword();
    }, [searchQuery]);

    const loading = useSelector(state => state.books.loading);
    const error = useSelector(state => state.books.error);
    const results = useSelector(state => state.books.searchResults);
    const totalItems = useSelector(state => state.books.totalItems);

    return (
        <>
            {error && <Error />}
            {loading && !error && <Loader />}
            {!loading && !error && <SearchPage results={results} totalItems={totalItems} />}
        </>
    )
}