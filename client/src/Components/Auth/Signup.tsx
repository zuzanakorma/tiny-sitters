import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../config";
import "./auth.scss";
import background from "../../Assets/bg-green.svg";
import Header from '../Header/Header';
import { useNavigate } from "react-router-dom";

export default function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const signUp = (e:any) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
          navigate('/login')

          })
          .catch((error) => {
            console.log(error);
          });
      };
    
  return (
    <>
    <div className="authentication" style={{ backgroundImage: `url(${background})` }}>
    <Header />
    <form onSubmit={signUp} className="form__container">
      <h2>Create Account</h2>
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
      <button className="form__container-input form__container-btn" type="submit">Sign Up</button>
    </form>
    
  </div>
  </>
  )
}