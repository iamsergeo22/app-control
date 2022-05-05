import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios'


// Global Configuration
axios.defaults.baseURL = 'https://my-portfolio-b3319-default-rtdb.firebaseio.com'
axios.defaults.headers.common['Authorization'] = 'fasfdsa'
axios.defaults.headers.get['accepts'] = 'application/json'
axios.interceptors.request.use(config => {
     console.log('Resquest Interceptor', config)
     return config
})

axios.interceptors.response.use(
     res => {
          console.log('Resquest Interceptor', res)
          return res
     }
)

createApp(App).use(store).use(router).mount('#app')
