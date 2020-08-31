import React, { Component } from 'react'
import './App.css';
import {
  BrowserRouter as Router, 
  Route,
  Switch,
} from 'react-router-dom';
import AuthPage from './Auth/AuthPage.js'
// import Header from './Header.js'

export default class App extends Component {

  state ={
    token: localStorage.getItem('TOKEN')
  }
   // passed to AuthPage to handle the user signin/signup
  handleAuth = (token) => {
    this.setState({ token: token})

    localStorage.setItem('TOKEN', token)

    console.log(this.state.token);
  }

  handleSignOut = () => {
    this.setState({ token: ''});

    localStorage.setItem( 'TOKEN', '')
  }

  // check if the user is signed in, if not return false and we bounce them to AuthPage
  checkState = () => {
    if(this.state.token) {
      return true 
    }else {
      return false;
    } 
  }

  render() {
    return (
      <div className="stayCalm">
      <Router>
        {/* <Header /> */}
          <Switch>
              <Route 
                  path="/" 
                  exact
                  render={(routerProps) => <AuthPage 
                    auth={this.handleAuth}
                    {...routerProps} />} 
              />
          </Switch>
      </Router>
  </div>
    )
  }
}
