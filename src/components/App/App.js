import React from 'react';
import './App.css';

import { Route, Switch } from "react-router-dom";

import Login from '../Login/Login';
import UserPage from '../UserPage/UserPage';
import ManagerPage from '../ManagerPage/ManagerPage';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {
        userBookings: [],
      },
      allUsers: [],
    }
  }

  getUser = (user) => {
  if(user.name === 'manager') {
    this.setState({ user: user.name })
    this.setState({ allUsers: [...user.allUsers] })
  } else {
    this.setState({ user: {id: user.id, name: user.name, userBookings: []} })
    this.setState({ allUsers: [...user.allUsers] })
  }
  }

  render() {
console.log(this.state.user)
    return (
      <main className="App">
        <Switch >
        <Route
            path="/manager"
            exact
            render={() => {
              return (
              <div className='mainImage'>
                <ManagerPage user={this.state.user} allUsers={this.state.allUsers}/>
              </div>
              )
          }}
          />

          <Route
            path="/user/:user"
            exact
            render={() => {
              return (
                <div className='mainImage'>
                  <UserPage user={this.state.user} />
                </div>
              ) 
          }}
          />

          <Route
            path="/"
            exact
            render={() => {
              return <Login getUser={this.getUser}/>
            }}
          />
        </Switch>
      </main>
    )
 }
}

export default App;
