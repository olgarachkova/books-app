import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from "react-router-dom";

import { BookCard } from "components/BookCard";
import { Loader } from 'components/Loader'
import { getBookInfo } from "actions/booksActions"

export function BookPageContainer() {
    const { bookID } = useParams();
    const dispatch = useDispatch();

    const loading = useSelector(state => state.books.loading);
    const bookInfo = useSelector(state => state.books.currentBook);
    const error = useSelector(state => state.books.error);

    useEffect(() => {
        dispatch(getBookInfo(bookID));
    }, [bookID]);

    if (error) {
        return <Redirect to='/error' />
    }

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