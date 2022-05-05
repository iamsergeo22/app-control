import axios from 'axios'
// custom instance
const instance = axios.create({
  baseURL: 'https://vue-update.firebaseio.com'
})

instance.defaults.headers.common['SOMETHING'] = 'something'

export default instance