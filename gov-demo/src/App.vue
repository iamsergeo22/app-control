<template>

<div class="home">
  <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="./web.jpg" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="./image.jpg" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="./web.jpg" class="d-block w-100" alt="...">
    </div>
  </div>
</div>
</div>
  <div class="divider">
   <div>
      <h1><strong><b>Republique</b></strong></h1>
      <hr class="style-two">
   </div>

   <div class="link">
     <ul>
        <li><strong><b>Presidence</b></strong></li>
       <li><strong><b>Gouvernement</b></strong></li>
       <li><strong><b>Institutions</b></strong></li>
     </ul>

   </div>

     <div class="links">
     <ul>
       <li><strong><b>Presidence</b></strong></li>
       <li><strong><b>Gouvernement</b></strong></li>
     </ul>

   </div>



  </div>
</template>

<script>
  // @ is an alias to /src



  export default {
    name: 'HomeView',
    components: {
    
    }
  }
</script>
<style scoped>
  #app {
    font-family: 'Josefin Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  .home {
    opacity: 0.9;
    z-index: 0.7;
  }

  .divider {
  margin: 2rem auto;
  margin-top: -1rem;
  max-width: 80rem;
  position: relative;
  top: -255px;
  text-align: left;
  padding: 5rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  background-color: #1572A1;
  color: white;
  display: flex;
  justify-content: space-between;

  }

  hr.style-two {
    border: 5px solid white;
    border-radius: 10px;
    background-color: white;
    width: 15%;
  
}

ul {
  list-style: none;
  font-size: larger;

}

 li {
        text-transform: uppercase;
        padding: 10px;
        margin-left: 25px;
        font-family: 'Josefin Sans', sans-serif;

      }

</style>