import React from 'react';
import {Component} from 'react';

import {observer} from 'mobx-react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';


import NavBar from '../NavBar/NavBar';
import Banner from '../Banner/Banner';
import Algorit from '../storage/Algorit';
import Contenido from '../Contenido/Contenido';
import Festival from '../Festival/Festival';

class App extends Component {

  constructor(props: any){
    super(props);
  }
  componentDidMount() {
    Algorit.csvGetDataAsync();
    setTimeout(() => {
      Algorit.csvGetPopulation();
      Algorit.cosineSingularityGeneral(1);
      Algorit.csvFest();
    }, 2000);
  }

render(){
  return (

  
    <div className="Coachella">
    
        <Banner/>
        <Contenido/>
 
    </div>
  
  );
}
 
}

export default App;
