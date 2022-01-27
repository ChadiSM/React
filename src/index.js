import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//reactdom = voy a usar react para pintar algo en pantalla, en este caso, imagen, texto y enlace de la pagina principal
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

