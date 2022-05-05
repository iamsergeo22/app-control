<template>
  <div class="home">
    
  </div>
<Pets :pets="pets" />
</template>

<script>
import Pets from "../components/pets.vue"


export default {
  name: 'HomeView',
  component: {
    Pets
  },
  data() {
    return {

      pets: [
        {
      id: 1,
      name: "Ruby",
      age: 2,
      img: "https://s01.sgp1.cdn.digitaloceanspaces.com/article/131928-mxiccwtarv-1575034997.jpg",
      isFavorite: true
        },

        {
      id: 1,
      name: "Coco",
      age: 4,
      img: "https://s01.sgp1.cdn.digitaloceanspaces.com/article/131928-mxiccwtarv-1575034997.jpg",
      isFavorite: false
        }
      ]
      
    }
  }
  
};
</script>
