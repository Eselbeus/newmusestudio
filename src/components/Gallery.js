import React from 'react'
import '../App.css'
import pic1 from '../images/api.jpg'
import pic2 from '../images/dolanSetup1.jpg'

const Gallery = () => {
  return (
    <div className="Gallery">
      <h1 className="headers">New Muse Studio</h1>
      <h3>Welcome to New Muse Studio</h3>
      <h2 className='headers-smaller'>Photo Gallery</h2>
      <div className="image-container">
        <img className="gallery-pics" src={pic1}/>
        <img className="gallery-pics" src={pic2}/>
      </div>
    </div>
  )
}

export default Gallery;
