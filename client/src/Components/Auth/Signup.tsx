import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth,db } from "../../config";
import "./auth.scss";
import background from "../../Assets/bg-green.svg";
import Header from '../Header/Header';
import { useNavigate } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import { signOut } from "firebase/auth";
import { useDispatch } from "react-redux";
import { clear } from "../store";


export default function Signup() {
//   const user: AuthUser = useSelector((state: any) => state.user);
// const { userId, userEmail } = user;
//     const reservation: Reservation = useSelector((state: any) => state.reservation);
//     const { sitterName, sitterId, dateOfBooking, dayNameOfBooking, startTime, endTime } = reservation;
   
//     const totalprice: insertedBooking = useSelector((state: any) => state.booking.price );

    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
        
    const signUp = (e:any) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)

          .then(async (userCredential) => {
            
            await addDoc(collection(db, "users"), {
              email: userCredential.user.email,
              name: name,
              address:address
            });
                  signOut(auth)
                .then(() => {
                  // dispatch(logout());
            dispatch(clear())
            // if (userEmail == "leeg"){
            //       navigate("/login")
            // }
            // if (dateOfBooking === "") {
            //   (navigate('/calendar'))
            // }
            navigate("/login")
                })
                
                })
       
          .catch((error) => {
            console.log(error);
          });
       

      };
    
  return (
    <>
    <div className="islandaquabg" style={{ backgroundImage: `url(${background})` }}>
    <Header />
    <form onSubmit={signUp} className="form__container">
      <h2>Create Account</h2>
      <input
        type="text"
        className="form__container-input"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
        <input
        type="text"
        className="form__container-input"
        placeholder="Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      ></input>
      <input
        className="form__container-input"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      ></input>
      
      <input
        type="password"
        className="form__container-input"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      ></input>
        <input
        type="password"
        className="form__container-input"
        placeholder="Repeat Password"
      ></input>
      <button className="btn" type="submit">Sign Up</button>
    </form>
    
  </div>
  </>
  )
}