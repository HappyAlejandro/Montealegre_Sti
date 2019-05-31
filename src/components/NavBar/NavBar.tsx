
import logo from '../../img/logo.png';
import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import '../NavBar/NavBar.css';
const NavBar = () => {
 

    return <nav className='navBar'>
        <img src={logo} className='logo' width='250px' alt="Logo" />
        <div className='links'>
        <a href="" className='linkaraoke'><Link to={'/'}> Coachella</Link></a>
        <a href="" className='linkfestival' ><Link to={'/festival'}>Festival</Link></a>
        </div>
      
    </nav>;
}


export default (NavBar);