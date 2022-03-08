import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom"
import {CartContextProvider} from './context/cartContext';

ReactDOM.render(
  <React.StrictMode>
    <CartContextProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </CartContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

