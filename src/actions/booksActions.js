import axios from "axios";

import { setSearchResults, setBookInfo, setLoading, setFetchError } from 'reducers/booksReducer';
import { gkey } from 'api/gkey';

export const getBooksByKeyword = (searchQuery, subject = '', startIndex = 0, maxResults = 30, orderBy = 'relevance') => {
    return async (dispatch) => {
        try {
            dispatch(setLoading(true));
            const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchQuery}${subject}&startIndex=${startIndex}&maxResults=${maxResults}&orderBy=${orderBy}&key=${gkey}`);
            console.log(`https://www.googleapis.com/books/v1/volumes?q=${searchQuery}${subject}&startIndex=${startIndex}&maxResults=${maxResults}&orderBy=${orderBy}&key=${gkey}`);
            dispatch(setSearchResults(response.data));
        } catch (error) {
            dispatch(setFetchError(true));
            dispatch(setLoading(false));
            setTimeout(() => {
                dispatch(setFetchError(false));
            }, 2000)
        }
    }
}

export const getBookInfo = (bookID) => {
    return async (dispatch) => {
        try {
            dispatch(setLoading(true));
            const response = await axios.get(`https://www.googleapis.com/books/v1/volumes/${bookID}`);
            dispatch(setBookInfo(response.data));
        } catch (error) {
            dispatch(setFetchError(true));
            dispatch(setLoading(false));
            setTimeout(() => {
                dispatch(setFetchError(false));
            }, 2000)
        }
    }
}