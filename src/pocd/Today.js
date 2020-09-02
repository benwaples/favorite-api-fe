import React, { Component } from 'react'
import { addPic } from '../favorite-api.js'

export default class Today extends Component {
  
  handleAdd = async () => {
    await addPic(this.props.picDets)
  }

  render() {


    const {
      picDets
    } = this.props
    return (
      <div>
        <h3>{picDets.title}</h3>
        <h6>{picDets.date}</h6>
        {
          picDets.media === 'video' ?
          <video controls>
            <source src={picDets.url} type="video/mp4" />
          </video> 
          :
          <img  src={picDets.url} alt={picDets.title} />
        }
        <p>{picDets.description}</p>
        <p>Copyright: {picDets.copyright}</p>
        <button onClick={this.handleAdd} className="add">Add to Favorites</button>
      </div>
    )
  }
}
