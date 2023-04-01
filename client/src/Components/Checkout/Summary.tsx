import React from 'react';
import Header from '../Header/Header';
import background from '../../Assets/bg.svg';
import { useSelector } from 'react-redux';
import Signout from '../Auth/Signout';
import Checkout from './Checkout';
import { AuthUser, Reservation } from '../../../../types';


const Summary: React.FC = () => {
    const user: AuthUser = useSelector((state: any) => state.user);
    // const reservation: Reservation = useSelector((state: any) => state.reservation);
    const { userUid, userEmail } = user;
    // const { sitterId } = reservation;



 //if logged out navigate to login page
 //if no data is selected go to calandar
 //if no user is selected then go to available users

    return (
        <>
        <div className="mainpage" style={{ backgroundImage: `url(${background})` }}>
            <Header />
        <h1>Summary:</h1>
            <p> {userUid} {userEmail} </p>
        <Checkout/>
        </div>
        <Signout />
      
        </>
    );
}

export default Summary;
