import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "./styles.css";
import {BrowserRouter as Router} from 'react-router-dom'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router basename={process.env.PUBLIC_URL}> 
      <App />
    </Router>
  </React.StrictMode>
);




//  <BrowserRouter basename={process.env.PUBLIC_URL}>   배포했을때 빈화면이 나온다면 basepage를 지정해주지 않아서이다 . 
//<Router basename={process.env.PUBLIC_URL}>  
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
