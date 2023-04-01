import React from 'react'
import logo from './tinysitters_logo.svg';
import "./header.scss";
// import { useSelector } from 'react-redux';

const Header = () => {
  // const user = useSelector((state: any) => state.user.value);
  // const { email } = user;

  return (
    <>
    <img className="salt__header--logo" src={logo} alt="logo"/>
    </>
  )
}

export default Header