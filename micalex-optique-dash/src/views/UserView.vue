<template>
     <div class="home">
          <div class="header-search">
               <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Recherche" aria-label="Search">
                    <button class="btn btn-outline-success" type="submit">Recherche</button>
               </form>
          </div>

          <div class="body">
               <h1>Profil Utilisateur</h1>
               <p>Vos informations de compte Utilisateur</p>
          </div>

          <base-card>

               <table class="table">
                    <thead>
                         <tr>
                              <th scope="col">#</th>
                              <th scope="col">First</th>
                              <th scope="col">Last</th>
                              <th scope="col">Handle</th>
                         </tr>
                    </thead>
                    <tbody>
                         <tr>
                              <th scope="row">1</th>
                              <td>Mark</td>
                              <td>Otto</td>
                              <td>@mdo</td>
                         </tr>
                         <tr>
                              <th scope="row">2</th>
                              <td>Jacob</td>
                              <td>Thornton</td>
                              <td>@fat</td>
                         </tr>
                         <tr>
                              <th scope="row">3</th>
                              <td colspan="2">Larry the Bird</td>
                              <td>@twitter</td>
                         </tr>
                    </tbody>
               </table>

          </base-card>

     </div>
</template>

<script>
     import BaseCard from '@/components/UI/BaseCard.vue'
     export default {
          components: {
               BaseCard
          }
     }
</script>

<style scoped>

     .home {
          font-family: 'jost';
     }

     h1 {
          color: #006A4A;
          font-size: 45px;
     }

     p {
          color: #006A4A;
          font-size: 15px;
     }

    

     .header-search {
          background-image: linear-gradient(to right, #001d6e7c, rgba(255, 255, 255, 0.76));
          padding: 5rem;
     }

     .body {
          padding: 2rem;
     }
</style>