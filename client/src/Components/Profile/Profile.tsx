import React, { useEffect, useState } from 'react'
import api from '../../Api/api';
import Header from '../Header/Header';
import './profile.scss';
import { useSelector } from 'react-redux';
import AuthDetails from '../AuthDetails';

type User ={
    username: string;
    email: string;
    address:string;
  }
  

export default function Profile() {
  const email = useSelector((state: any)=> state.user)
  const { userEmail } = email
    // let { state } = useLocation();
    // const email = state.email;
    const [user, setUser] = useState<User>({username: "", email: "", address:"" });

    const getUserInfo = async (email:any) => {
        try {
          const response = await api.get(`/api/user/${userEmail}`)
          setUser(response.data)
        //   setSitters(response.data);
        } catch (error) {
          console.error(error);
        }
      }

      useEffect(() => {
        const fetchData = async () => {
          await getUserInfo(email);
        };
        fetchData();
      });

  return (
    <>
    <AuthDetails />
    <Header/>
    <h1 className='user-profile'>My Profile</h1>
    <div>
        <h1 className='user-profile__details'>Name: {user.username}</h1>
        <h1 className='user-profile__details'>Email: {user.email}</h1>
        <h1 className='user-profile__details'>Address: {user.address}</h1>
    </div>
    </>
  )
  }