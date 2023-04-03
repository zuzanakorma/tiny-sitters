export type SitterType = {
  _id: string;
  name: string,
  dateOfBirth: string,
  description: string,
  unavailable: boolean,
  weekends?: boolean,
  image: string
  bookings: [string]
}

export type AuthUser = {
  userId: string,
  userEmail: string,
} 

export type Reservation = {
  sitterId?: string,
  sitterName?: string,
  dateOfBooking: string,
  dayNameOfBooking: string,
  startTime: string,
  endTime: string,
}

export type insertBooking = Reservation & AuthUser;
export interface insertedBooking extends insertBooking { 
  _id: string;
  price: number;
}