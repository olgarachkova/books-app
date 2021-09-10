import React, { useEffect, Fragment } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';

import { SearchPage } from 'components/searchPage';
import { Header } from 'components/header'
import { Footer } from 'components/footer'
import { GET_SEARCH_RESULTS } from "actions/booksActions"

import { gkey } from '../../../gkey';
import { gbooks_searchRequest } from 'api/gbooks'


export function SearchPageContainer({ history }) {
    //const searchQuery = useState(history.location.search.slice(12));
    const searchQuery = 'harry';
    const dispatch = useDispatch();

    useEffect(() => {
        async function getBooksByKeyword() {
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

    const results = useSelector(state => state.books.searchresults);

    return (
        <Fragment>
            <Header history={history} />
            <SearchPage results={results} />
            <Footer />
        </Fragment>
    )
}