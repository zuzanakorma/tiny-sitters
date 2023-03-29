import { signInWithEmailAndPassword } from 'firebase/auth';
import React, {useState} from 'react'
import { auth } from '../../config';
import AuthDetails from '../AuthDetails';
import background from "../../Assets/bg-green.svg";
import Header from '../Header/Header';
import "./auth.scss";
import { Link } from 'react-router-dom';

export default function Signin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signIn = (e:any) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            console.log(userCredential);
          })
          .catch((error) => {
            console.log(error);
          });
      };

  return (
    <>
    <div className="authentication" style={{ backgroundImage: `url(${background})` }}>
    <Header />
    <form onSubmit={signIn} className="form__container">
      <h2>Log In to your Account</h2>
      <input
        className="form__container-input"
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      ></input>
      <input
        className="form__container-input"
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <button type="submit" className="form__container-input form__container-btn">Log in</button>
      <h4>No account yet? <Link to='/register' className="createaccount">Create Account</Link></h4>
    </form>
    <AuthDetails/>
  </div>
 
  </>
  )
}
