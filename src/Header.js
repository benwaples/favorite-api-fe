import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class extends Component {
  render() {
    return (
      <header>
        <img className="logo" src="newlogo.png" alt="pocd logo"/>
        <h1>Nasa Photos of the Day</h1>
        <nav>
          <Link to="/TodaysPic">Today</Link>
          <Link to="/Calendar">Calendar</Link>
          <Link to="/FavPage">Your Favorites</Link>
          <Link to="/">Logout</Link>
        </nav>
      </header>
    )
  }
}
