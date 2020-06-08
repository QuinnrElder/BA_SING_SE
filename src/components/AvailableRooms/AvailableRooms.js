import React from 'react'
import './AvailableRooms.css'
import { postBooking } from '../ApiFetchMethods/ApiFetchMethods'

class AvailableRooms extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  handleEvent = () => {
    postBooking(this.props.room.id, this.props.date, this.props.user.id)
    this.props.changeSearchedState()
  }

  render() {
  return (
    <section className="singleBooking"> 
      <p className="booking-info">Room Number: {this.props.room.number}</p>
      <p className="booking-info">Room Type: {this.props.room.roomType}</p>
      <p className="booking-info">Has Bidet: {this.props.room.bidet}</p>
      <p className="booking-info">Bed Size: {this.props.room.bedSize}</p>
      <p className="booking-info">Number Of Beds: {this.props.room.numBeds}</p>
      <p className="booking-info">Cost Per Night: ${this.props.room.costPerNight}</p>
      <button onClick={this.handleEvent} className="book-room-btn" id={this.props.room.number}>BOOK NOW</button>
    </section>
  )
  }
}
export default AvailableRooms