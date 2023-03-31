
import React from 'react';
import { useLocation } from 'react-router-dom';
import background from "../../Assets/bg-green.svg";
import Header from "../Header/Header";
import Checkout from '../Checkout/Checkout';
import './sitters.scss';

const SelectedSitter: React.FC = (props) => {
  const location = useLocation();
  const propsData = location.state;
  const {name, description, dateofbirth} = propsData;

  // const today = new Date();
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
      <h4 className='sitter_description'>{ description }</h4>
      <Checkout/>
      </div>
    </>
  );
}


export default SelectedSitter;
