import React, { Component } from 'react'

export default class DisplaySignUp extends Component {
  render() {

    const {
      handleSignUp,
      handleSignUpEmail,
      handleSignUpPassword
    } = this.props;

    return (
      <div>
        <form className="sign" onSubmit={handleSignUp}>
          <label>
          <h5>Email</h5>
            <input type="email" onChange={handleSignUpEmail} />
          </label>
          <label>
          <h5>Password</h5>
            <input type="password" onChange={handleSignUpPassword} />
          </label>
          <button>Sign Up</button>
        </form>
      </div>
    )
  }
}