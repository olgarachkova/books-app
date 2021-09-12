export const SET_BOOK_INFO = 'SET_BOOK_INFO';
export const SET_SEARCH_RESULTS = 'SET_SEARCH_RESULTS';
export const SET_LOADING = 'SET_LOADING';
export const SET_FETCH_ERROR = 'SET_FETCH_ERROR';

const initialState = {
    loading: false,
    error: false,
    currentBook: {},
    searchResults: [],
    totalItems: 0,
};

export const booksReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_BOOK_INFO: {
            return {
                ...state,
                loading: false,
                currentBook: action.payload
            };
        }
        case SET_SEARCH_RESULTS: {
            let items = [];
            if (action.payload.items) { items = action.payload.items };

            return {
                ...state,
                loading: false,
                searchResults: items,
                totalItems: action.payload.totalItems,
            };
        }
        case SET_LOADING: {
            return {
                ...state,
                loading: true
            };
        }
        case SET_FETCH_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}

export const setSearchResults = (results) => ({ type: SET_SEARCH_RESULTS, payload: results });
export const setBookInfo = (book) => ({ type: SET_BOOK_INFO, payload: book });
export const setLoading = (bool) => ({ type: SET_LOADING, payload: bool });
export const setFetchError = (bool) => ({ type: SET_FETCH_ERROR, payload: bool });