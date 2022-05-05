<template>
  <header :class="{'scrolled-nav': scrolledNav }">
    <nav>
      <div class="branding">
        <img src="./logo.png" alt="img">
      </div>
      <ul v-show="!mobile" class="navigation">
        <li>
          <router-link class="link" :to="{ name: 'Home' }">Home</router-link>
        </li>
        <li>
          <router-link class="link" :to="{ name: 'About' }">A Propos</router-link>
        </li>
        <li>
          <DropdownButton></DropdownButton>
        </li>

        <li>
          <router-link class="link" :to="{ name: 'marketplace' }">MarketPlace</router-link>
        </li>
        <li>
          <router-link class="link" :to="{ name: 'contact' }">Contact</router-link>
        </li>
        <li>
          <BaseButton @click.prevent="login">Se Connecter</BaseButton>
        </li>

      </ul>

      <div class="icon">
        <i @click="toggleMobileNav" v-show="mobile" class="fas fa-bars" :class="{'icon-active' : mobileNav }"></i>
      </div>

      <transition name="mobile-nav">
        <ul v-show="mobileNav" class="dropdown-nav">
          <li>
            <router-link class="link" :to="{ name: 'Home' }">Home</router-link>
          </li>
          <li>
            <router-link class="link" :to="{ name: 'About' }">A Propos</router-link>
          </li>
          <li>
            <div class="dropdown">
          <li class="dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown"
            aria-expanded="false">
            Services
          </li>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
          </div>
          </li>
          <li>
            <router-link class="link" :to="{ name: '' }">Marketplace</router-link>
          </li>
          <li>
            <router-link class="link" :to="{ name: '' }">Contact</router-link>
          </li>
        </ul>
      </transition>
    </nav>
  </header>
</template>

<script>
  import BaseButton from "../UI/BaseButton.vue";
  import DropdownButton from './DropdownButton.vue'

  export default {
    name: "NavigationMenu",
    components: {
      BaseButton,
      DropdownButton
    },
    data() {
      return {
        scrolledNav: null,
        mobile: null,
        mobileNav: null,
        windowWidth: null,

        services: [{
            title: 'Web',
            link: '#'
          },
          {
            title: 'Design',
            link: '#'
          },
          {
            title: 'Videos',
            link: '#'
          }
        ]
      }
    },

    created() {
      window.addEventListener('resize', this.checkScreen);
      this.checkScreen();
    },

    mounted() {
      window.addEventListener('scroll', this.updateScroll);
    },

    methods: {
      toggleMobileNav() {
        this.mobileNav = !this.mobileNav;
      },

      updateScroll() {
        const scrollPosition = window.scrollY;
        if (scrollPosition > 50) {
          this.scrolledNav = true;
          return;
        }
        this.scrolledNav = false;

      },

      checkScreen() {
        this.windowWidth = window.innerWidth;
        if (this.windowWidth <= 750) {
          this.mobile = true;
          return;
        }
        this.mobile = false;
        this.mobileNav = false;
      },


      login() {
      this.$router.push('/login')
    }
    },
  };
</script>

<style lang='scss' scoped>
  header {
    background-color: #663399;
    z-index: 99;
    width: 100%;
    position: fixed;
    transition: 0.5s ease all;
    color: #fff;

    nav {
      position: relative;
      display: flex;
      flex-direction: row;
      padding: 12px 0;
      transition: 0.5s ease all;
      width: 90%;
      margin: 0 auto;
      font-family: 'Jost';

      @media (min-width: 1140px) {
        max-width: 1140px;
      }

      ul,
      .link,
      .dropdown-item {
        font-weight: 500;
        color: #fff;
        list-style: none;
        text-decoration: none;
      }

      li {
        text-transform: uppercase;
        padding: 10px;
        margin-left: 25px;

      }

      .link,
      .dropdown-item {
        font-size: 14px;
        transition: .5s ease all;
        padding-bottom: px;
        border-bottom: 1px solid transparent;

        &:hover {
          color: #fff;
          border-color: #EBD671;


        }
      }

      .dropdown-menu {
        background-color: #711A75;
      }

      .branding {
        display: flex;
        align-items: center;

        img {
          width: 100px;
          transition: .5s ease all;
        }
      }

      .navigation {
        display: flex;
        align-items: center;
        flex: 1;
        justify-content: flex-end;

      }

      .icon {
        display: flex;
        align-items: center;
        position: absolute;
        top: 0;
        right: 24px;
        height: 100%;
      }

      i {
        cursor: pointer;
        font-size: 24px;
        transition: 0.8s ease all;

      }

      .icon-active {
        transform: rotate(180deg);
      }

      .dropdown-nav {
        display: flex;
        flex-direction: column;
        position: fixed;
        width: 100%;
        max-width: 250px;
        height: 100%;
        background-color: #fff;
        top: 0;
        left: 0;

        li {
          margin-left: 0;

          .link {
            color: #663399;
          }
        }

      }

      .mobile-nav-enter-active,
      .mobile-nav-enter-active {
        transition: 1s ease all;
      }

      .mobile-nav-enter-from,
      .mobile-nav-leave-to {
        transform: translateX(-250px);
      }

      .mobile-nav-enter-to {
        transform: translateX(0);
      }

    }
  }

  .scrolled-nav {
    background-color: #663399;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);

    nav {
      padding: 8px 0;

      .branding {
        img {
          width: 100px;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);

        }
      }
    }
  }
</style>