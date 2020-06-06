import React from 'react'

const ManagerPage = ({ user }) => {

  return (
    <div >
      <h1 >{`Welcome ${user.name}` }</h1>
    </div>
  )
}

export default ManagerPage