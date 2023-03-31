import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import SitterType from '../../../../types';
import api from '../../Api/api';
import Checkout from '../Checkout/Checkout';

export default function SelectedSitter() {
  const [nannyinfo, setNannyinfo] = useState<SitterType>();
  // const searchParams = new URLSearchParams(useLocation().search);
  // const id = searchParams.get('id');

  let { state } = useLocation();
console.log(state)
  useEffect(() => {
    const getSitterById = async (id: any) => {
      try {
        const response = await api.get(`/api/sitters/${id}`);
        setNannyinfo(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getSitterById(state.sitter);
  }, []);

  return (
    <>
    <div>
      {nannyinfo && (
        <>
          <h2>Sitter info:</h2>
          <p>Name: {nannyinfo.name}</p>
        </>
      )}
    </div>
    <Checkout/>
    </>
  );
}
