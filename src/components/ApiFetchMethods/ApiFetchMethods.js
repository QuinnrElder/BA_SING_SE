
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

export const fetchUserBookings = async (user) => {
  const promise = await fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings')
  const usersApiData = await promise.json()
  return usersApiData.bookings.filter(booking => booking.userID === user.id)
}
