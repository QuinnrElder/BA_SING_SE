
export const fetchUsers = async () => {
const promise = await fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/users/users')
const usersApiData = await promise.json()
return usersApiData.users
}

export const fetchBookings = async (user) => {
  const promise = await fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings')
  const usersApiData = await promise.json()
  return usersApiData.bookings
}

export const fetchRooms = async () => {
  const promise = await fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/rooms/rooms')
  const usersApiData = await promise.json()
  return usersApiData.rooms
}

export const postBooking = (room, date, id) => {
  let roomNumbers = parseInt(room)
  fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      userID: id,
      date: date,
      roomNumber: roomNumbers
    })
  })
    .then(response => response.json())
    .then(data => console.log('success', data))
    .catch(err => console.error(err))
}
