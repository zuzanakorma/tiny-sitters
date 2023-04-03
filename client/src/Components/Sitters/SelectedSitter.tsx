
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import background from "../../Assets/bg-twirls.svg";
import Header from "../Header/Header";
import '../Auth/auth.scss';
import moment from 'moment';
import { Reservation, SitterType } from "../../../../types";
import './sitters.scss';
import './selectedSitter.scss';
import { reservationdata } from '../store';
import { useDispatch } from 'react-redux';
import AuthDetails from '../AuthDetails';




  const SelectedSitter: React.FC = (props) => {
  const location = useLocation();
  const propsData = location.state;
  const { name, description, dateOfBirth, _id, image } = propsData.sitter as SitterType;
  const { dateOfBooking, startTime, endTime, dayNameOfBooking } = propsData.selectedData as Reservation;
  const dispatch = useDispatch();
  

  const today = moment(new Date()).format('DD/MM/YYYY');

  console.log(`${dateOfBirth}-${today}`);
  console.log(propsData);

  // const todayConverted = today.toLocaleDateString('en-GB');
  // const todayString = Date.parse(todayConverted);
  // const dateofbirthString = Date.parse(dateofbirth);
  // const age = todayString - dateofbirthString;

  return (
    <>
      <AuthDetails />
      <div className="islandaquabg" style={{ backgroundImage: `url(${background})` }}>
        <Header />
       <br />
       <div className="main__container">
        <div className="maincontainer__sitterinfo">
        <div className="maincontainer__sitterinfo--image">
        <img className="availablessitters__card__sitterimg--large" src={ image} alt={ name } />
        </div>
            <div className="maincontainer__sitterinfo--name">{ name }</div>
            <div className="maincontainer__sitterinfo--age">44</div>
            <div className="maincontainer__sitterinfo--gender">He</div>
            <div className="maincontainer__sitterinfo--description">{ description }</div>
          </div>
        </div>


      <div className="main__container--button__container">
        <Link to='/sitters' className="btn--back" state={propsData.selectedData} style={{textDecoration: 'none'}}>Back</Link>
        <Link to='/summary' className="btn" state={{sitter: propsData.sitter, selectedData: propsData.selectedData}} onClick={()=> dispatch(reservationdata({ sitterId: _id, sitterName: name, dateOfBooking: dateOfBooking, startTime: startTime, endTime: endTime, dayNameOfBooking: dayNameOfBooking } as Reservation))}>Next</Link>
      </div>
      </div>
     
    </>
  );
}


export default SelectedSitter;
