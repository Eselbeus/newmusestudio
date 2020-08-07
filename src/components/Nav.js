import React from 'react'
import { BrowserRouter as Link, NavLink, Router } from 'react-router-dom'
import Popup from '../components/Popup'
import '../App.css'

class Nav extends React.Component {
  state = {
    seen: true
  }

  togglePopup = () => {
    this.setState({
      seen: false
    })
  }

  render(){
    return (
      <div>
      <div className="nav-container">
        <nav className="desktop-nav">
          <NavLink className="nav-elem" to="/" onClick={this.navReset}>HOME</NavLink>
          <NavLink className="nav-elem" to="/gallery" onClick={this.navReset}>GALLERY</NavLink>
          <NavLink className="nav-elem" to="/audio" onClick={this.navReset}>AUDIO TRACKS</NavLink>
        </nav>
      </div>
      {this.state.seen ? <Popup togglePopup={this.togglePopup} /> : ''}
      {this.state.seen ? <div className="shading"></div> : ''}
      </div>
    )
  }
}

export default Nav;
