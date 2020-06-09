import React from 'react'
import './ManagerForm.css'

class ManagerForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: '',
      nameError: false,
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  passFormInput = (event) => {
    event.preventDefault()
    if(this.state.userName !== '') {
      let userName = this.state.userName
      this.props.getManagerFormInput(userName)
    }
    this.setState({ nameError: true });
  }

  render() {
    return (
      <div className='form-container'>
        <p className='room-labels'>Search by Customers Full Name</p>
        <form className='form'>
        {this.state.nameError && <p className="error-message">Please enter a name.</p>}
        <input 
        name='userName' 
        onChange={this.handleChange} 
        className='input-name' type='text' 
        placeholder='Search By Full Name'
        aria-label="username-label"
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