import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import ContactView from '../views/ContactView.vue';
import MarketPlaceView from '../views/MarketPlaceView.vue'
import LoginAuth from "@/components/Login-Auth/LoginAuth.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },

  {
    path: "/about",
    name: "About",
    component: AboutView,
  },

  
  {
    path: "/contact",
    name: "contact",
    component: ContactView,
  },

  {
    path: "/marketplace",
    name: "marketplace",
    component: MarketPlaceView,
  },

  {
    path: "/login",
    name: "login",
    component: LoginAuth,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
