import { configureStore, createSlice } from '@reduxjs/toolkit';
import { AuthUser, Reservation } from '../../../types';


const userState = { 
  id: 'leeg', 
  email: 'leeg', 
} as AuthUser;

const emptyReservationState = {
  sitterId: 'empty',
  sitterName: 'empty',
  dateOfBooking: 'empty',
  dayNameOfBooking: 'empty',
  startTime: null,
  endTime: null,
} as Reservation;


const userSlice = createSlice({
  name: 'user',
  initialState: userState,
  reducers: {
    login: (state, action) => {
      return {
        ...state,
        id: action.payload.id,
        email: action.payload.email,
      };
    },
    logout: (state) => {
      state = userState;
    },
  }, 
});

const reservationSlice = createSlice({
   name: 'reservation',
   initialState: emptyReservationState,
   reducers: {
    reservationdata: (state: Reservation, action) => {
      return {
        ...state,
        sitterId: action.payload.sitterId,
        sitterName: action.payload.sitterName,
        dateOfBooking: action.payload.dateOfBooking,
        dayNameOfBooking: action.payload.dayNameOfBooking,
        startTime: action.payload.startTime,
        endTime: action.payload.endTime,
        };
     },     
     success: (state) => {
       state = emptyReservationState;
     },
   }, 
});

export const { login, logout } = userSlice.actions;
export const { reservationdata, success } = reservationSlice.actions;


export const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        reservation: reservationSlice.reducer
    },
});
