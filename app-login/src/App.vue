<template>
  <div id="app">
    <navbar-view/>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
import NavbarView from "@/components/NavbarView";
import {mapGetters} from 'vuex'


export default {
  name: 'App',
  components: {
    NavbarView
    
  },
  computed: {
    ...mapGetters(['user'])
  }
}
</script>

<style>
.form-signin {
  width: 100%;
  max-width: 400px;
  padding: 15px;
  margin: 5rem auto 0;
}
</style>
