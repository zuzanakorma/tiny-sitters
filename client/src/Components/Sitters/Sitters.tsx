import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from "../../Api/api";
import SitterType from "../../../../types";
import SelectedSitter from "./SelectedSitter";


export default function Sitters() {
  const [sitters, setSitters] = useState<SitterType[]>([]);
  const [selectedSitter, setSelectedSitter] = useState<SitterType | null>(null);

  const getAvailableSitters = async () => {
    try {
      const response = await api.get("/api/sitters");
      console.log(response.data);
      setSitters(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getAvailableSitters();
  }, []);

  const handleSitterClick = (sitter: SitterType) => {
    setSelectedSitter(sitter);
  }

  if (selectedSitter) {
    return <SelectedSitter />;
  }

  return (
    <div>
      {sitters.map((sitter: SitterType) => (
        <div key={sitter._id}>
          <Link to={`/selectedsitter?id=${sitter._id}`}>
            <h2 onClick={() => handleSitterClick(sitter)}>{sitter.name}</h2>
          </Link>
        </div>
      ))}
    </div>
  )
}
