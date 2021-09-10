import { combineReducers } from "redux";

import { booksReducer } from "reducers/booksReducer";

export const rootReducer = combineReducers({
    books: booksReducer,
});