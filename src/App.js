import React from 'react';
import Popup from './components/Popup'
import './App.css';
import pic from './images/newmusehome.png'
import pic2 from './images/micpic.png'
import './fonts/ChunkFive-Regular.otf'

class App extends React.Component {


  render(){
    return (
      <div className="App">
        <h1 className="headers">New Muse Studio</h1>
        <h3>Welcome to New Muse Studio</h3>
        <div className="image-backing">
          <img className="image-home" src={pic}/>
        </div>
        <p>We help musicians establish their place in the industry!</p>
        <h2 className='headers-smaller'>About Us</h2>
        <div className="home-description">
          <h4>MUSIC IS OUR PASSION</h4>
          <p>Music is what we know, do, and love. There is always something new that can be discovered by mixing beats, tempos, rhythms, and melodies. We are committed to discovering the creativity artists possess and bringing them to new heights in the industry.
          </p>
          <h4>STARTING WITH A BEAT</h4>
          <p>As experienced producers in the industry, we know how to rearrange and mix sound to make great music. Once we've worked together to create your distinct sound, we help you get your music in front of labels and establish your image.
          </p>
          <h4>MARKETING YOUR IMAGE</h4>
          <p>Nowadays, everything in our culture is visual. A fantastic EP or podcast can only get you so far; you need an image to go with your music. Your passion and love for what you do is what will connect you with your audience, so we want to support you and your vision.
          </p>
        </div>
        <img className="bottom-image" src={pic2}/>
        <p>Copyright © 2020 New Muse Studio - All Rights Reserved.</p>

      </div>
    );
  }
}

export default App;
