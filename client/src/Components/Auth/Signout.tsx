import React from 'react'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../config";
import AuthDetails from '../AuthDetails';
import { useNavigate } from 'react-router-dom';


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
    <>
    <div>
        <button onClick={userSignOut}>Sign Out</button>
        </div>
   
    </>

    
  )
}
