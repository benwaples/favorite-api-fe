import React, { Component } from 'react'
import { deleteFavorite } from '../favorite-api.js'


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
          data.url.includes('youtube') ?
          <iframe src={data.url} title={data.title} className="videoCard" allowFullScreen>
          </iframe> 
          :
          <img className="cardMedia" src={data.url} alt={data.title} />
        }
        <button onClick={() => (handleDetails(data))} className="details">See Details</button>
        <button onClick={() => this.handleDelete()} className="delete">Delete Favorite</button>
      </li>
    )
  }
}
