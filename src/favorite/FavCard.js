import React, { Component } from 'react'
import { deleteFavorite, fetchFavorites } from '../favorite-api.js'

export default class FavCard extends Component {

  handleDelete = async () => {
    const favoriteId = this.props.data.id
    try {
    await deleteFavorite({id: favoriteId});
    await this.props.refresh()
    
    } catch(e) {
      console.log(e)
    }

  }
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
        <button onClick={() => this.handleDelete()} className="delete">Delete Favorite</button>
      </li>
    )
  }
}
