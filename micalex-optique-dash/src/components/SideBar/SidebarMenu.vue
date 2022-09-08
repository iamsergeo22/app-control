<script>
  import SidebarLink from '../SideBar/SidebarLink.vue'
  import {
    collapsed,
    toggleSidebar,
    sidebarWidth
  } from '../state'

  export default {
    props: {},
    components: {
      SidebarLink
    },
    setup() {
      return {
        collapsed,
        toggleSidebar,
        sidebarWidth
      }
    }
  }
</script>

<template>
  <div class="sidebar" :style="{ width: sidebarWidth }">
    <h1>
      <span v-if="collapsed">
        <div>K</div>
        <div>E </div>
      </span>
      <span v-else>
        <!-- <img src="./bbg.jpg" alt="" width="150px" height="150px"> -->

      </span>



    </h1>

    <br>
    <br>


    <div class="side-bar">
      <SidebarLink to="/" icon="fas fa-home">Profile</SidebarLink>
      <SidebarLink to="/societe" icon="fas fa-chart-bar">Société</SidebarLink>
      <SidebarLink to="/article" icon="fa-solid fa-cart-shopping">Articles</SidebarLink>
    </div>


    <span class="collapse-icon" :class="{ 'rotate-180': collapsed }" @click="toggleSidebar">
      <i class="fas fa-angle-double-left" />
    </span>
  </div>

</template>

<style>



  .style-hr {
    text-align: center;
    color: #fff;
    border: 3px solid white;
    background-color: #fff;
    border-radius: 10px;
  }

  .profile {
    border: 5px solid #fff;
    border-radius: 50%;
  }

  :root {
    --sidebar-bg-color: #001D6E;
    --sidebar-item-hover: #006A4A;
    --sidebar-item-active: #006A4A;
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
    color: #fff;
    ;
  }

  .sidebar {
    color: white;
    background-color: var(--sidebar-bg-color);
    font-family: 'jost';
    float: left;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    bottom: 0;
    padding: 0.5rem;
    
    transition: 0.5s ease-in-out;

    display: flex;
    flex-direction: column;
  }

  span,
  div {
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