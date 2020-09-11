import React, { Component } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'


export default class ChooseDay extends Component {
  render() {
    return (
      <div>
        <div className="chooseDay">
          <FullCalendar
          plugins={[ dayGridPlugin ]}
          initialView="dayGridMonth"
          />
        </div>
      </div>
    )
  }
}
