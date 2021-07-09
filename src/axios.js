import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://todo-app-8d2ae-default-rtdb.firebaseio.com/'
})

export default instance