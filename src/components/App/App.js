import React from 'react';
import './App.css';

import { Route, Switch } from "react-router-dom";
import { fetchBookings, fetchRooms, } from '../ApiFetchMethods/ApiFetchMethods'

import Login from '../Login/Login';
import UserPage from '../UserPage/UserPage';
import ManagerPage from '../ManagerPage/ManagerPage';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {
        userBookings: [],
        roomsStayedIn: [],
      },
      allUsers: [],
      allBookings: [],
      allRooms: [],
      date: new Date().toLocaleDateString(),
    }
  }

  componentDidMount = async () => {
    const allBookings = await fetchBookings()
    this.setState({ allBookings: [...this.state.allBookings, ...allBookings] })
    
    const allRooms = await fetchRooms()
    this.setState({ allRooms: [...this.state.allRooms, ...allRooms] })

  }

  getUser = (user) => {
  if(user.name === 'manager') {
    this.setState({ user: { name:'manager', id: user.id, userBookings: [], roomsStayedIn: [] } })
    this.setState({ allUsers: [...user.allUsers] })
  } else {
    const userBookings = this.state.allBookings.filter(booking => booking.userID === user.id)
    const roomsStayedIn = this.findRoomStayedIn(userBookings)
    this.setState({ user: {
      id: user.id, 
      name: user.name, 
      userBookings: userBookings, 
      roomsStayedIn: roomsStayedIn
      } 
    })
    this.setState({ allUsers: [...user.allUsers] })
  }
  }

  findRoomStayedIn = (userBookings) => {
    let myRooms = this.state.allRooms.reduce((acc, room) => {
      userBookings.forEach(booking => {
        if (booking.roomNumber === room.number) {
          acc.push(room)
        }
      })
      return acc
    }, [])
    return myRooms
  }

  render() {
    return (
      <main className="App">
        <Switch >
        <Route
            path="/manager"
            exact
            render={() => {
              return (
              <div className='mainImage'>
                <ManagerPage
                user={this.state.user}
                allUsers={this.state.allUsers} 
                allRooms={this.state.allRooms} 
                allBookings={this.state.allBookings}
                date={this.state.date} 
                />
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
                  <UserPage 
                  user={this.state.user}
                  date={this.state.date}
                  allRooms={this.state.allRooms}
                  allBookings={this.state.allBookings}
                   />
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
