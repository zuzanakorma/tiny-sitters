import React, { useState, useEffect, ReactComponentElement } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import api from "../../Api/api";
import SitterType from "../../../../types";
import SelectedSitter from "./SelectedSitter";
import background from "../../Assets/bg-green.svg";
import './sitters.scss';
import Header from "../Header/Header";

export default function Sitters() {
  let { state } = useLocation();
  const startDate = state.startDate

  const [sitters, setSitters] = useState<SitterType[]>([]);
  // const [selectedSitter, setSelectedSitter] = useState<SitterType | null>(null);


  const getAvailableSitters = async (startDate: String) => {
    try {
      const response = await api.get(`/api/sitters/available/${startDate}`)
      console.log(response.data);
      setSitters(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getAvailableSitters(startDate);
  }, []);

  return (
    <>
    <div className="authentication" style={{ backgroundImage: `url(${background})` }}>
          <Header />
  
          <div className="availablesitters">
           {sitters.map((sitter: SitterType) => (
          <div key={sitter.id}>
           {/* <Link to={'/selectedsitter'} state={`${sitter.id}`} */}
          <div className="availablesitters__card">
          <Link to='/selectedsitter' state={sitter}>
          
            <img className="availablessitters__card__sitterimg" src={sitter.image} width="100" alt="" /><br />
          {sitter.name}
          </Link>
          </div>
        </div>
      ))}
    </div>
    </div>
    </>
  )
}
