import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Shipment = () => {
    const [user] =useAuthState(auth)
    const [name,setName] =useState('')
    const [email,setEmail] =useState('')
    const [address,setAddress] =useState('')
    const [number,setNumber] =useState('')
    const [error,setError] =useState('')
    // const navigate =useNavigate()

    const handleNameBlur =e=>{
        setName(e.target.value)
    }
      const handleAddressBlur =e=>{
        setAddress(e.target.value)
      }
      const handlePhoneNumberBlur =e=>{
        setNumber(e.target.value)
      }
      const handleCreateUser =e=>{
        e.preventDefault()
        const shipping =(name,email,address,number)
      }
    return (
        <div className="form-container">
      <div>
        <h2>Shipment</h2>
        <form onSubmit={handleCreateUser}>
          <div className="input-group">
            <label htmlFor="name">Your name</label>
            <input onBlur={handleNameBlur} type="text" name="name" id="" required/>
          </div>
          <div className="input-group">
            <label htmlFor="email">Your Email</label>
            <input value={user?.email} type="email" name="email" id="" required/>
          </div>
          <div className="input-group">
            <label htmlFor="address">Address</label>
            <input onBlur={handleAddressBlur} type="text" name="address" id="" required/>
          </div>
          <div className="input-group">
            <label htmlFor="phone-number">Phone number</label>
            <input onBlur={handlePhoneNumberBlur} type="text" name="phone-number" id="" required/>
          </div>
          <p style={{color:'red'}}>{error}</p>
          <input className="form-submit" type="submit" value="Add Shipping" />
        </form>
      </div>
    </div>
    );
};

export default Shipment;