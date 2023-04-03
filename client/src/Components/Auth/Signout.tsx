import React from 'react'
import { signOut } from "firebase/auth";
import { auth } from "../../config";
import { useNavigate } from 'react-router-dom';
import "./auth.scss";
import { logout } from '../store';
import { useDispatch } from 'react-redux';


export default function Signout() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userSignOut = () => {
        signOut(auth)
          .then(() => {
            console.log("sign out successful");
            dispatch(logout());
            navigate("/")
          })
          .catch((error) => console.log(error));
      };
    
  return (
        <p className="signout" onClick={userSignOut}>Sign Out</p>
      )
}
