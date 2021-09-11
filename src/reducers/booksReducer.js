import { GET_BOOK_INFO, GET_SEARCH_RESULTS, LOADING } from "actions/booksActions"

const initialState = {
    loading: false,
    currentBook: {},
    searchresults: [],
    totalItems: 0,
};

export const booksReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_BOOK_INFO: {
            return {
                ...state,
                loading: false,
                currentBook: action.payload
            };
        }
        case GET_SEARCH_RESULTS: {
            return {
                ...state,
                loading: false,
                searchresults: action.payload.items,
                totalItems: action.payload.totalItems,
            };
        }
        case LOADING: {
            return {
                ...state,
                loading: true
            };
        }
        default:
            return state;
    }
}