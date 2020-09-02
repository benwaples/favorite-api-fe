import React, { Component } from 'react'

export default class FavDets extends Component {
  render() {
    const {
      dets
    } = this.props
    return (
      <div className="detailsCard">
        <h2>{dets.title}</h2>
        {
          dets.media === 'video' ?
          <video controls>
            <source src={dets.url} type="video/mp4" />
          </video> 
          :
          <img src={dets.url} alt={dets.title} />
        }
        <p>{dets.copyright}</p>
        <p>{dets.date}</p>
      </div>
    )
  }
}
