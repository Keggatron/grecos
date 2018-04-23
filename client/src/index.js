import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import reduxThunk from 'redux-thunk';
import composeWithDevTools from 'redux-devtools-extension';

import App from './components/App';
import reducers from './reducers';


const store = createStore(
  reducers, 
  {}, 
  compose(
    (applyMiddleware(reduxThunk)),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.querySelector('#root'));

