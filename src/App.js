import React from 'react';
import { Route, Switch, withRouter } from "react-router-dom";
import Popup from './components/Popup'
import Nav from './components/Nav.js'
import Home from './components/Home.js'
import Gallery from './components/Gallery.js'
import Audio from './components/Audio.js'
import Contact from './components/Contact.js'
import './App.css';
import pic from './images/newmusehome.png'
import pic2 from './images/micpic.png'
import './fonts/ChunkFive-Regular.otf'

class App extends React.Component {

  render(){
    return (
      <div>
      <Nav />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/gallery' component={Gallery} />
        <Route exact path='/audio' component={Audio} />
        <Route exact path='/contact' component={Contact} />
      </Switch>
      </div>
    );
  }
}

export default App;
