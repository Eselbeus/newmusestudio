import React from 'react'
import '../App.css'

const Audio = () => {
  return (
    <div className="Audio">
      <h1 className="headers">New Muse Studio</h1>
      <h3>Welcome to New Muse Studio</h3>
      <h2 className='headers-smaller'>Podcasts</h2>
      <div className="audio-containers">
      <a className="podcast-links" href="http://wnyc.org/story/244707-kirk-hammett">Kirk Hammett Interview on Soundcheck</a>
      </div>
      <div className="audio-containers">
      <a className="podcast-links" href="http://wnyc.org/story/210442-mynabirds-studio">The Mynabirds Live on Soundcheck</a>
      </div>
      <h2 className='headers-smaller'>Audio Tracks</h2>
      <iframe width="80%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1105128652&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
    </div>
  )
}

export default Audio;
