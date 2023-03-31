import React, { useState, useEffect, ReactComponentElement } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import api from "../../Api/api";
import SitterType from "../../../../types";
import SelectedSitter from "./SelectedSitter";

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

  // const handleSitterClick = (sitter: SitterType) => {
  //   setSelectedSitter(sitter);
  // }

  // if (selectedSitter) {
  //   return <SelectedSitter />;
  // }

  return (
    <>
    <div>
      {sitters.map((sitter: SitterType) => (
        <div key={sitter.id}>
          {/* <Link to={'/selectedsitter'} state={`${sitter.id}`} */}
          <Link to={'/selectedsitter'} state={{...state, sitter: sitter.id}}
          >

            {/* <h2 onClick={() => handleSitterClick(sitter)}>{sitter.name}</h2> */}
            <h2>{sitter.name}</h2>
            <img src={sitter.image} width="100" alt="" />
          </Link>
        </div>
        
      ))}
    </div>
    </>
  )
}
