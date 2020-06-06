
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