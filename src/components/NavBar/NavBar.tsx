
import logo from '../../img/logo.png';
import React, {Component} from 'react';
import '../NavBar/NavBar.css';
const NavBar = () => {
 

    return <nav className='navBar'>
        <img src={logo} className='logo' width='250px' alt="Logo" />
        <div className='links'>
        <a href="" className='linkaraoke'>Coachella Karaoke</a>
        <a href="" className='linkfestival'>Festival</a>
        </div>
      
    </nav>;
}


export default (NavBar);