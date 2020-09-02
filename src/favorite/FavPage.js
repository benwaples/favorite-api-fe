import React, { Component } from 'react'
import { fetchFavorites } from '../favorite-api.js'
import FavCard from './FavCard.js'

export default class FavPage extends Component {

  state = {
    favorites: [],
    isLoading: false
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
  render() {
    return (
      <div className="favpage">
        <ul>
          {
            !this.state.isLoading ?
            this.state.favorites.map(favorite => {
              return <FavCard data={favorite} key={favorite.id}/>
            })
            :
            'loading'
          }
        </ul>
      </div>
    )
  }
}

