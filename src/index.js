import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import counterReducer from './reducers/counterReducer';
import nameReducer from './reducers/nameReducer';
import postReducer from './reducers/postReducer';
import thunk from 'redux-thunk';


//todo: ayrı bir dosyaya al.
var rootReducer = combineReducers({
  counterReducer,
  nameReducer,
  posts: postReducer
})
const store = createStore(rootReducer, { count: 0, name: '' }, applyMiddleware(thunk))



ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
