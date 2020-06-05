
export const fetchUsers = async () => {
const promise = await fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/users/users')
const usersApiData = await promise.json()

return usersApiData.users
}