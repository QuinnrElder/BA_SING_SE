import React from 'react'
import './ManagerForm.css'

class ManagerForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: ''
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  passFormInput = (event) => {
    event.preventDefault()
    let userName = this.state.userName
    this.props.getManagerFormInput(userName)
  }

  render() {
    return (
      <div className='form-container'>
        <p className='room-labels'>Search by Customers Full Name</p>
        <form className='form'>
        <input 
        name='userName' 
        onChange={this.handleChange} 
        className='input-name' type='text' 
        placeholder='Search By Full Name'
        ></input>
        <button 
        className='submit-managers-forms'
        onClick={this.passFormInput}>search</button>
      </form>
      </div> 
    )
  }
}
export default ManagerForm