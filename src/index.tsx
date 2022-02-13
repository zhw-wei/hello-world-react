import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { Router, Route, BrowserRouter, Link } from 'react-router-dom'

ReactDOM.render(
  //strict-mode 严格模式
  <React.StrictMode>
    {/* App最外层包裹了一个BrowserRouter或HashRouter */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//页面性能检测
reportWebVitals();
