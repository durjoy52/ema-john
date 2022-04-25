import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
    const [user] =useAuthState(auth)
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <NavLink className={({isActive})=>isActive ? 'active' :'unactive'} to="/shop">Shop</NavLink>
                <NavLink className={({isActive})=>isActive ? 'active' :'unactive'} to="/orders">Orders</NavLink>
                <NavLink className={({isActive})=>isActive ? 'active' :'unactive'} to="/inventory">Inventory</NavLink>
                <NavLink className={({isActive})=>isActive ? 'active' :'unactive'} to="/about">About</NavLink>
               {
               user ? <button onClick={()=>signOut(auth)} className='active'>Sign Out</button> : <NavLink className={({isActive})=>isActive ? 'active' :'unactive'} to='/login'>Login</NavLink>
               }
            </div>
        </nav>
    );
};

export default Header;