import React, { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import "./Login.css";
const Login = () => {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [SignInWithEmailAndPassword,user,loading,error] = useSignInWithEmailAndPassword(auth)
  const navigate =useNavigate()
  const location =useLocation()
  const from =location.state?.from?.pathname || '/'
  const handleEmailBlur = e =>{
    setEmail(e.target.value)
  }
  const handlePasswordBlur = e =>{
    setPassword(e.target.value)
  }
  if(user){
    navigate(from,{replace:true})
  }
  const handleSignIn = e =>{
    e.preventDefault()
    SignInWithEmailAndPassword(email,password)
  }
  return (
    <div className="form-container">
      <div>
        <h2>login</h2>
        <form onSubmit={handleSignIn}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input onBlur={handleEmailBlur} type="email" name="email" id="" required maxLength={32}/>
          </div> 
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input onBlur={handlePasswordBlur} type="password" name="password" id="" maxLength={12}/>
          </div>
          <p style={{color:'red'}}>{error?.message}</p>
          {
            loading && <p style={{color:'green'}}>loading...</p>
          }
          <input className="form-submit" type="submit" value="Login" />
          <p>
              New to Ema-John? <Link className="form-link" to='/signup'>Create an account</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
