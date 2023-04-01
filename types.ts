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
  userUid: string;
  userEmail: string;
} 

export type Reservation = {
  sitterId: string,
  sitterName: string,
  dateOfBooking: string,
  dayNameOfBooking: string,
  startTime: number | null,
  endTime: number | null,
}

export type insertBooking = Reservation & AuthUser;
interface insertedBooking extends insertBooking { 
  _id: string;
}