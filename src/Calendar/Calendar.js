import React, { Component } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from "@fullcalendar/interaction";
import { getPicByDate } from '../favorite-api.js'
import Today from '../pocd/Today.js'
import ReactNotification from 'react-notifications-component'
import { store } from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'

const notification = {
  title: "Wonderful!",
  message: "Configurable",
  type: "success",
  insert: "top",
  container: "top-right",
  dismiss: {
    duration: 4000
  },
  animationIn: ["animated", "fadeIn"],
  animationOut: ["animated", "fadeOut"]
};

export default class ChooseDay extends Component {

  state = {
    thisDaysPOTD: [],
    displayPOTD: false,
    isLoading: false,
  }

  handleDateClick = async(arg) => { 
    try {
    this.setState({ isLoading: true, displayPOTD: true })

    console.log(arg.dateStr)

    const data = await getPicByDate(arg.dateStr)
    console.log(data.body)
    this.setState({ isLoading: false, thisDaysPOTD: data.body })
    } catch(error){
      store.addNotification({
        ...notification,
        title: 'Invalid Date',
        message: "Pick a day before today",
        type: "info",
      })
      
      this.setState({ isLoading: false, displayPOTD: false})
    }

  }
  render() {
    return (
      <div className="calenderPage">
        <ReactNotification />
        <div className="showData">
        {
          !this.state.displayPOTD 
          ? <p>Pick a date and see the Nasa picture of that day</p>
          :
          (!this.state.isLoading 
          ?
        
          <Today
          picDets={this.state.thisDaysPOTD} />
        
          :
          <img className="loading" src="https://media.giphy.com/media/U1xhSePCu5pLff8NBy/giphy.gif" alt="loading" />)
        }
        </div>
        <div className="chooseDay">
          <FullCalendar
          plugins={[ dayGridPlugin, interactionPlugin]}
          dateClick={this.handleDateClick}
          initialView="dayGridMonth"
          />
        </div>
      </div>
    )
  }
}
