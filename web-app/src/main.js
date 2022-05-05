import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import header_partials from './components/partials/header_partials.vue'
import footer_partials from './components/partials/footer_partials.vue'
import AboutSection1 from './components/About/AboutSection1.vue'



createApp(App).use(router).mount('#app')

const app = createApp(App);
app.component('headerPartial', header_partials);
app.component('footerPartial', footer_partials);
app.component('AboutSection1', AboutSection1);

