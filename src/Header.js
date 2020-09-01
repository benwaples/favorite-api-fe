import React, { Component } from 'react'

export default class extends Component {
  render() {
    return (
      <header>
        <img className="logo" src="newlogo.png" alt="pocd logo"/>
        <h1>Nasa Photos of the Day</h1>
        <nav>
          <p>Today</p>
          <p>Calendar</p>
          <p>Your Favorites</p>
          <p>Logout</p>
        </nav>
      </header>
    )
  }
}
