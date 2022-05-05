<template>
<NavigationMenu></NavigationMenu>
  <div class="app">
    <router-view />
  </div>

<FooterBar></FooterBar>
</template>

<script>
import NavigationMenu from './components/Navigation/NavigationMenu.vue'
import FooterBar from './components/Partials/FooterBar.vue'


export default {
  components: {
    NavigationMenu,
    FooterBar
   
},

  name: "App",
}

</script>



<style lang="scss" scoped>

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Raleway", sans-serif;
  font-weight: 400;
}

.app {
  min-height: 100vh;
  position: relative;
  background-color: #f1f1f1;
}
.container {
  padding: 0 20px;
  max-width: 1140px;
  margin: 0 auto;
}
</style>
