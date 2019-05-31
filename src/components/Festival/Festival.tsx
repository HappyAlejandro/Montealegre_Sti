
import React, {Component} from 'react';
import logo from '../../img/logo.png';

import NavBar from '../NavBar/NavBar';
import banner from '../../img/banner.png'
import '../Festival/Festival.css';


import { observer } from 'mobx-react';
import Algorit from '../storage/Algorit';
import { toJS } from 'mobx';
import img from '../../img/img.png';
import { Button, Icon, Item, Sticky, Header, List, Label, Card, Image, Statistic, Rating } from 'semantic-ui-react';




import disco from '../../img/disco.png';
import microfono from '../../img/microphone.png';
import comida from '../../img/lunch-box.png';
import vino from '../../img/wine.png';
import Banner from '../Banner/Banner';



const Festival = () => {
 

    return   <div className="festival">

                    <Banner/>
                    <h1>Festival Coachella Prediction 2020</h1>
                    <h2>Genre</h2>
                    <div className='bestTodo'>
                   
                        {Algorit.festResults[0] && Algorit.festResults[0].festAvgGenresMax.map((e: any) => {
                            return (
                                <div role="listitem" className="item">
                                <img src={disco} className="ui avatar image" />
                                    <div className="content">
                      <a className="header">{e.catName}</a>
                      <div className="description">
                       soon in coachella
                      </div>
                    </div>
                  </div>
                            );
                        })}
                   </div>
                   <h2>Artist</h2>
                  
                    <div className='bestTodo2'>

                  
                        {Algorit.festResults[0] && Algorit.festResults[0].festAvgArtistsMax.map((e: any) => {
                            return (
                                <div role="listitem" className="item">
                                <img src={microfono} className="ui avatar image" />
                                    <div className="content">
                      <a className="header">{e.catName}</a>
                      <div className="description">
                       soon in coachella
                      </div>
                    </div>
                  </div>
                            );
                        })}
                 </div>
             
               <h2>Food</h2>
               <div className='bestTodo3'>

             
                   {Algorit.festResults[0] && Algorit.festResults[0].festAvgFoodMax.map((e: any) => {
                       return (
                           <div role="listitem" className="item">
                           <img src={comida} className="ui avatar image" />
                               <div className="content">
                 <a className="header">{e.catName}</a>
                 <div className="description">
                  soon in coachella
                 </div>
               </div>
             </div>
                       );
                   })}
                     </div>
             
          

              <h2>Drink</h2>
              <div className='bestTodo4'>
                   {Algorit.festResults[0] && Algorit.festResults[0].festAvgDrinkMax.map((e: any) => {
                       return (
                           <div role="listitem" className="item">
                           <img src={vino} className="ui avatar image" />
                               <div className="content">
                 <a className="header">{e.catName}</a>
                 <div className="description">
                  soon in coachella
                 </div>
               </div>
             </div>
                       );
                   })}
              
              </div>
                </div>
        

 
}


export default (Festival);