import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// importing AOS css style globally
import 'aos/dist/aos.css'
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios'


axios.defaults.baseURL = 'http://karaevents.mekengroup.com/'
axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token')

import '@fortawesome/fontawesome-free/js/all'
createApp(App).use(router).mount('#app')


import 'bootstrap/dist/js/bootstrap.js';