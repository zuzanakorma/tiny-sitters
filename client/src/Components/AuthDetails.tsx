import { onAuthStateChanged, signOut } from "firebase/auth";
import { type } from "os";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../config";
import { useNavigate } from 'react-router-dom';
type AuthUser = {
    email : undefined | string
};

export default function AuthDetails() {
    const [authUser, setAuthUser] = useState<AuthUser>();
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/calendar");
    }

    useEffect(() => {
      const listen = onAuthStateChanged(auth, (user:any) => {
        if (user) {
          setAuthUser(user);

        } else {
          setAuthUser(undefined);
        }
      });
  
      return () => {
        listen();
      };
    }, []);
  
    const userSignOut = () => {
      signOut(auth)
        .then(() => {
          console.log("sign out successful");
        })
        .catch((error) => console.log(error));
    };
  
    return (
      <div>
        {authUser && (
          <>
            {/* <p>{`Signed In as ${authUser.email}`}</p> */}
            {navigate("/calendar")}
            {/* <button onClick={userSignOut}>Sign Out</button> */}
          </>
        ) }
      </div>
    );
}
