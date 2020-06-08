import React from 'react'
import './CustomerForm.css'

class CustomerForm extends React.Component {
  constructor(props) {
    super(props) 
    this.state = {
      date: '',
      filterType: '',
      dateError: false,
      filterError: false,
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  checkForErrors = (event) => {
    event.preventDefault()
    
    this.setState({
      dateError: false,
      filterError: false,
    });

    if (this.state.date === '') {
      this.setState({ dateError: true });
    }

    if (this.state.userPurpose === "") {
      this.setState({ filterError: true });
    }

    if(this.state.date !== '' && this.state.userPurpose !== "") {
      this.passInput(event);
    }
    return 
  };


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
      {this.state.dateError && <p className="error-message">Please enter a date.</p>}
      <input name='date' onChange={this.handleChange} className='input-name' type='text' placeholder='Search By Date'></input>
      <label className='filter-label'>Filter By Room-Type</label>
      {this.state.filterError && <p className="error-message">Please enter a purpose.</p>}
      <select name='filterType' onChange={this.handleChange} className='filter-input' type='text' placeholder='none'>
        <option>none</option>
        <option>residential suite</option>
        <option>suite</option>
        <option>single room</option>
        <option>junior suite</option>
      </select>
      <button className='submit-user-form' onClick={(event) => this.checkForErrors(event)}>search</button>
    </form>
    )
  }
}
export default CustomerForm