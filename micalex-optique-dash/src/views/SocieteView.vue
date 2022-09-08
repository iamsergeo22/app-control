<template>
     <div class="body">
          <div class="header-search">
               <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Recherche" aria-label="Search">
                    <button class="btn btn-outline-success" type="submit">Recherche</button>
               </form>
          </div>


          <div class="main">
               <h1>Enregistrer Votre Société</h1>
               <p>On va ecrire quelque chose ici</p>
          </div>


          <form-page></form-page>



     </div>
</template>

<script>
     import FormPage from '@/components/UI/FormPage.vue'
     export default {
          components: {
               FormPage
          }

     }
</script>

<style scoped>
     h1 {
          color: #006A4A;
          font-size: 45px;
     }

     p {
          color: #006A4A;
          font-size: 20px;
     }

     .header-search {
          background-image: linear-gradient(to right, #ffcc00, #006a4a3d);
          padding: 5rem;
     }

     .body {
          font-family: 'jost';
     }

     .main {
          padding: 2rem;
     }
</style>