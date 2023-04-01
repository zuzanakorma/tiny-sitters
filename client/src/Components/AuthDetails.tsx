import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../config";
import Signout from "./Auth/Signout";
import { AuthUser } from "../../../types";
import { login } from './store';
import { useDispatch } from 'react-redux';


const AuthDetails = () => {
  const [authUser, setAuthUser] = useState<AuthUser>();
  const dispatch = useDispatch();

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user: any) => {
      if (user) {
        setAuthUser(user);
        dispatch(login({ userUid: authUser!.userUid, userEmail: authUser!.userEmail }))
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
          <p>{`Signed in as ${authUser.userEmail}`}</p>
          <p>Bookings</p>
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
