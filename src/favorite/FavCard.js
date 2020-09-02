import React, { Component } from 'react'

export default class FavCard extends Component {
  render() {
    const {
      data,
      handleDetails
    } = this.props
    return (
      <li>
        <h3>{data.title}</h3>
        {
          data.media === 'video' ?
          <video className="cardMedia" controls>
            <source src={data.url} type="video/mp4" />
          </video> 
          :
          <img className="cardMedia" src={data.url} alt={data.title} />
        }
        <button onClick={() => (handleDetails(data))} className="details">See Details</button>
        <button className="delete">Delete Favorite</button>
      </li>
    )
  }
}
