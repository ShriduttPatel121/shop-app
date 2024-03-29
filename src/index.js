import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import productsReducer from './store/reducer/products';
import cartReducer from './store/reducer/cart';
import userReducer from './store/reducer/user';

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  user: userReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));


const app = (
  <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>)

ReactDOM.render(
  app,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
