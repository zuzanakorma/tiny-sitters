import React from 'react'
import logo from './tinysitters_logo.svg';
import "./header.scss";
import { Link } from 'react-router-dom';
// import { useSelector } from 'react-redux';

const Header = () => {
  // const user = useSelector((state: any) => state.user.value);
  // const { email } = user;

  return (
    <>
    <Link to='/'>
    <img className="salt__header--logo" src={logo} alt="logo"/>
    </Link>
    </>
  )
}

export default Header