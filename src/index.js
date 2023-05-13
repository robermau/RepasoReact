import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.css';
import { configureStore as createStore } from '@reduxjs/toolkit';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import counterReducer from './reducers/countReducer';


const store = createStore({reducer: counterReducer} )

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </Provider>
);
