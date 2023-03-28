import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import SitterType from '../../../../types';
import api from '../../Api/api';

export default function SelectedSitter() {
  const [nannyinfo, setNannyinfo] = useState<SitterType>();
  const searchParams = new URLSearchParams(useLocation().search);
  const id = searchParams.get('id');

  useEffect(() => {
    const getSitterById = async (id: any) => {
      try {
        const response = await api.get(`/api/sitters/${id}`);
        console.log(response.data);
        setNannyinfo(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getSitterById(id);
  }, []);

  return (
    <div>
      {nannyinfo && (
        <>
          <h2>Sitter info:</h2>
          <p>Name: {nannyinfo.name}</p>
        </>
      )}
    </div>
  );
}
