import React from 'react'
import '../App.css'

const Audio = () => {
  return (
    <div className="Audio">
      <h1 className="headers">New Muse Studio</h1>
      <h3>Welcome to New Muse Studio</h3>
      <h2 className='headers-smaller'>Podcasts</h2>
      <div className="audio-containers">
      <a className="podcast-links important-podcast" href="https://echomusings.com/">Echo Musings - All Episodes - Host, Producer, and Creator</a>
      </div>
      <div className="audio-containers">
      <a className="podcast-links" href="http://www.wnyc.org/story/246243-weird-al-paper/">Weird Al Interview</a>
      </div>
      <div className="audio-containers">
      <a className="podcast-links" href="http://wnyc.org/story/244707-kirk-hammett">Kirk Hammett Interview</a>
      </div>
      <div className="audio-containers">
      <a className="podcast-links" href="http://wnyc.org/story/210442-mynabirds-studio">The Mynabirds Live</a>
      </div>
      <div className="audio-containers">
      <a className="podcast-links" href="https://www.newsounds.org/story/191219-willie-was-always-on-his-mind">Willie Was Always On His Mind</a>
      </div>
      <div className="audio-containers">
      <a className="podcast-links" href="https://www.newsounds.org/story/193765-the-hunger-games-sounds-of-dystopia">The Hunger Games: Sounds of Dystopia</a>
      </div>
      <div className="audio-containers">
      <a className="podcast-links" href="https://www.wnyc.org/story/196602-andrew-bird-live/">Andrew Bird: Live from the Greene Space</a>
      </div>
      <div className="audio-containers">
      <a className="podcast-links" href="https://www.newsounds.org/story/199615-bob-marleys-legend/">Bob Marley's Legend</a>
      </div>
      <div className="audio-containers">
      <a className="podcast-links" href="https://www.newsounds.org/story/204562-judy-garland-at-the-end/">Judy Garland: At the End</a>
      </div>
      <div className="audio-containers">
      <a className="podcast-links" href="https://www.newsounds.org/story/212220-deal-with-the-devil">Deal With The Devil</a>
      </div>
      <div className="audio-containers">
      <a className="podcast-links" href="https://www.newsounds.org/story/214349-tony-tony-tonys">Tony Tony Tonys</a>
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

      <h2 className='headers-smaller'>Audio Tracks</h2>
      <iframe width="80%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1105128652&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
    </div>
  )
}

export default Audio;
