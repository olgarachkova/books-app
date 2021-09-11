import React, { useEffect, Fragment } from "react";
import axios from 'axios';
import { useParams } from "react-router";
import { useSelector, useDispatch } from 'react-redux';

import { BookPage } from 'components/BookPage'
import { Header } from 'components/header'
import { Footer } from 'components/footer'
import { ContentBox } from 'components/ContentBox'
import { Loader } from 'components/Loader'
import { GET_BOOK_INFO, LOADING } from "actions/booksActions"

import { gbooks_volumeByID } from "api/gbooks";

export function BookPageContainer({ history }) {
    const { bookID } = useParams(); // /book/:bookid

    const dispatch = useDispatch();

    /**
     * запрос к апи google books, получение информации о книге по Volume ID
     */
    useEffect(() => {
        async function getBookInfo() {
            dispatch({
                type: LOADING
            });
            try {
                const response = await axios.get(gbooks_volumeByID + bookID);
                dispatch({
                    type: GET_BOOK_INFO,
                    payload: response.data
                });
            } catch (error) {
                console.error(error);
            }
        }

        getBookInfo();
    }, []);

    const loading = useSelector(state => state.books.loading);
    const bookInfo = useSelector(state => state.books.currentBook);

    return (
        <Fragment>
            <Header history={history} />
            {loading ? <ContentBox><Loader /></ContentBox> : <BookPage bookInfo={bookInfo} />}
            <Footer />
        </Fragment>
    )
}