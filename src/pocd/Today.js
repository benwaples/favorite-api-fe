import React, { Component } from 'react'

export default class Today extends Component {
  render() {

    const {
      picDets
    } = this.props
    return (
      <div>
        {
          picDets.media === 'video' ?
          <iframe></iframe> 
          :
          <img  src={picDets.img} alt={picDets.title} />
        }
        <p>{picDets.title}</p>
      </div>
    )
  }
}
