import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { auth } from '../config';
import { Link, useNavigate } from 'react-router-dom';
type AuthUser = {
  email: undefined | string;
};

export default function AuthDetails() {
  const [authUser, setAuthUser] = useState<AuthUser>();
  const navigate = useNavigate();

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user: any) => {
      if (user) {
        setAuthUser(user);
        navigate({
          pathname: '/calendar',
          search: `authUser=${encodeURIComponent(JSON.stringify(user))}`,
        });
      } else {
        setAuthUser(undefined);
      }
    });

    return () => {
      listen();
    };
  }, []);

  return (
    <div>
      {authUser && (
        <p>Successfully Log-in</p>
      )}
    </div>
  );
}
