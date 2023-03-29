import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import App from './App';
import './index.css';
import './app.scss';
import Calendar from './Components/Calendar/Calendar';
import Sitters from './Components/Sitters/Sitters';
import SelectedSitter from './Components/Sitters/SelectedSitter';
import Signup from './Components/Auth/Signup';
import Signin from './Components/Auth/Signin';
// import reportWebVitals from './reportWebVitals';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
     <BrowserRouter>
      <Routes>
        <Route path="/" Component={App} />
        <Route path="/login" Component={Signin} />
        <Route path="/register" Component={Signup} />
        <Route path="/calendar" Component={Calendar} />
        <Route path="/sitters" Component={Sitters} />
        <Route path="/selectedsitter" Component={SelectedSitter} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
