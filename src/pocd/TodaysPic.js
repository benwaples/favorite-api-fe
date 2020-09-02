import React, { Component } from 'react'
import { getPic } from '../favorite-api.js'
import Today from './Today.js'
export default class TodaysPic extends Component {

  state = {
    pic: {},
    isLoading: false
  }

  componentDidMount = async () => {
    !this.props.checkState() && this.props.history.push('/')

    try {
      this.setState({isLoading: true})
      const data = await getPic();

      console.log(data.body)
      data === 'Not Found' ?
      this.setState({ pic: {title: 'this day isnt available yet'} })
      :
      this.setState({ pic: data.body, isLoading: false})

      
    } catch (e) {
      console.log(e.message)
    }

  }
  render() {
    const {
      pic
    } = this.state
    return (
      <div className="todayPic">
        {
          !this.state.isLoading ?
          <Today picDets={pic}/>
          :
          <p>loading</p>
        }
      </div>
    )
  }
}
