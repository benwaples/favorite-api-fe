import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class extends Component {

  state = {
    displayNav: false
  }

  handleNav = () => {
    const navBar = document.querySelector('nav')

    if(this.state.displayNav) {
    this.setState( {displayNav: false }) 
    navBar.classList.remove('stretch')
    } else {
    this.setState( {displayNav: true })
    navBar.classList.add('stretch')
    }
    
  }

  handleReset = () => {
    this.setState({ displayNav: false })
  }

  render() {
    return (
      <>
        <header>
          <img className="logo" src="newlogo.png" alt="pocd logo"/>
          <h1>My Favorite NASA photos</h1>
        </header>
        
        <nav>
        {
          this.state.displayNav 
          ?
          <>
            <Link onClick={this.handleNav} to="/TodaysPic">Today</Link>
            <Link onClick={this.handleNav} to="/Calendar">Calendar</Link>
            <Link onClick={this.handleNav} to="/FavPage">My Favorites</Link>
            <Link onClick={this.handleNav} to="/">Logout</Link>
            <p onClick={this.handleNav}>Minimize</p>
            </>
          :
          <img className="navIcon" src="./menuIcon.png" alt="toolbar" onClick={this.handleNav} />

        }
        </nav>
        
      </>
    )
  }
}
