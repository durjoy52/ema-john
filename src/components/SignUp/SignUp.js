import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from "../../firebase.init";
import './SignUp.css';
const SignUp = () => {
  const [email,setEmail] =useState('')
  const [password,setPassword] =useState('')
  const [confirmPassword,setConfirmPassword] =useState('')
  const [error,setError] =useState('')
  const navigate =useNavigate()
  const [createUserWithEmailAndPassword,user] = useCreateUserWithEmailAndPassword(auth)
  const handleEmailBlur =e=>{
    setEmail(e.target.value)
  }
  const handlePasswordBlur =e=>{
    setPassword(e.target.value)
  }
  const handleConfirmPasswordBlur =e=>{
    setConfirmPassword(e.target.value)
  }
  if(user){
    navigate('/shop')
  }
  const handleCreateUser =e=>{
    e.preventDefault()
    if(password !== confirmPassword){
      setError('Your two password did not match')
      return
    }
    if(password.length < 6){
      setError('Password must be 6 character or longer')
      return
    }
    createUserWithEmailAndPassword(email,password)
    setError('')
  }
    return (
        <div className="form-container">
      <div>
        <h2>Sign Up</h2>
        <form onSubmit={handleCreateUser}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input onBlur={handleEmailBlur} type="email" name="email" id="" required maxLength={32}/>
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input onBlur={handlePasswordBlur} type="password" name="password" id="" maxLength={12} />
          </div>
          <div className="input-group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input onBlur={handleConfirmPasswordBlur} type="password" name="confirm-password" id="" maxLength={12}/>
          </div>
          <p style={{color:'red'}}>{error}</p>
          <input className="form-submit" type="submit" value="SignUp" />
          <p>
              Already have an account? <Link className="form-link" to='/login'>Login</Link>
          </p>
        </form>
      </div>
    </div>
    );
};

export default SignUp;