import React from 'react'
import './ManagerPage.css'
// import PropTypes from 'prop-types'

import ManagerDisplay from '../ManagerDisplay/ManagerDisplay'
import ManagerForm from '../ManagerForm/ManagerForm'
import UserPage from '../UserPage/UserPage.test'

class ManagerPage extends React.Component {
  constructor( props ) {
    super( props )
    this.state = {
      user: props.user,
      allUsers: props.allUsers, 
      allRooms: props.allRooms, 
      allBookings: props.allBookings, 
      date: props.date,
      hasSearched: false,
      userName: '',
    }
  }

  getCustomerFormInput = (userName) => {
    this.setState({ userName: userName, hasSearched: true})
  }

  // here is where I want to find the searched user
  // render the user page with all the users info attached
  // running into an issue with the allUsers data not having all the bookings for each user 
  // searchForUser = () => {
  //   let searchedUser = this.state.allUsers.find( user => user.name === this.state.userName)
  //   return <UserPage />
  // }

  render() {
    return (
      <div className='user-page'>
        <div className='main-form-and-res-containers'>
        <ManagerForm getCustomerFormInput={this.getCustomerFormInput}/>
        {this.state.hasSearched && <div className='form-test'>{}</div>}
        </div>
        <ManagerDisplay user={this.state.user} allUsers={this.state.allUsers} allRooms={this.state.allRooms} allBookings={this.state.allBookings} date={this.state.date} />
      </div>
    )
  }
}
export default ManagerPage