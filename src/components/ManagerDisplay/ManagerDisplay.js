import React from 'react'
import './ManagerDisplay.css'

const ManagerDisplay = ({user, allUsers, allRooms, allBookings}) => {

return (
  <div className='display-manager-info'>

    <div className='info-container'>
      <p className='info-title'>Hello</p>
    </div>

    <div className='info-container'>
      <p className='info-title'>World</p>
    </div>

    <div className='info-container'>
      <p className='info-title'>why?</p>
    </div>

  </div>
  )
}
export default ManagerDisplay