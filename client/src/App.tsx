import React from 'react';
import logo from './logo.svg';
import './App.css';
import LogIn from './Components/LogIn/LogIn';
import Register from './Components/Register/Register';
import Calendar from './Components/Calendar/Calendar';

function App() {
  return (
    <>
    <div className="App">
      Hello Tiny Sitters
    </div>
    <LogIn/>
    <Register/>
    <Calendar/>
    </>
  );
}

export default App;
