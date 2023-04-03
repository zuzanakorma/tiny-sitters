import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthUser, Reservation, insertedBooking } from '../../../types';


const userState = { 
  userId: 'leeg', 
  userEmail: 'leeg', 
} as AuthUser;

const emptyReservationState = {
  sitterId: 'empty',
  sitterName: 'empty',
  dateOfBooking: 'empty',
  dayNameOfBooking: 'empty',
  startTime: 'empty',
  endTime: 'empty',
} as Reservation;

const emptybookingState = {
  _id: "",
  userId: "",
  userEmail: "", 
  sitterId: "", 
  sitterName: "", 
  dateOfBooking: "", 
  dayNameOfBooking: "", 
  startTime: "", 
  endTime: "", 
  price: 0, 
} as insertedBooking;

const userSlice = createSlice({
  name: 'user',
  initialState: userState,
  reducers: {
    login: (state: AuthUser, action: PayloadAction<AuthUser>): AuthUser => {
      return {
        ...state,
        userId: action.payload.userId,
        userEmail: action.payload.userEmail,
      };
    },
    logout: (state) => {
      localStorage.removeItem('user');
      return userState;
    },
  }, 
});

const reservationSlice = createSlice({
   name: 'reservation',
   initialState: emptyReservationState,
   reducers: {
    reservationdata: (state: Reservation, action: PayloadAction<Reservation>) => {
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
   }, 
});




const bookingSlice = createSlice({
  name: 'booking',
  initialState: emptybookingState,
  reducers: {
   bookingdata: (state: insertedBooking, action: PayloadAction<insertedBooking>) => {
     return {
       ...state,
       _id: action.payload._id,
       userId: action.payload.userId,
       userEmail: action.payload.userEmail,
       sitterId: action.payload.sitterId,
       sitterName: action.payload.sitterName,
       dateOfBooking: action.payload.dateOfBooking,
       dayNameOfBooking: action.payload.dayNameOfBooking,
       startTime: action.payload.startTime,
       endTime: action.payload.endTime,
       price: action.payload.price,
       };
    },     
    success: (state) => {
      state = emptybookingState;
    },
  }, 
});




export const { login, logout } = userSlice.actions;
export const { reservationdata } = reservationSlice.actions;
export const { bookingdata, success } = bookingSlice.actions;


export const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        reservation: reservationSlice.reducer,
        booking: bookingSlice.reducer,
    },
});
