import React, { Component } from 'react'

export default class DisplaySignIn extends Component {
  render() {

    const {
      handleSignIn,
      handleSignInEmail,
      handleSignInPassword
    } = this.props;

    return (
      <div>
        <form className="sign" onSubmit={handleSignIn}>
          <label>
            <h5>Email</h5>
            <input type="email" onChange={handleSignInEmail} />
          </label>
          <label>
            <h5>Password</h5>
            <input type="password" onChange={handleSignInPassword} />
          </label>
          <button>Sign In</button>
        </form>
      </div>
    )
  }
}