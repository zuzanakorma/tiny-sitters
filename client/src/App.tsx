import Header from './Components/Header/Header';
import { Link } from 'react-router-dom';
import background from "./Assets/bg.svg";

function App() {
  return (
    <>
    <div className="homepage" style={{ backgroundImage: `url(${background})` }}>
    <Header/>
    <div className='main__title'>You go out... <br /> we take care <br /> of your <br /> little ones </div>
    <div className='main__btns'>
      <Link className='main__link' to='/login'>Log in</Link>
      <Link className='main__link' to='/register'>Create Account</Link>
      <Link className='pick__date' to='/calendar'>Pick Date</Link>
      </div>
      </div>
    </>
  );
}

export default App;
