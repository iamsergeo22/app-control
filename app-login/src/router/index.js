import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../components/HomeView.vue'
import LoginView from '../components/LoginView.vue'
import RegisterView from '../components/RegisterView.vue'

const routes = [
  {
    path: '/register',
    name: 'Home',
    component: HomeView
},
{
    path: '/login',
    name: 'LoginView',
    component: LoginView
},
{
    path: '',
    name: 'RegisterView',
    component: RegisterView
}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
