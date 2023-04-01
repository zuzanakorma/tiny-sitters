import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import api from "../../Api/api";
import { SitterType } from "../../../../types";
import background from "../../Assets/bg-green.svg";
import './sitters.scss';
import Header from "../Header/Header";
import AuthDetails from '../AuthDetails';

const Sitters: React.FC = (props) => {
  const location = useLocation();
  const propsData = location.state;
  const [selectedDate, startTime, endTime, dayName] = propsData;
  const [sitters, setSitters] = useState<SitterType[]>([]);
  
  useEffect(() => {
    const getAvailableSitters = async () => {
      try {
        const response = await api.get('/api/sitters/available');
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
            return bsD === selectedDate && timeChecker;
          });
          return !overlappingChecker;
        });
        setSitters(availableSitters);
      } catch (error) {
        console.error(error);
      }
    };
  
    getAvailableSitters();
  }, [selectedDate, startTime]);

  return (
    <>
         <AuthDetails />
        <div className="authentication" style={{ backgroundImage: `url(${background})` }}>
          <Header />
        <div className="timeribbon">
        <h1>{dayName} {selectedDate}</h1>
        <h2>from { startTime } till { endTime }</h2>
        </div>
        <div className="availablesitters">
         {sitters.map((sitter: SitterType) => (
        <div key={sitter._id}>
      <Link to='/selectedsitter' state={sitter} style={{textDecoration: 'none'}}>
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
