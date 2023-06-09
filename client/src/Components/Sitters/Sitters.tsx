import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from "../../Api/api";
import { insertedBooking, SitterType } from "../../../../types";
import background from "../../Assets/bg-green.svg";
import './sitters.scss';
import Header from "../Header/Header";
import AuthDetails from '../AuthDetails';
import { useSelector, useDispatch } from 'react-redux';
import { setSitter } from '../store';

const Sitters: React.FC = () => {
  const dispatch = useDispatch();
  const dateAndTimeslot: insertedBooking = useSelector((state: any) => state.booking);
  const { dateOfBooking, startTime, endTime, dayNameOfBooking } = dateAndTimeslot;
  const [sitters, setSitters] = useState<SitterType[]>([]);
  
  useEffect(() => {
    const getAvailableSitters = async () => {
      try {
        const response = await api.get('api/sitters/available');
        const allSitters = response.data;
        const availableSitters = allSitters.filter((s: SitterType) => {
          const { bookings } = s;
          const overlappingChecker = bookings.some((b) => {
            let bookingArray = [];
            bookingArray = String(b).split(",");
            const [bsD, sT, eT] = bookingArray;
            const sThour = parseFloat(sT);
            const eThour = parseFloat(eT);
            const startTimeHour = parseFloat(startTime);
            const timeChecker = (startTimeHour >= sThour && startTimeHour<= eThour)
            return bsD === dateOfBooking && timeChecker;
          });
          return !overlappingChecker;
        });
        setSitters(availableSitters);
      } catch (error) {
        console.error(error);
      }
    };
    getAvailableSitters();
  }, [dateOfBooking, startTime]);

  return (
    <>
        <AuthDetails />
        <div className="islandaquabg" style={{ backgroundImage: `url(${background})` }}>
          <Header />
        <div className="timeribbon">
        <h1>{dayNameOfBooking} {dateOfBooking}</h1>
        <h2>from { startTime } till { endTime }</h2>
        </div>
        <div className="availablesitters">
         {sitters.map((sitter: SitterType) => (
        <div key={sitter._id}>
        <Link to='/selectedsitter' onClick={() => {
          dispatch(setSitter({
            sitterId: sitter._id,
            sitterName: sitter.name 
            } as insertedBooking))
            }} state={{sitter: sitter}} 
            style={{textDecoration: 'none'}}>
        <div className="availablesitters__card">
        <img className="availablessitters__card__sitterimg" src={sitter.image} width="100" alt="" /><br />
          {sitter.name}
        </div>
        </Link>
        </div>
      ))}
    </div>
    </div>
  </>
  )
}

export default Sitters;
