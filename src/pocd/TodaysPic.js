import React, { Component } from 'react'

export default class TodaysPic extends Component {

  state = {

  }

  componentDidMount = async () => {
    !this.props.checkState() && this.props.history.push('/')
  }
  render() {
    return (
      <div>
        toot
      </div>
    )
  }
}
