import React from 'react';
import './App.css';
import LogIn from './Components/LogIn/LogIn';
import Register from './Components/Register/Register';
import Calendar from './Components/Calendar/Calendar';
import Header from './Components/Header/Header';
import { Link } from 'react-router-dom';

function App() {
  return (
    <>
    <Header/>
    <h1 className='main__title'>You go out... <br /> we take care <br /> of your <br /> little ones </h1>
    <div className='main__btns'>
      <Link className='main__link' to='/login'>LogIn</Link>
      <Link className='main__link' to='/register'>Create Account</Link>
      <Link className='main__link pick__date' to='/calendar'>Pick Date</Link>
      </div>
    </>
  );
}

export default App;
