import React from 'react'
import './DisplayInfo.css'
// import PropTypes from 'prop-types'

const DisplayInfo = ({ user }) => {
  const displayBookings = () => {
    return user.userBookings.map(booking => {
      return (
        <div key={booking.id}className='each-booking-container'>
          <p className='booking-text'> Confirmation <span className='insertedText'>{booking.id}</span></p>
          <p className='booking-text'> Room #<span className='insertedText'>{booking.roomNumber}</span></p>
          <p className='booking-text'> Date #<span className='insertedText'>{booking.date}</span></p>
        </div>
      )
    })
  }

  // const findTotalSpent = () => {
    
  // }

  return (
  <div className='display-info'>
    <p className='bookings-title'><span>Total $</span>BOOKINGS</p>
    <div className='display-info-container'>
      {displayBookings()}
    </div>
  </div>
  )
}
export default DisplayInfo