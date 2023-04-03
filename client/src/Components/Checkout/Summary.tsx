import React from 'react';
import Header from '../Header/Header';
import Checkout from './Checkout';
import { AuthUser, Reservation, SitterType, insertedBooking } from '../../../../types';
import AuthDetails from '../AuthDetails';
import { Link, useLocation } from 'react-router-dom';
import { bookingdata } from '../store';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';


const Summary: React.FC = (props) => {
    const location = useLocation();
    const propsData: SitterType = location.state;
   
    const user: AuthUser = useSelector((state: any) => state.user);
    const { userId, userEmail } = user;
    const reservation: Reservation = useSelector((state: any) => state.reservation);
    const { sitterName, sitterId, dateOfBooking, dayNameOfBooking, startTime, endTime } = reservation;
   
    const totalprice: insertedBooking = useSelector((state: any) => state.booking.price );


    const dispatch = useDispatch();

    const hourRate = 12;
    const startRate = 20;
    const duration = (startTime: string, endTime: string): number => {
    const start = moment(startTime, 'HH:mm');
    const end = moment(endTime, 'HH:mm');
    const duration = moment.duration(end.diff(start));
    const hourformat = duration.asHours();
    const fixed = parseFloat(hourformat.toFixed(1))      
     return fixed;
};

    const durationInHours = duration(startTime, endTime);
    const exPrice = startRate + (hourRate*durationInHours);
    const incPrice = (exPrice/100)*121;




    const formatPrice = (price: number) => {
        return parseFloat(price.toFixed(2));
      };

    const roundedPrice = formatPrice(incPrice);
        
      console.log(`This is from here ${roundedPrice}`);
      console.log(`This is from the store ${totalprice}`);
 //if logged out navigate to login page
 //if no data is selected go to calandar
 //if no user is selected then go to available users

 //make a function for price calculation
 //make a function for duration calculation

 return (
    <>
      <AuthDetails />

      <div className="graybg">
        <Header />
        <div className="main__container">
          <div className="main__container__summarytable">
            <div className="main__container__summarytable--name">{sitterName}</div>
            <div className="main__container__summarytable--date">
              {dateOfBooking}, {dayNameOfBooking}, {startTime} till {endTime}
            </div>
            <div className="main__container__summarytable--duration">{durationInHours} hours</div>
            <div className="main__container__summarytable--priceinfo">
              {`Starting price € ${startRate} +  € ${hourRate} p/hour`}
            </div>
            <div className="main__container__summarytable--calcprice">Amount excl. Btw</div>
            <div className="main__container__summarytable--calcprice-out">€ {formatPrice(exPrice)}</div>
            <div className="main__container__summarytable--totalprice">Total amount inc. 21% Btw</div>
            <div className="main__container__summarytable--totalprice-out">€ {roundedPrice}</div>
          </div>
          <div className="main__container--button__container">
            <Link to="/selectedsitter" className="btn--back" state={propsData} style={{ textDecoration: 'none' }}>
              Back
            </Link>
           <div onClick={()=> dispatch(bookingdata(
            {
                _id: "",
                userId: userId,
                userEmail: userEmail, 
                sitterId: sitterId,
                sitterName: sitterName,
                dateOfBooking: dateOfBooking,
                dayNameOfBooking: dayNameOfBooking,
                startTime: startTime,
                endTime: endTime,
                price: roundedPrice,
        } as insertedBooking))}><Checkout/>
        </div>
   
        </div>
        </div>
        </div>

    </>
  );
};

export default Summary;