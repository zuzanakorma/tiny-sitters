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
import Summary from './Components/Checkout/Summary';
import Signup from './Components/Auth/Signup';
import Signin from './Components/Auth/Signin';
import ClientForm from './Components/ClientForm/ClientForm';
import Checkout from './Components/Checkout/Checkout';
import SuccessPage from './Components/SuccessPage/SuccessPage';
import { Provider } from 'react-redux';
import { store } from './Components/store';
import Profile from './Components/Profile/Profile';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
     <BrowserRouter>
     <Provider store={store}>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Signin />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/sitters" element={<Sitters />} />
        <Route path="/selectedsitter" element={<SelectedSitter />} />

        <Route path="/client" element={<ClientForm />} />
        <Route path="/summary" element={<Summary />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/success" element={<SuccessPage />} />
         <Route path="/profile" Component={Profile} />

      
      </Routes>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
