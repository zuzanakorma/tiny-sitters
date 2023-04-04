import Header from '../Header/Header';
import AuthDetails from '../AuthDetails';
import './mybookings.scss';



const MyBookings: React.FC = (props) => {
  


 return (
    <>
      <AuthDetails />
      <div className="graybg">
        <Header />
        <h2>My Bookings</h2>
        <div className="main__container">
          <div className="main__container__mybookingstable">
          Hier komt tabel
          </div>
        </div>
      </div>
    </>
  );
};

export default MyBookings;