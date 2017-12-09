import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise'
import { BrowserRouter, Route} from 'react-router-dom'

import PostList from './containers/post_list'
import reducers from './reducers/index'

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(createStore);


ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
  <BrowserRouter>
    <div>
      <Route path='/' component={PostList}/>
    </div>
    </BrowserRouter>
    </Provider>
    , document.querySelector('.container'));
