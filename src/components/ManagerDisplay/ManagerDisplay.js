import React from 'react'
import './ManagerDisplay.css'

const ManagerDisplay = ({user, allUsers, allRooms, allBookings, date}) => {
  
  const getTotalRevenue = () => {
    let newDate = getDateSyntax(date)
    let matchingBookings = allBookings.filter(booking => booking.date === newDate);
    let profits = matchingBookings.reduce((acc, match) => {
      this.rooms.forEach(room => {
        if (room.number === match.roomNumber) {
          acc = room.costPerNight + acc
        }
      })
      return acc
    }, 0)
    return profits
  }

  const getDateSyntax = (date) => {
    let dateArray = date.split('/');
    let day = dateArray[1];
    let month = dateArray[0];
    let year = dateArray[2];
    if (month <= 9) {
      let unformattedDate = `${year}/0${month}/${day}`;
      return unformattedDate
    } else {
      let unformattedDate = `${year}/${month}/${day}`;
      return unformattedDate
    }
  }

  const findNumberOfRoomsAvailable = () => {
    let newDate = getDateSyntax(date)
    let matchingBookings = allBookings.filter(booking => booking.date === newDate)
    let number = (allRooms.length - matchingBookings.length).toFixed(0)
    return number
  }

  const findPercentOfAvailableRooms = () => {
    let percent = ( findNumberOfRoomsAvailable() / allRooms.length) * 100;
    let num = parseInt(percent)
    num.toFixed(0)
    return `${num}`
  }

return (
  <div className='display-manager-info'>

    <div className='info-container'>
      <p className='info-title'>Today's Earnings:</p>
      <p className='info-title'>{` $ ${getTotalRevenue()}`}</p>
    </div>

    <div className='info-container'>
      <p className='info-title'>Rooms Available:</p>
      <p className='info-title'>{findNumberOfRoomsAvailable()}</p>
    </div>

    <div className='info-container'>
      <p className='info-title'>Percentage of Rooms:</p>
      <p className='info-title'>{`${findPercentOfAvailableRooms()}%`}</p>
    </div>

  </div>
  )
}
export default ManagerDisplay