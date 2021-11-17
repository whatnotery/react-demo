import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Lottery from './Lottery';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Lottery maxBalls="6" maxNum="40" />
    <Lottery maxBalls="4" maxNum="10"/>
    <Lottery maxBalls="1" maxNum="75" title="Bingo"/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
