import React, { Component } from 'react'
import { addPic } from '../favorite-api.js'

export default class Today extends Component {
  
  handleAdd = async () => {
    try {
      await addPic(this.props.picDets)
    } catch(error) {
      console.log(error)
    }
  }

  render() {

    const {
      picDets
    } = this.props
    
    return (
      <>
        <h3>{picDets.title}</h3>
        <h6>{picDets.date}</h6>
        {
          picDets.media_type === 'video' ?
          <iframe src={picDets.src} className="videoCard" title={picDets.title} allowFullScreen>
          </iframe> 
          :
          <img src={picDets.url} alt={picDets.title} />
        }
        <p className="cr">Description:</p>
        <p className="descrip" >{picDets.description}</p>
        <button onClick={this.handleAdd} className="add">Add to Favorites</button>
      </>
    )
  }
}
