import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import SitterType from '../../../../types';
import api from "../../Api/api";

// type Props = {
//   sitter: SitterType;
// }

export default function SelectedSitter() {
  const searchParams = new URLSearchParams(useLocation().search);
const id = searchParams.get('id');
console.log(id);
  const getSitterById = async (id:any) => {
    try {
      const response = await api.get(`/api/sitters/${id}`);
      console.log(response);
      // setSitters(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div>
      <h2>sitter 01</h2>
      {/* <p>{props.sitter.description}</p> */}
      {/* Render additional details here */}
    </div>
  )
}
