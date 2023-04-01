
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import background from "../../Assets/bg-green.svg";
import Header from "../Header/Header";
import '../Auth/auth.scss';
import moment from 'moment';
import { Reservation, SitterType } from "../../../../types";
import './sitters.scss';
import { reservationdata } from '../store';
import { useDispatch } from 'react-redux';


  const SelectedSitter: React.FC = (props) => {
  const location = useLocation();
  const propsData: SitterType = location.state;
  const {name, description, dateOfBirth, _id} = propsData;
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
      <div className="authentication" style={{ backgroundImage: `url(${background})` }}>
        <Header />
      <h2>{ name }</h2>
        {/* <h4>Age: {age}</h4> */}
      <h4 className='sitter_description'>{ description } { _id }</h4>
      <Link to='/summary' className="form__container-input form__container-btn" onClick={()=> dispatch(reservationdata({ sitterId: _id } as Reservation))}>Next</Link>
      </div>
    </>
  );
}


export default SelectedSitter;
