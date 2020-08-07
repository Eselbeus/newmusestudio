import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom';

class Popup extends React.Component {

  handleClickClose = () => {
    this.props.togglePopup()
  }

  render(){
    return (
      <div className="popup">
        <p className="x" onClick={this.handleClickClose}>x</p>
        <h3>AUDIO DEMOS</h3>
        <p>Check out the audio demos of podcasts and music recorded!</p>
        <br/>
        <Link to="/audio"><button className='button' onClick={this.props.togglePopup}>Click here!</button></Link>
      </div>
    )
  }
}

export default Popup;
