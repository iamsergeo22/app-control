<template>
  <div>
       <h5>{{ copyright }} <a href="https://mekengroup.com/"></a>MEG</h5>
  </div>
</template>

<script>
export default {
     data() {
          return {
               copyright: 'Copyright © 2022. All rights reserved by',
          }
     },

}
</script>

<style scoped>

h5 {
     text-align: center;
     font-size: 20px;
     padding: 2rem;
}
</style>