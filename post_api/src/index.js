import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise'
import { BrowserRouter, Route, Switch} from 'react-router-dom'

import PostList from './containers/post_list'
import PostNew from './containers/post_new'
import reducers from './reducers/index'

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(createStore);


ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
  <BrowserRouter>
    <div>
    <Switch>
      <Route path='/post/new' component={PostNew}/>
      <Route path='/' component={PostList}/>
      </Switch>

    </div>
    </BrowserRouter>
    </Provider>
    , document.querySelector('.container'));
