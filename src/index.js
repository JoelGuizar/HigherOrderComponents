import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, browserHistory } from 'react-router';

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
      <Route path="resources" component={Resources}/>
    </Router>
  </Provider>
  , document.querySelector('.container'));
