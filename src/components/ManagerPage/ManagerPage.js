import React from 'react'
import './Manager.css'
// import PropTypes from 'prop-types'

import { fetchBookings } from '../ApiFetchMethods/ApiFetchMethods'

import DisplayInfo from '../DisplayInfo/DisplayInfo';

class ManagerPage extends React.Component {
constructor(props) {
  super(props)
  this.state = {
    name: 'manager',
    allBookings: [],
  }
}

componentDidMount = async () => {
  const bookings = await fetchBookings()
  this.setState({ allBookings: bookings })
}

  render() {
  return (
    <div >
      {/* render the search by user form */}
      <DisplayInfo />
    </div>
  )
  }
}

export default ManagerPage