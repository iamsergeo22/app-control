<script>
import SidebarLink from '../SideBar/SidebarLink.vue'
import { collapsed, toggleSidebar, sidebarWidth } from '../state'

export default {
  props: {},
  components: { SidebarLink },
  setup() {
    return { collapsed, toggleSidebar, sidebarWidth }
  }
}
</script>

<template>
  <div class="sidebar" :style="{ width: sidebarWidth }">
    <h1>
      <span v-if="collapsed">
        <div>V</div>
        <div>S</div>
      </span>
      <span v-else>
           <!-- <img src="./bbg.jpg" alt="" width="150px" height="150px"> -->
     

       <img class="profile" src="./serge.jpeg" alt="" width="100px" height="75px"> <br>
      Serge A. Tassiga
     <div>
    <a href="#"><i class="fab fa-twitter-square"></i></a>
    <a href=""><i class="fab fa-facebook"></i></a>
    <a href=""><i class="fab fa-instagram"></i></a>
    <a href=""><i class="fab fa-skype"></i></a>
    <a href=""><i class="fab fa-github"></i></a>
    <a href=""><i class="fab fa-linkedin"></i></a>
    </div>
  
     </span>

    
     
    </h1>

    <br>
    <br>
   

    <SidebarLink to="/" icon="fas fa-home">Home</SidebarLink>
    <SidebarLink to="/portfolio" icon="fas fa-chart-bar">Portfolio</SidebarLink>
    <SidebarLink to="/contact" icon="fas fa-users">Contact me</SidebarLink>
    
     
    <span
      class="collapse-icon"
      :class="{ 'rotate-180': collapsed }"
      @click="toggleSidebar"
    >
      <i class="fas fa-angle-double-left" />
    </span>
  </div>

</template>

<style>


.profile {
  border: 5px solid #000000;
  border-radius: 70%;
}


:root {
  --sidebar-bg-color: #0F044C;
  --sidebar-item-hover: #FFCE00;
  --sidebar-item-active: #FFCE00;

}
</style>

<style scoped>
a {
  text-decoration: none;
  color: #fff;
  padding: 0.2rem;
}

a:hover,
a:active {
  color:#fff;;
}
.sidebar {
  color: white;
  background-color: var(--sidebar-bg-color);

  float: left;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  bottom: 0;
  padding: 0.5em;

  transition: 0.3s ease;

  display: flex;
  flex-direction: column;
}
span, div {
     font-size: 20px;
}

.sidebar h1 {
  height: 2.5em;
}

.collapse-icon {
  position: absolute;
  bottom: 0;
  padding: 0.75em;

  color: rgba(255, 255, 255, 0.7);

  transition: 0.2s linear;
}

.rotate-180 {
  transform: rotate(180deg);
  transition: 0.2s linear;
}
</style>s