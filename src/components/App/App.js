import React from 'react';
import './App.css';

import { Route, Switch } from "react-router-dom";
import { fetchBookings, fetchRooms, fetchUsers } from '../ApiFetchMethods/ApiFetchMethods'

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
      totalBooking: 1008,
    }
  }

  componentDidMount = async () => {
    const allBookings = await fetchBookings()
    this.setState({ allBookings: [...this.state.allBookings, ...allBookings] })
    console.log(allBookings.length)
    const allRooms = await fetchRooms()
    this.setState({ allRooms: [...this.state.allRooms, ...allRooms] })

    const users = await fetchUsers()

    let newArrayOfUsers = users.map(user => {
      const userBookings = allBookings.filter(booking => booking.userID === user.id)
      const roomsStayedIn = this.findRoomStayedIn(userBookings, allRooms)
      let newUser = {
        id: user.id, 
        name: user.name, 
        userBookings: userBookings,
        roomsStayedIn: roomsStayedIn,
      }
      return newUser
  })
   this.setState({ allUsers: newArrayOfUsers })
  }

  getUser = (user) => {
  if(user.name === 'manager') {
    this.setState({ user: { name:'manager', id: user.id, userBookings: [], roomsStayedIn: [] } })
  } else {    
    this.setState({ user: {...user}})
  }
  }

  findRoomStayedIn = (userBookings, allRooms) => {
    let myRooms = allRooms.reduce((acc, room) => {
      userBookings.forEach(booking => {
        if (booking.roomNumber === room.number) {
          acc.push(room)
        }
      })
      return acc
    }, [])
    return myRooms
  }

  updateTotalBookingCount = () => {
    this.setState({totalBooking: (this.state.totalBooking + 1)})
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
                  allUsers={this.state.allUsers}
                  updateTotalBookingCount={this.updateTotalBookingCount}
                   />
                </div>
              ) 
          }}
          />

          <Route
            path="/"
            exact
            render={() => {
              return <Login getUser={this.getUser} allUsers={this.state.allUsers}/>
            }}
          />
        </Switch>
      </main>
    )
 }
}

export default App;
