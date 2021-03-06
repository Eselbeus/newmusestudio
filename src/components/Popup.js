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
        <p className="x" onClick={this.handleClickClose}>&times;</p>
        <div className="inner">
        <h3>AUDIO DEMOS</h3>
        <p>Check out the audio demos of podcasts and music recorded!</p>
        <br/>
        <Link to="/audio"><button className='button' onClick={this.props.togglePopup}>CLICK HERE!</button></Link>
        </div>
      </div>
    )
  }
}

export default Popup;
