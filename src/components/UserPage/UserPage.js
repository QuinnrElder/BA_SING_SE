import React from 'react'
import './UserPage.css'

const UserPage = ({ user }) => {

  return (
    <div className='user-page' >
      <h3 className='user-page-header'>{`Welcome ${user.name}` }</h3>
    </div>
  )
}

export default UserPage