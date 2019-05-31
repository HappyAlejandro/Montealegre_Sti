import React, { Component } from 'react';
import { observer } from 'mobx-react';
import Algorit from '../storage/Algorit';
import { toJS } from 'mobx';
import img from '../../img/img.png';
import { Label, Image } from 'semantic-ui-react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




import '../Contenido/Contenido.css';
import disco from '../../img/disco.png';
import microfono from '../../img/microphone.png';
import comida from '../../img/lunch-box.png';
import vino from '../../img/wine.png';

toast.configure({
    autoClose: 1000,
    draggable: false,
    //etc you get the idea
  });

class Contenido extends Component{
   
    constructor(props: any){
        super(props)

        this.state = { grupo: false }
      
    }

    
    notifyA = () => toast('Uptated Information');


    render(){
        return (
            <div className='todo'>
    <h1 className='guestList'> Guest List</h1>
    <div role="list" className="ui divided relaxed list">
    
    
                {Algorit.csvPopulation && Algorit.csvPopulation.map((pop: any) => {
                            if (pop.index === 0) return;
                 
                            return (
                                <div role="listitem" className="item">
                                <div className="ui cards"  >
                                <div className="ui card">
                                  <div className="content">
                                    <img
                                      src={img}
                                      className="ui mini right floated image"
                                      onClick={() => {
                                        Algorit.csvSelected = pop.index;
                                        Algorit.cosineResultsData = [];
                                        Algorit.cosineSingularityGeneral(pop.index);
                                        this.notifyA();
                                    }}
                                    
                                    />
                                  
                                    <div className="header">{pop.name}</div>
                                    <div className="meta">My age is: <b>{pop.age}</b></div>
                                    <div className="description">
                                     I love Coachella :3 <strong>best friends</strong>
                                    </div>
                                  </div>
                                  <div className="extra content">
                                    <div className="ui two buttons">
                                     
                            
                                      <button className="ui violet basic button small"  onClick={() => {
                                       this.setState({ grupo: true}) 
                                      
                                    }}>Show my group</button>
                                    </div>
                                  </div>
                                </div>
                                </div>
                                </div>
                            );
                })}
            </div>
    
            <h1 className='details_info '  >Details</h1>
            <div className='todo2'>
    
        <div className='person_info'>
    
            
        <div className="header"><h2>{Algorit.csvPopulation[Algorit.csvSelected] && Algorit.csvPopulation[Algorit
            .csvSelected].name}</h2>
               <h4>
               Age: <b>{Algorit.csvPopulation[Algorit.csvSelected] && Algorit.csvPopulation[Algorit.csvSelected].age}</b>
                   </h4>
            </div>
    
        <h3>Categories</h3>
        <div className='final_info'>
    
       
      
         <div  className="generos">
         <h4>Music</h4>
    
                                    {Algorit.csvPopulation[Algorit.csvSelected] && Algorit.csvPopulation[Algorit.csvSelected].scoreByGenresMax.map((e: any) => {
                                        return (
                                            <div key={e.catName + e.score} role="listitem" className="item">
                                              
    
                                    
                                     <div role="listitem" className="item">
                    <img src={disco} className="ui avatar image" />
                        <div className="content">
          <a className="header">{e.catName}</a>
          <div className="description">
           soon in coachella
          </div>
        </div>
      </div>
    
    
                                            </div>
                                        );
                                    })}
                                </div>
    
     <div role="list" className="artista">
     <h4>Artist</h4>
                                    {Algorit.csvPopulation[Algorit.csvSelected] && Algorit.csvPopulation[Algorit.csvSelected].scoreByArtistsMax.map((e: any) => {
                                        return (
                                            <div key={e.catName + e.score}  className="item">
                                              
                                              <div role="listitem" className="item">
                    <img src={microfono} className="ui avatar image" />
                        <div className="content">
          <a className="header">{e.catName}</a>
          <div className="description">
           soon in coachella
          </div>
        </div>
      </div>
                                             
                                            </div>
                                        );
                                    })}
                                </div>
    
    <div role="list" className="food">
    <h4>Diet</h4>
                                    {Algorit.csvPopulation[Algorit.csvSelected] && Algorit.csvPopulation[Algorit.csvSelected].scoreByFoodMax.map((e: any) => {
                                        return (
                                            <div key={e.catName + e.score} role="listitem" className="item">
                                                                        
                                     <div role="listitem" className="item">
                    <img src={comida} className="ui avatar image" />
                        <div className="content">
          <a className="header">{e.catName}</a>
          <div className="description">
           soon in coachella
          </div>
        </div>
      </div>
                                            </div>
                                        );
                                    })}
                                </div>
    
    
    <div role="list" className="drink">
    <h4>Drink</h4>
    {Algorit.csvPopulation[Algorit.csvSelected] && Algorit.csvPopulation[Algorit.csvSelected].scoreByDrinkMax.map((e: any) => {
     
        return (
           
            <div key={e.catName + e.score} role="listitem" className="item">
                   <div role="listitem" className="item">
                    <img src={vino} className="ui avatar image" />
                        <div className="content">
          <a className="header">{e.catName}</a>
          <div className="description">
           soon in coachella
          </div>
        </div>
      </div>
            </div>
        );
    })}
    
    
    </div>
    </div>
    
    
      </div>
    
    
            <div className="parche">
                            <h1>The best people to enjoy your festival. Find them !!l</h1>
                            {   Algorit.cosineRanking && Algorit.cosineRanking.slice(2, 12).map((e: any) => {
                                return (
                                   
                                      
    
                                          <div key={e.name + e.score} role="listitem" className="item">
                   <div role="listitem" className="item">
                    <img src={img} className="ui avatar image" />
                        <div className="content">
          <a className="header">{e.name}</a>
        </div>
      </div>
            </div>
                              
                                );
                            })}
                        </div>
                        
            </div>
    </div>     
    );
    }
   

}

export default observer(Contenido);
