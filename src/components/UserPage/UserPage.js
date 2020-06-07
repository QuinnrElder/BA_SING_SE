import React from 'react'
import './UserPage.css'

// import PropTypes from 'prop-types'

import DisplayInfo from '../DisplayInfo/DisplayInfo'
import CustomerForm from '../CustomerForm/CustomerForm'
import AvailableRooms from '../AvailableRooms/AvailableRooms'

class UserPage extends React.Component {
  constructor(props)  {
    super(props)
    this.state = {
      user: props.user,
      searchInput: {},
      hasSearched: false,
      availableRooms: [],
      allRooms: props.allRooms,
      date: props.date,
      allBookings: props.allBookings,
    }
  }
  
  getCustomerFormInput = (date, filterType) => {
    this.setState({ searchInput: {date: date, filterType: filterType}, hasSearched: true})
  }

  findingRoomsAvailableToday = () => {
    console.log(this.state.searchInput.filterType)
    if (this.state.searchInput.filterType === '') {
      let bookingNums = this.getAllRoomNumbersBookedToday()
      let availableRooms = this.findAvailableRoomNumbers(bookingNums)
      console.log(availableRooms)
      return this.displayAvailableRoomsInfo(availableRooms)
    } else {
      let bookingNums = this.getAllRoomNumbersBookedToday()
      let availableRooms = this.findAvailableRoomNumbers(bookingNums)
      let displayFilteredRoomType = this.findFilteredRoomType(availableRooms)
      console.log(displayFilteredRoomType)
      return this.displayAvailableRoomsInfo(displayFilteredRoomType)
    }
  }

  getAllRoomNumbersBookedToday = () => {
    let booked = []
    this.state.allBookings.forEach(booking => {
      if (booking.date === this.state.searchInput.date) {
        booked.push(booking.roomNumber)
      }
    })
    return booked
  }

  findAvailableRoomNumbers = (bookingNums) => {
    let newHotel = this.state.allRooms
    bookingNums.forEach(booking => {
      newHotel.forEach(room => {
        if (room.number === booking) {
          const value = newHotel.indexOf(room)
          newHotel.splice(value, 1)
        }
      })
    })
    return newHotel
  }

  findFilteredRoomType = (availableRooms) => {
    let filtered = []
    availableRooms.forEach(room => {
      if (room.roomType === this.state.searchInput.filterType) {
        filtered.push(room)
        return filtered
      }
    })
    return filtered
  }

 displayAvailableRoomsInfo = (availableRooms) => {
    return availableRooms.map(room => {
      return (
        <AvailableRooms key={Math.floor(Math.random() * 10000000) + 1} room={room} />
        ) 
    })
  }
  
  render() {
    console.log(this.state)
    return (
      <div className='user-page' >
        <h3 className='user-page-header'>{ `Welcome ${this.state.user.name}` }</h3>
        <div className='main-form-and-res-container'>
        <CustomerForm getCustomerFormInput={this.getCustomerFormInput}/>
        {this.state.hasSearched && <div className='form-test'>{this.findingRoomsAvailableToday()}</div>}
        </div>
        <DisplayInfo  user={this.state.user} />
      </div>
    )
  }
}

export default UserPage