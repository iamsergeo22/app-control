<template>
     <div class="dropdown">
            <button class="dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
              SERVICES
            </button>
             <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><router-link class="dropdown-item" :to="{ name: 'Home' }">Colocation</router-link></li>
    <li><router-link class="dropdown-item" :to="{ name: '' }">Cloud Services</router-link></li>
    <li><a class="dropdown-item" href="#">Network Services</a></li>
    <li><a class="dropdown-item" href="#">Facilities</a></li>
    <li><a class="dropdown-item" href="#">Security</a></li>
    <li><a class="dropdown-item" href="#">Remote Hands</a></li>
    <li><a class="dropdown-item" href="#">Hardware</a></li>
    <li><a class="dropdown-item" href="#">Innovation</a></li>
    </ul>
       </div>
</template>

<script>
export default {
  name: 'dropdownButton',
  props: ['title', 'items'],
  data () {
    return {
      isOpen: false
    }
  }
}
</script>

<style lang="scss" scoped>
button {
  background-color: transparent;
  color: #fff;
  border: none;
}
 ul,
    .dropdown-item {
      font-weight: 500;
      color: #fff;
      list-style: none;
      text-decoration: none;
    }


.link,
    .dropdown-item {
      font-size: 14px;
      transition: .5s ease all;
      padding-bottom:px ;
      border-bottom: 1px solid transparent;
      &:hover {
        border-color: #ffce00;

       
      }
    }

    .dropdown-menu {
      background-color: #663399;
      
    }
</style>>

