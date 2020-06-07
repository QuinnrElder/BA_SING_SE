import React from 'react'
import './CustomerForm.css'

class CustomerForm extends React.Component {
  constructor(props) {
    super(props) 
    this.state = {
      date: '',
      filterType: '',
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  passInput = (event) => {
    event.preventDefault()
    let date = this.state.date
    let filterType =  this.state.filterType
    this.props.getCustomerFormInput(date, filterType)
  }

  render() {
  return (
    <form className='formy'>
      <label className='room-label' >Check Room Availability</label>
      <p className='date-helper'>date format 'yyyy/mm/dd'</p>
      <input name='date' onChange={this.handleChange} className='input-name' type='text' placeholder='Search By Date'></input>
      <label className='filter-label'>Filter By Room-Type</label>
      <select name='filterType' onChange={this.handleChange} className='filter-input' type='text'>
        <option>none</option>
        <option>residential suite</option>
        <option>suite</option>
        <option>single room</option>
        <option>junior suite</option>
      </select>
      <button className='submit-user-form' onClick={this.passInput}>search</button>
    </form>
    )
  }
}
export default CustomerForm