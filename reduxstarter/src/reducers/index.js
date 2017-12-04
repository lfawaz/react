import { combineReducers } from 'redux';
import BookReducers from './books'

const rootReducer = combineReducers({
  books: BookReducers
});

export default rootReducer;
