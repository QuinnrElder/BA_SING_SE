import React from 'react'
import "./Login.css";
import { Redirect } from 'react-router-dom'
import { fetchUsers } from '../ApiFetchMethods/ApiFetchMethods'

// import PropTypes from 'prop-types'


class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      allUsers: [],
      userName: '',
      password: '',
      userNameError: false,
      userPasswordError: false,
      completedForm: false,
    }
  }

  componentDidMount = async () => {
    const users = await fetchUsers()
    this.setState({ allUsers: users})
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  //some method that checks to see if you've filled everything out
  checkForErrors = (event) => {
    event.preventDefault();

    this.setState({
      userNameError: false,
      userPasswordError: false,
    });

    if (!this.state.userName) {
      this.setState({ userNameError: true });
    }

    if (!this.state.password) {
      this.setState({ userPasswordError: true });
    }

    this.updateUser();
  }

  updateUser = () => {
    if (
      this.state.userName !== "" &&
      this.state.password !== ""
    ) {
      this.setState({ completedForm: true });
      
      if (this.state.userName === "manager" && this.state.password === "overlook2020") {
        // pass up the string of manager to app as prop
        this.props.getUser('manager')
        return <Redirect to='/manager' />;
      } else {
        let currentUser = this.checkUserNameAndPassword()
        // pass up the object of user to app as prop
        this.props.getUser(currentUser)
        return <Redirect to={`/${currentUser.name}`} />;
      }
    }
  }

  checkUserNameAndPassword = () => {
    let passwordId = this.checkPasswordLetters()
    console.log('password id', passwordId)
    return this.checkPassword(passwordId)
  }

  checkPasswordLetters = () => {
    if (this.state.userName.includes('customer') && this.state.password.includes('overlook2020')) {
       let passwordId = this.checkPasswordNumbers()
       return passwordId
      } else {
        alert('Please use the correct PASSWORD')
      }
  }

  checkPasswordNumbers = () => {
    let id1;
    let username = this.state.userName
    username = username.split('')
    let two = username[username.length - 2]
    let indexMinusTwo = parseInt(two)
    let one = username[username.length - 1]
    let indexMinusOne = parseInt(one)
    if (typeof indexMinusTwo === "number") {
      id1 = username[username.length - 2] + username[username.length - 1]
      id1 = parseInt(id1)
      return id1
    } else if (typeof indexMinusOne === 'number') {
      id1 = (username[username.length - 1])
      id1 = parseInt(id1)
      return id1
    } else {
      return
    }
  }

  checkPassword = (passwordId) => {
    let correctUser = this.state.allUsers.find(user => user.id === passwordId)
    return correctUser
  }

  render() {
    return (
      <form className="login-form">

            <label htmlFor="userName">userName</label>
            <input
              type="text"
              name="userName"
              id="userName"
              placeholder="name"
              value={this.state.userName}
              onChange={this.handleChange}
            />
            {this.state.userNameError && (
              <p className="error-message">Please check your username.</p>
            )}

            <label htmlFor="userEmail">password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
            {this.state.userPasswordError && (
              <p className="error-message">Please check your password.</p>
            )}

            <button
              className="login-button"
              type="submit"
              onClick={(event) => this.checkForErrors(event)}
            >Login</button>
          </form>
    )
  }
}

export default Login