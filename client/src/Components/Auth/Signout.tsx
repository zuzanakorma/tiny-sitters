import React from 'react'
import {  signOut } from "firebase/auth";
import { auth } from "../../config";
import { useNavigate } from 'react-router-dom';
import "./auth.scss";


export default function Signout() {
    const navigate = useNavigate();
    const userSignOut = () => {
        signOut(auth)
          .then(() => {
            console.log("sign out successful");
            navigate("/")
          })
          .catch((error) => console.log(error));
      };
    
  return (
    
        <div className='signout' onClick={userSignOut}>Sign Out</div>
        
  )
}
