import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './fonts/ChunkFive-Regular.otf'
import Nav from './components/Nav.js'
import Gallery from './components/Gallery.js'
import Audio from './components/Audio.js'
import Contact from './components/Contact.js'

ReactDOM.render(
  <Router>
    <Nav />
    <Route exact path='/' component={App} />
    <Route exact path='/gallery' component={Gallery} />
    <Route exact path='/audio' component={Audio} />
    <Route exact path='/contact' component={Contact} />
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
