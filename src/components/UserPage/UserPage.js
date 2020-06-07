import React from 'react'
import './UserPage.css'
// import PropTypes from 'prop-types'
import DisplayInfo from '../DisplayInfo/DisplayInfo'
import CustomerForm from '../CustomerForm/CustomerForm'

class UserPage extends React.Component {
  constructor(props)  {
    super(props)
    this.state = {
      user: props.user
    }
  }

  render() {
    return (
      <div className='user-page' >
        <h3 className='user-page-header'>{ `Welcome ${this.state.user.name}` }</h3>
        <div className='main-form-and-res-container'>
        <CustomerForm />
        </div>
        <DisplayInfo  user={this.state.user} />
      </div>
    )
  }
}

export default UserPage