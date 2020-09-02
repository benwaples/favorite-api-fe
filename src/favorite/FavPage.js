import React, { Component } from 'react'
import { fetchFavorites } from '../favorite-api.js'
import FavCard from './FavCard.js'
import FavDets from './FavDets.js'

export default class FavPage extends Component {

  state = {
    favorites: [],
    isLoading: false,
    dets: {},
    isDetails: false
  }

  componentDidMount = async () => {
    this.props.checkState()

    try {
      this.setState({ isLoading: true})
      const data = await fetchFavorites();

      this.setState({ favorites: data.body, isLoading: false})

      console.log(data.body)
    } catch (e) {
        console.log(e.message)
      }
  }

  handleRefresh = async () => {
    try {
      this.setState({ isLoading: true})
      const data = await fetchFavorites();

      this.setState({ favorites: data.body, isLoading: false})

      console.log(data.body)
    } catch (e) {
        console.log(e.message)
      }
  }

  handleDetails = (fav) => {
    this.setState({ isDetails: true, dets: fav})
  }
  
  render() {
    return (
      <div className="largeFav">
        {
          this.state.isDetails && 
          <section>
            <FavDets dets={this.state.dets}/>
          </section>
        }
        <div className="favpage">
          <ul>
            {
              !this.state.isLoading ?
              this.state.favorites.map(favorite => {
                return <FavCard 
                data={favorite}
                refresh={this.handleRefresh}
                handleDetails={this.handleDetails} 
                key={favorite.id}/>
              })
              :
              'loading'
            }
          </ul>
        </div>
      </div>
    )
  }
}

