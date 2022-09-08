import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';



axios.defaults.baseURL = 'http://karaevents.mekengroup.com/'
axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token')


createApp(App).use(store).use(router).mount('#app')



import 'bootstrap/dist/js/bootstrap.js';
