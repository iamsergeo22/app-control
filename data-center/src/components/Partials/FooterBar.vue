<template>
     <div class="footer">
          

          <section class="footer02">
               <div class="container3">
                    <img src="./Cassava.svg" alt="" width="200px">
               </div>

               <div class="icons">
                    <a href=""><i class="fab fa-facebook-square fa-4x"></i></a>
                    <a href=""><i class="fab fa-twitter-square fa-4x"></i></a>
                    <a href=""><i class="fab fa-linkedin fa-4x"></i></a>
                    <a href=""><i class="fab fa-youtube-square fa-4x"></i></a>
               </div>

               <div class="para">
                    <p>
                         Equipe d'Expertis <br>
                         Salle de Presse <br>
                         Nous Contactez <br>

                    </p>
               </div>
          </section>
     </div>
</template>

<script>
     export default {

     }
</script>

<style lang="scss" scoped>
     p {
          font-size: 25px;
          font-family: 'Jost';
     }

     a {
          justify-content: space-between;
          padding: 0.5rem;

     }

     a:hover,
     a:active {
          color: #40DFEF;
           
          }

     
     .icons {
          display: flex;
          justify-content: space-between;
          color: #fff;
          font-size: medium;
     }

     .container1 {
          text-align: left;
     }

     .container2 {
          text-align: left;
     }

     .container3 {
        padding: 1rem;
     }


    

     .footer02 {
          background-color: #663399;
          width: 100%;
          padding: 2rem;
          color: #fff;
          display: flex;
          justify-content: space-between;
          font-family: 'Jost';


          a {
               color: #fff;
               font-size: medium;

               i {
                    justify-content: space-between;
               }
          }
     }
</style>