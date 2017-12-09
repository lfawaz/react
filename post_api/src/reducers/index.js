import { combineReducers } from 'redux'
import PostList from './reducer_posts'
const rootReducer = combineReducers({
  PostList : PostList
});

export default rootReducer
