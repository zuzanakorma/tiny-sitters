import React from 'react'
import Header from '../Header/Header'

export default function ClientForm() {
  return (
    <>
    <Header/>
    <form action="">
    <input
        className="form__container-input"
        type="text"
        placeholder="First Name"
        // onChange={(e) => setEmail(e.target.value)}
      ></input>

        <input
        className="form__container-input"
        type="text"
        placeholder="Last Name"
        // onChange={(e) => setEmail(e.target.value)}
      ></input>

        <input
        className="form__container-input"
        type="checkbox"
        // onChange={(e) => setEmail(e.target.value)}
      ></input>
      <label>Father</label>

        <input
        className="form__container-input"
        type="checkbox"
        // onChange={(e) => setEmail(e.target.value)}
      ></input>
       <label>Mother</label>
       
        <input
        className="form__container-input"
        type="checkbox"
        // onChange={(e) => setEmail(e.target.value)}
      ></input>
       <label>Other</label>
        <hr/>
       <input type="text"  placeholder='Address'/>
       <input type="text"  placeholder='Street No'/> <br/>
       <input type="text"  placeholder='Zip code'/>
       <input type="text"  placeholder='City'/><br/>
       <input type="tel"  placeholder='Phone number'/><br/>
       <input type="email"  placeholder='Email'/><br/>
       <input type="password"  placeholder='Password'/><br/>
       <input type="password"  placeholder='Confirm Password'/><br/>
       <hr/>
       <div className='next-btn'>Next</div>
    </form>

    {/* <input
        className="form__container-input"
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      ></input> */}
    
    
    
    </>
  )
}
