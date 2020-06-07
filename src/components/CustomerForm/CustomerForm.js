import React from 'react'
import './CustomerForm.css'

const CustomerForm = () => {

  return (
    <form className='form'>
      <label className='room-label' >Check Room Availability</label>
      <p className='date-helper'>date format 'mm/dd/yyyy'</p>
      <input className='input-name' type='text' placeholder='Search By Date'></input>
      <label className='filter-label'>Filter By Room-Type</label>
      <select class='filter-input' type='text'>
        <option>none</option>
        <option>residential suite</option>
        <option>suite</option>
        <option>single room</option>
        <option>junior suite</option>
      </select>
      <button className='submit-user-form'>search</button>
    </form>
  )
}
export default CustomerForm