<template>
  <div data-aos="zoom-out" data-aos-duration="3000">
    <slot></slot>
  </div>

</template>

<script>
import AOS from 'aos'

export default {
     setup() {
     AOS.init();
  
  },
}

</script>

<style scoped>
div {
  margin: 2rem auto;
  max-width: 75rem;
  text-align: center;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}
</style>