<template>
     <div class="home">
          <div class="header-search">
               <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Recherche" aria-label="Search">
                    <button class="btn btn-outline-success" type="submit">Recherche</button>
               </form>
          </div>

          <div class="body">
               <h1>Mek's Engineering Group(MEG)</h1>
               <p>Ingenierie informatique - community management - Vente de matériels Informatique</p>
          </div>

          <div class="row"  data-aos="flip-left" data-aos-duration="3000">
               <div class="col-lg-4" >
                    <img src="../components/images/pexels-rodrigo-santos-3888151.jpg" alt="" width="300px">
               </div>
               <div class="col-lg-4">
                    <img src="../components/images/pexels-rodnae-productions-8782710.jpg " alt="" width="300px">
               </div>
               <div class="col-lg-4">
                    <img src="../components/images/pexels-tyler-lastovich-699122.jpg" alt="" width="300px">
               </div>
          </div>

          <base-card>

               <h2>Mek's Engineering Group (MEG)</h2>
               <h2>Agbalépédogan</h2>
               <h2>+ 228 90 91 52 01</h2>
               <h2>Ingénieure informatique</h2>

               <p class="para">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis, dolores dolore suscipit
                    voluptatum accusamus officiis tenetur quibusdam esse cum ea quae. Nihil facilis doloribus cumque
                    accusantium libero. Sunt, iure doloremque.
               </p>

               <div class="row">
                    <div class="col-lg-4">
                         <h2>Mes Agences</h2>
                    </div>

                    <div class="col-lg-4">
                         <div class="card" style="width: 18rem;">
                              <img src="../components/images/pexels-negative-space-48605.jpg" class="card-img-top"
                                   alt="...">
                              <div class="card-body">
                                   <h3>Agence de Kpendjal</h3>
                                   <p class="p">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis, maxime!
                                        Eligendi
                                        quaerat ea
                                        officiis expedita magnam quia sint! Doloremque vel molestiae corporis beatae
                                        nulla tenetur
                                        maxime rem nisi error eum?</p>
                                   <p class="p">Numero: +228 90 90 90 90</p>
                              </div>
                         </div>
                    </div>

                    <div class="col-lg-4">
                         <div class="card" style="width: 18rem;">
                              <img src="../components/images/pexels-karolina-grabowska-4476635.jpg" class="card-img-top"
                                   alt="...">
                              <div class="card-body">
                                   <h3>Agence de Kara</h3>
                                   <p class="p">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis, maxime!
                                        Eligendi
                                        quaerat ea
                                        officiis expedita magnam quia sint! Doloremque vel molestiae corporis beatae
                                        nulla tenetur
                                        maxime rem nisi error eum?</p>
                                   <p class="p">Numero: +228 90 90 90 90</p>
                              </div>
                         </div>

                    </div>


               </div>

               <div class="arrow">
                    <div class="" style="text-align: left">
                         <a type="button" class="btn btn-outline-danger" href="/postarticle">Ajouter une article</a>
                    </div>

                    <div class="" style="text-align: right">
                         <button type="button" class="btn btn-danger">Quitter</button>
                    </div>

               </div>


          </base-card>
          <img src="../components/images/pexels-negative-space-48605.jpg" alt="" width="1000px" height="1000px">

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
     .arrow {
          padding: 4rem;
          display: flex;
          justify-content: space-between;
     }

     h2,
     .para {
          text-align: left;
          font-size: 20px;
          border: 2px solid #ffcc00;
          padding: 2rem;
     }

     .p {
          text-align: justify;
          font-size: 11px;
     }

     h3 {
          text-align: left;
     }

     .home {
          font-family: 'jost';
     }

     img {
          border-radius: 10px;
     }

    
     .col-lg-4:hover {
          transform: translateY(25px);
          transition: 0.5s ease-in-out all;
     }


     h1 {
          color: green;
          font-size: 45px;
     }

     p {
          color: green;
          font-size: 15px;
     }

     tr {
          border: 1px #ffcc00;
     }

     .header-search {
          background-image: linear-gradient(to right, #ffcc00, #006a4a3d);
          padding: 5rem;
     }

     .body {
          padding: 2rem;
     }
</style>