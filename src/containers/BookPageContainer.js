import React, { useEffect, Fragment } from "react";
import axios from 'axios';
import { useParams } from "react-router";
import { useSelector, useDispatch } from 'react-redux';

import { BookPage } from 'components/BookPage'
import { Header } from 'components/header'
import { Footer } from 'components/footer'
import { GET_BOOK_INFO } from "actions/booksActions"

import { gbooks_volumeByID } from "api/gbooks";

export function BookPageContainer({ history }) {
    const { bookID } = useParams(); // /book/:bookid

    const dispatch = useDispatch();

    /**
     * запрос к апи google books, получение информации о книге по Volume ID
     */
    useEffect(() => {
        async function getBookInfo() {
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
    const bookInfo = useSelector(state => state.books.currentBook);

    return (
        <Fragment>
            <Header history={history} />
            <BookPage bookInfo={bookInfo} />
            <Footer />
        </Fragment>
    )
}

/*<BookPage bookInfo={bookInfo} />*/
/*{bookInfo.map((book) => {
                <BookPage bookInfo={book} />
            })}*/