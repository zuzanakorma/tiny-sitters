import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import api from '../../Api/api';
import Header from '../Header/Header';

type User ={
    username: string;
    email: string;
    address:string;
  }
  

export default function Profile() {
    let { state } = useLocation();
    const email = state.email;
    const [user, setUser] = useState<User>({username: "", email: "", address:"" });

    const getUserInfo = async (email:any) => {
        try {
          const response = await api.get(`/api/user/${email}`)
          console.log("hiii:",response.data);
          setUser(response.data)
        //   setSitters(response.data);
        } catch (error) {
          console.error(error);
        }
      }

      useEffect(() => {
        getUserInfo(email);
      }, []);

  return (
    <>
    <Header/>
    <div>
        <h1>Name: {user.username}</h1>
        <h1>Email: {user.email}</h1>
        <h1>Address: {user.address}</h1>
    </div>
    </>
  )
  }