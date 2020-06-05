import React from 'react';
import Login from '../Login/Login';
import './App.css';

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
      <div className="App">
        <Login getUser={this.getUser}/>
      </div>
   )
  }
}

export default App;
