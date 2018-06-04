import { combineReducers } from 'redux';

import ActiveBook from './reducer_active_book';
import BooksReducer from './reducer_books';

export const rootReducer = combineReducers({
    // any key here ends up as a key in our global state
    books: BooksReducer,
    activeBook: ActiveBook
});

