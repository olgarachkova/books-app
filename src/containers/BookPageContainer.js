import React, { useEffect } from "react";
import axios from 'axios';
import { useParams } from "react-router";
import { useSelector, useDispatch } from 'react-redux';

import { BookCard } from "components/BookCard";
import { Loader } from 'components/Loader'
import { GET_BOOK_INFO, LOADING } from "actions/booksActions"

import { gbooks_volumeByID } from "api/gbooks";

export function BookPageContainer() {
    const { bookID } = useParams();

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
        <>
            {loading && <Loader />}
            {!loading && <BookCard
                imagelink={bookInfo.volumeInfo?.imageLinks?.thumbnail}
                title={bookInfo.volumeInfo?.title}
                authors={bookInfo.volumeInfo?.authors}
                categories={bookInfo.volumeInfo?.categories}
                description={bookInfo.volumeInfo?.description}
                isExtended={true}
            />}
        </>
    )
}