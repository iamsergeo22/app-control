<template>
  <sidebar-menu>

  </sidebar-menu>
  <div :style="{ 'margin-left': sidebarWidth }">
    <router-view />
  </div>

  <footer-page></footer-page>
</template>

<script>
import SidebarMenu from "./components/SideBar/SidebarMenu.vue"
import FooterPage from "./components/UI/FooterPage.vue"
import { sidebarWidth } from '@/components/state'
export default {
  components: {
    SidebarMenu,
    FooterPage
  },
  setup() {
    return { sidebarWidth }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #1461AC;
}
</style>
