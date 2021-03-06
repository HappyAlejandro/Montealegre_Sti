import React from 'react';
import {Component} from 'react';
import './App.css';
import {observer} from 'mobx-react';
import { BrowserRouter as Router, Route, Switch, Link, HashRouter } from 'react-router-dom';
import Coachella from '../Coachella/Coachella';

import NavBar from '../NavBar/NavBar';
import Banner from '../Banner/Banner';
import Algorit from '../storage/Algorit';
import Contenido from '../Contenido/Contenido';
import Festival from '../Festival/Festival';
import Login from '../Login/Login';

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

    <HashRouter basename="/Montealegre_Sti">
    <div className="App">
  
   <Switch>
   <Route path='/' exact component={Coachella}></Route>

<Route path='/festival' exact component={Festival}></Route>
     </Switch>
  
    </div>
    </HashRouter>
  );
}
 
}

export default App;
