import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router";
import axios from "axios";
import store from "@/store";


axios.defaults.baseURL = 'http://127.0.0.1:8000/'
axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token')


createApp(App).config.productionTip = false

createApp(App).use(router).use(store).mount('#app')