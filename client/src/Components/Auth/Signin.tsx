import { signInWithEmailAndPassword } from 'firebase/auth';
import React, {useState} from 'react'
import { auth } from '../../config';
import { useNavigate } from 'react-router-dom';
import background from "../../Assets/bg-green.svg";
import Header from '../Header/Header';
import { AuthUser } from '../../../../types';
import { login } from '../store';
import { useDispatch } from 'react-redux';
import "./auth.scss";
import { Link } from 'react-router-dom';

export default function Signin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();
    

    const signIn = async (e: any) => {
      e.preventDefault();
      try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        dispatch(login({ userId: userCredential.user.uid, userEmail: userCredential.user.email } as AuthUser));  
        navigate("/summary");
      } catch (error) {
        console.log(error);
      }
    };
    

  return (
    <>
    <div className="islandaquabg" style={{ backgroundImage: `url(${ background })` }}>
    <Header />
    <h2>Log In to your Account</h2>
    <form onSubmit={signIn} className="form__container">
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
      <button type="submit" className="btn">Log in</button>
      <h4>No account yet? <Link to='/register' className="createaccount">Create Account</Link></h4>
    </form>
  </div>

  </>
  )
}
