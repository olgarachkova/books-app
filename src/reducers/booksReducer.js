import { GET_BOOK_INFO, GET_SEARCH_RESULTS } from "actions/booksActions"

const initialState = {
    loading: false,
    currentBook: {},
    searchresults: []
};

export const booksReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_BOOK_INFO: {
            return {
                ...state,
                currentBook: action.payload
            };
        }
        case GET_SEARCH_RESULTS: {
            return {
                ...state,
                searchresults: action.payload.items
            };
        }
        default:
            return (state);
    }
}