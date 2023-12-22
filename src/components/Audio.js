import React from 'react'
import '../App.css'
import misfits from '../images/Misfits.mp4'

const Audio = () => {
  return (
    <div className="Audio">
      <h1 className="headers">New Muse Studio</h1>
      <h3>Welcome to New Muse Studio</h3>
      <h2 className='headers-smaller'>Multimedia</h2>
      <div className="audio-containers media-item">Hotel Promo</div>
      <video width="640" height="480" controls>
        <source src={misfits} type="video/mp4"/>
      </video>
      <h2 className='headers-smaller'>Life Lemons Podcast</h2>
      <div className="audio-containers">
      <a className="podcast-links important-podcast" href="https://www.youtube.com/watch?v=qrDSHV692CM&list=PLSu3A-dD9H2ya7zXWIUD3oEHxzjbEhQt_&index=2">Life Lemons Podcast</a>
      </div>
      <h2 className='headers-smaller'>Echo Musings</h2>
      <div className="audio-containers">
      <a className="podcast-links important-podcast" href="https://echomusings.com/">Echo Musings - All Episodes - Host, Producer, and Creator</a>
      </div>

      <h2 className='headers-smaller'>Audio Tracks</h2>
      <iframe width="80%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1105128652&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
      <h2 className='headers-smaller'>Other Podcasts</h2>
      <div className="audio-containers">
      <a className="podcast-links" href="http://www.wnyc.org/story/246243-weird-al-paper/">Weird Al Interview</a>
      </div>
      <div className="audio-containers">
      <a className="podcast-links" href="http://wnyc.org/story/244707-kirk-hammett">Kirk Hammett Interview</a>
      </div>
      <div className="audio-containers">
      <a className="podcast-links" href="https://www.newsounds.org/story/193765-the-hunger-games-sounds-of-dystopia">The Hunger Games: Sounds of Dystopia</a>
      </div>
      <div className="audio-containers">
      <a className="podcast-links" href="https://www.newsounds.org/story/199615-bob-marleys-legend/">Bob Marley's Legend</a>
      </div>
      <div className="audio-containers">
      <a className="podcast-links" href="https://www.newsounds.org/story/204562-judy-garland-at-the-end/">Judy Garland: At the End</a>
      </div>
      <div className="audio-containers">
      <a className="podcast-links" href="https://www.newsounds.org/story/238749-ben-folds-five-strikes-back-and-michael-kiwanuka-acoustic">Ben Folds Five Strikes Back And Michael Kiwanuka Acoustic</a>
      </div>
      <div className="audio-containers">
      <a className="podcast-links" href="https://www.wnyc.org/story/253192-rndm/">Pearl Jam's Jeff Ament And Joseph Arthur Are RNDM</a>
      </div>
      <div className="audio-containers">
      <a className="podcast-links" href="https://www.newsounds.org/story/253962-leonard-cohen-biography-david-yazbek-in-the-studio/">Leonard Cohen Biography, David Yazbek In The Studio</a>
      </div>
    </div>
  )
}

export default Audio;
