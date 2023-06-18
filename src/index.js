import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './login';
import Dashboard from './dashboard';
import Start from './dashboard/getstarted/start';
 import Submitform from './dashboard/submitform';
import Aboutstudent from './dashboard/aboutstudent';
import Aboutus from './dashboard/aboutus'; 






const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path="login" element={<Login />} />
        <Route path="dashboard" element={<Dashboard />} />
         <Route path='start'  element={<Start />}/>
        <Route path='submitform' element={<Submitform/>} />
        <Route path='aboutstudent' element={<Aboutstudent/>} />
        <Route path='aboutus' element={<Aboutus/>} /> 
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
