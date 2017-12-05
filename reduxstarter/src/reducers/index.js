import { combineReducers } from 'redux';
import BookReducers from './books'
import ActiveBook from './active_book'

const rootReducer = combineReducers({
  books: BookReducers,
  activeBook: ActiveBook
});

export default rootReducer;
