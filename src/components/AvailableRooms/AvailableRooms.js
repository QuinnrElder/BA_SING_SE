import React from 'react'
import './AvailableRooms.css'

const AvailableRooms = ({room}) => {

  return (
    <section className="singleBooking"> 
      <p className="booking-info">Room Number: {room.number}</p>
      <p className="booking-info">Room Type: {room.roomType}</p>
      <p className="booking-info">Has Bidet: {room.bidet}</p>
      <p className="booking-info">Bed Size: {room.bedSize}</p>
      <p className="booking-info">Number Of Beds: {room.numBeds}</p>
      <p className="booking-info">Cost Per Night: ${room.costPerNight}</p>
      <button className="book-room-btn" id={room.number}>BOOK NOW</button>
    </section>
  )
}
export default AvailableRooms