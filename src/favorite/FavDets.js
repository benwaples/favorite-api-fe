import React, { Component } from 'react'

export default class FavDets extends Component {
  render() {
    const {
      dets
    } = this.props
    return (
      <div className="detailsCard">
        <h1>More Details on:</h1>
        <h3>{dets.title}</h3>
        {
          dets.url.includes('youtube') ?
          <iframe src={dets.url} title={dets.title} className="videoCard" allowFullScreen>
          </iframe> 
          :
          <img src={dets.url} alt={dets.title} />
        }
        <p>{dets.copyright}</p>
        <p>{dets.date}</p>
      </div>
    )
  }
}
