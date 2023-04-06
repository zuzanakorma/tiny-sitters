


export type SitterType = {
  id: string;
  name: string,
  gender: string;
  dateOfBirth: string,
  description: string,
  availability: string[],
  image: string
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
  bookingId: string;
  price: number;
}