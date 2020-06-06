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
      manager: '',
      user: {},
    }
  }

  getUser = (user) => {
  if(user === 'manager') {
    this.setState({ manager: user })
    this.setState({ user: {} })
  } else {
    this.setState({ user: user })
    this.setState({ manager: '' })
  }
  }

  render() {
    console.log(this.state.manager)
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
                {/* render the search by user form */}
                <ManagerPage />
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
