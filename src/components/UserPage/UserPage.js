import React from 'react'

const UserPage = ({ user }) => {

  return (
    <div>
      <h1 >{`Welcome ${user.name}` }</h1>
    </div>
  )
}

export default UserPage