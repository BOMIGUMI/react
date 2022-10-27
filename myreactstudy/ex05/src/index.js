import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
// BrowserRouter : 컴포넌트에서 Router 기능을 사용할 수 있게 만들어줌

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />         {/* // BrowserRouter는 App컴포넌트 안에서 라우터기능을 사용할수 있게 만들어줌 : 다른 컴포넌트에 주소값을 만들어 줄 수 있음 */}
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
