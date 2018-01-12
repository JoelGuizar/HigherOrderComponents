import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, browserHistory } from 'react-router';

import requireAuth from './components/HOC/require_auth'
import App from './components/app';
import Resources from './components/resources';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);
//Component + Higher Component (usually a wrapper) =
//Super Component w/adtl functionality
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory}>
      <Route path="/" component={App}/>
      //if every instance of Resource needs a requireAuthwrapper
      //it is better to just wrap it in the Resource component,
      //and then export the wrapped Resource component
      <Route path="resources" component={requireAuth(Resources)}/>
    </Router>
  </Provider>
  , document.querySelector('.container'));
