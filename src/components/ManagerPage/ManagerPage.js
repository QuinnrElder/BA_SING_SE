import React from 'react'
import './ManagerPage.css'
// import PropTypes from 'prop-types'

import ManagerDisplay from '../ManagerDisplay/ManagerDisplay'

const ManagerPage = ( {user, allUsers, allRooms, allBookings, date}) => {

  return (
    <div className='user-page'>
      {/* render the search by user form */}
      <ManagerDisplay user={user} allUsers={allUsers} allRooms={allRooms} allBookings={allBookings} date={date} />
    </div>
  )
  
}

export default ManagerPage