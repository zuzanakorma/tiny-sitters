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
    <div className="Navigation">
    <Link to="/">Home</Link> 
    <p>About us</p>
      {authUser ? (
        <>
      
          <p>{`Signed in as ${authUser.email}`}</p>
          <p>Bookings</p>
          <Link to="/profile">Profile</Link>
          <Signout/>
        </>
      ) : (
        <>
          <p>SignIn</p>
        </>
      )}
      </div>
    </>
  );
  
};

export default AuthDetails;
