import React, { Component } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from "@fullcalendar/interaction";
import { getPicByDate } from '../favorite-api.js'
import Today from '../pocd/Today.js'


export default class ChooseDay extends Component {

  state = {
    thisDaysPOTD: [],
    displayPOTD: false,
    isLoading: false,
  }

  handleDateClick = async(arg) => { // bind with an arrow function
    this.setState({ isLoading: true })

    console.log(arg.dateStr)

    const data = await getPicByDate(arg.dateStr)
    console.log(data.body)
    this.setState({ isLoading: false, thisDaysPOTD: data.body, displayPOTD: true })
    
  }
  render() {
    return (
      <div>
        {
          this.state.displayPOTD 
          ?
        <div className="showData">
          <Today
          picDets={this.state.thisDaysPOTD} />
        </div>
          :
          <p>Pick a date to see the photo of that day</p>
        }
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
