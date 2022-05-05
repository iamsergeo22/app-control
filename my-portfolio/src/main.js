import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// importing AOS css style globally
import 'aos/dist/aos.css'


import '@fortawesome/fontawesome-free/js/all'
createApp(App).use(router).mount('#app')
