<template>

<header>
  <Navbar />
</header>
  <home-section-1></home-section-1>
  <home-section-2></home-section-2>
 
 
  <router-view/>
</template>

<script>

import HomeSection1 from './components/Home/HomeSection1.vue';
import HomeSection2 from './components/Home/HomeSection2.vue';
import Navbar from './components/NavBar/Navbar.vue';


export default {
  components: {
    HomeSection1,
    HomeSection2,
    Navbar,
    
    
    
  }

}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: 'montserrat', sans-serif;
}
header {
  width: 100vw;
  background-color: black;
  padding: 15px;
}
</style>
