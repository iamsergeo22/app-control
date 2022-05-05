<template>
  <div class="home">
    <HomeSection1 />
  </div>
   
</template>

<script>
// @ is an alias to /src
import HomeSection1 from '@/components/UI/HomeSection1.vue'


export default {
  name: 'HomeView',
  components: {
    HomeSection1,
    
  }
}
</script>
