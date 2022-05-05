<template>
  <nav>

    <div class="menu-item"><router-link to="/">Home</router-link></div>
    <div class="menu-item"><router-link to="">About</router-link></div>
    <div class="menu-item"><router-link to="">BaberShop</router-link></div>
    <div class="menu-item"><router-link to="">Services</router-link></div>
    <div class="menu-item"><router-link to="">Contact</router-link></div>
  </nav>
</template>

<script>


export default {
  name: 'navbarMenu',
  components: {
    
  },
  data () {
    return {
      
    }
  }
}
</script>

<style>
nav {
  display: flex;
  align-items: center;
  justify-content: center;
}

nav .menu-item {
  color: #FFF;
  padding: 10px 20px;
  position: relative;
  text-align: center;
  border-bottom: 3px solid transparent;
  display: flex;
  transition: 0.4s;
}

nav .menu-item.active,
nav .menu-item:hover {
  background-color: #444;
  border-bottom-color: #FF5858;
}

nav .menu-item a {
  color: inherit;
  text-decoration: none;
}
</style>