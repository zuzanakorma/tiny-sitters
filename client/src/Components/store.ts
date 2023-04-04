import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthUser, insertedBooking } from '../../../types';


const emptyUserState = { 
  userId: "empty", 
  userEmail: "empty", 
} as AuthUser;

const emptybookingState = {
  sitterId: "empty", 
  sitterName: "empty", 
  dateOfBooking: "empty", 
  dayNameOfBooking: "empty", 
  startTime: "empty", 
  endTime: "empty", 
  price: 0, 
} as insertedBooking;


const userSlice = createSlice({
  name: 'user',
  initialState: emptyUserState,
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
      return emptyUserState;
    },
  }, 
});

const bookingSlice = createSlice({
  name: 'booking',
  initialState: emptybookingState,
  reducers: {
    setSitter: (state: insertedBooking, action: PayloadAction<insertedBooking>): insertedBooking => {
      return {
        ...state,
        sitterId: action.payload.sitterId,
        sitterName: action.payload.sitterName,
    };
  },
    setBookingData: (state: insertedBooking, action: PayloadAction<insertedBooking>) => {
     return {
      ...state,
       dateOfBooking: action.payload.dateOfBooking,
       dayNameOfBooking: action.payload.dayNameOfBooking,
       startTime: action.payload.startTime,
       endTime: action.payload.endTime,
       };
    },     
    setPrice: (state: insertedBooking, action: PayloadAction<insertedBooking>): insertedBooking => {
      return {
        ...state,
        price: action.payload.price,
    };
  },
    clear: (state) => {
      localStorage.removeItem('booking');
      return emptybookingState;
    },
  }, 
});


export const { login, logout } = userSlice.actions;
export const { setSitter, setBookingData, setPrice, clear } = bookingSlice.actions;

export const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        booking: bookingSlice.reducer,
    },
});
