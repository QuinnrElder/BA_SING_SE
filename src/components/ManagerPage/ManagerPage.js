import React from 'react'
import './ManagerPage.css'
// import PropTypes from 'prop-types'

import ManagerDisplay from '../ManagerDisplay/ManagerDisplay'
import ManagerForm from '../ManagerForm/ManagerForm'
import CustomerForm from '../CustomerForm/CustomerForm'
import AvailableRooms from '../AvailableRooms/AvailableRooms'


class ManagerPage extends React.Component {
  constructor( props ) {
    super( props )
    this.state = {
      hasSearched: false,
      hasBeenSearched: false,
      userName: '',
      searchInput: {},
      user: props.user,
      availableRooms: [],
      allRooms: props.allRooms,
      date: props.date,
      allBookings: props.allBookings,
    }
  }

  getManagerFormInput = (userName) => {
    this.setState({ userName: userName})
    this.setState({  hasBeenSearched: true})
  }

  getCustomerFormInput = (date, filterType) => {
    this.setState({ searchInput: {date: date, filterType: filterType}, hasSearched: true})
  }

  findingRoomsAvailableToday = () => {
    if (this.state.searchInput.filterType === '') {
      let bookingNums = this.getAllRoomNumbersBookedToday()
      let availableRooms = this.findAvailableRoomNumbers(bookingNums)
      return this.displayAvailableRoomsInfo(availableRooms)
    } else {
      let bookingNums = this.getAllRoomNumbersBookedToday()
      let availableRooms = this.findAvailableRoomNumbers(bookingNums)
      let displayFilteredRoomType = this.findFilteredRoomType(availableRooms)
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
    let newHotel = this.props.allRooms
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
      if (room.roomType === this.props.searchInput.filterType) {
        filtered.push(room)
        return filtered
      }
    })
    return filtered
  }

 displayAvailableRoomsInfo = (availableRooms) => {
    return availableRooms.map(room => {
      return (
        <AvailableRooms key={Math.floor(Math.random() * 10000000) + 1} room={room} date={this.props.searchInput.date} user={this.props.user}/>
        ) 
    })
  }

  searchForUser = () => {
    console.log(typeof this.state.userName)

    let newUser = this.props.allUsers.find(user => {
     if(user.name === this.state.userName) {
       console.log(user)
       return user
     }
    })
    return (
      <div className='user-page-for-manager' >
        <h3 className='user-page-header-for-manager'>{ this.state.userName }</h3>
        <div className='main-form-and-res-container-for-manager'>
        <CustomerForm getCustomerFormInput={this.getCustomerFormInput}/>
        {this.state.hasSearched && <div className='form-test-for-manager'>{this.findingRoomsAvailableToday()}</div>}
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className='manager-page'>
        <div className='main-form'>
        <ManagerForm getManagerFormInput={this.getManagerFormInput}/>
        {this.state.hasBeenSearched && <div className='form-test'>{this.searchForUser()}</div>}
        </div>
        <ManagerDisplay user={this.props.user} allUsers={this.props.allUsers} allRooms={this.props.allRooms} allBookings={this.props.allBookings} date={this.props.date} />
      </div>
    )
  }
}
export default ManagerPage