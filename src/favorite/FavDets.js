import React, { Component } from 'react'

export default class FavDets extends Component {
  render() {
    const {
      dets
    } = this.props
    return (
      <div>
          {dets.title}
      </div>
    )
  }
}
