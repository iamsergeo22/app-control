import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DashboardPage from '../components/UI/DashboardPage.vue'
import VisitorEnrol from '../components/pages/VisitorEnrol.vue'
import UsersEnrolboard from '../components/pages/UsersEnrolboard.vue'
import UserForm from '../components/pages/UserForm.vue'
import VisitForm from '../components/pages/VisitForm.vue'
const routes = [
  {
    path: '/Dashboard',
    name: 'DashBoardPage',
    component: DashboardPage
  },
  

  {
    path: '/visit',
    name: 'VisitorEnrol',
    component: VisitorEnrol
  },

  {
    path: '/user',
    name: 'UserEnrol',
    component: UsersEnrolboard
  },

  {
    path: '/add-user',
    name: 'User-add',
    component: UserForm
  },

  {
    path: '/add-visitor',
    name: 'Visit-add',
    component: VisitForm
  },


  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/UI/LoginView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
