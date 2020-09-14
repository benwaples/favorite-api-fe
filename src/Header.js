import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import e from 'cors';

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

  

  render() {
    return (
      <>
        <header>
          <img className="logo" src="newlogo.png" alt="pocd logo"/>
          <h1>Ben's NASA app</h1>
        </header>
        
        <nav>
        {
          this.state.displayNav 
          ?
          <>
            <Link to="/TodaysPic">Today</Link>
            <Link to="/Calendar">Calendar</Link>
            <Link to="/FavPage">Your Favorites</Link>
            <Link to="/">Logout</Link>
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
