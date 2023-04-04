import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../config";
import Signout from "./Auth/Signout";


const AuthDetails = () => {
  const [authUser, setAuthUser] = useState() as any;


  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user: any) => {
      if (user) {
        setAuthUser(user);
        
      } else {
        setAuthUser(undefined);
      }
    });
  
    return () => {
      listen();
    };
  });


  return (
    <>
    <nav className="navigation">
    <Link to="/">Home</Link> 
    <p>About us</p>
      {authUser ? (
        <>
          <p style={{ lineHeight: '14px' }}>Signed in as <br /> <span style={{ color: 'black' }}> {authUser.email}</span></p>
          <Link to="/mybookings">My Bookings</Link><br />
          <Link to="/profile">Profile</Link>
          <Signout/>
        </>
      ) : (
        <>
          <Link to='/login'>Log in</Link>
        </>
      )}
      </nav>
    </>
  );
  
};

export default AuthDetails;
