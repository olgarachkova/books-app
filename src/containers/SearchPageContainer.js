import React, { useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';

import { SearchPage } from 'components/searchPage';
import { Header } from 'components/header'
import { Footer } from 'components/footer'
import { ContentBox } from 'components/ContentBox'
import { Loader } from 'components/Loader'
import { GET_SEARCH_RESULTS, LOADING } from "actions/booksActions"

import { gkey } from '../../../gkey';
import { gbooks_searchRequest } from 'api/gbooks'


export function SearchPageContainer({ history }) {
    const searchQuery = history.location.search.slice(8);
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
    const results = useSelector(state => state.books.searchresults);
    const totalItems = useSelector(state => state.books.totalItems);
    console.log(results);

    return (
        <>
            <Header history={history} />
            {loading ? <ContentBox><Loader /></ContentBox> : <SearchPage results={results} totalItems={totalItems} />}
            <Footer />
        </>
    )
}