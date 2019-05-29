
import React, {Component} from 'react';
import logo from '../../img/logo.png';
import '../Banner/Banner.css'
import NavBar from '../NavBar/NavBar';
import banner from '../../img/banner.png'
const Banner = () => {
 

    return <div className='banner'>
        <NavBar/>
        <div className='contenido'>
        <img src={logo} className='logo' width='500px' alt="Logo" />
        <p className='texto'>Music, Food, Drink and Descontrol</p>
        <button className="ui orange basic inverted button huge">Discover</button>
        </div>
       

     
    </div>
}


export default (Banner);