import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
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
      {authUser ? (
        <>
          <p>{`Signed in as ${authUser.email}`}</p>
          <p>Bookings</p>
          <p>Profile</p>
          <Signout />
        </>
      ) : (
        <>
          <p>About us</p>
        </>
      )}
      </div>
    </>
  );
  
};

export default AuthDetails;
