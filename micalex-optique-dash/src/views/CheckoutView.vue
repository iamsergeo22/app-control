<template>
     <div class="home">
          <div class="header-search">
               <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Recherche" aria-label="Search">
                    <button class="btn btn-outline-success" type="submit">Recherche</button>
               </form>
          </div>

          <div class="body">
               <h1>Le Plan de Paiement</h1>
              
          </div>
          <base-card>

          <form action="">
               <div class="input-group input-group-lg">
                    <span class="input-group-text" id="inputGroup-sizing-lg">Nom du payeur</span>
                    <input type="text" class="form-control" aria-label="Sizing example input"
                         aria-describedby="inputGroup-sizing-lg">
               </div>
               <div class="input-group input-group-lg">
                    <span class="input-group-text" id="inputGroup-sizing-lg">Prenom du Payeur</span>
                    <input type="text" class="form-control" aria-label="Sizing example input"
                         aria-describedby="inputGroup-sizing-lg">
               </div>
               <div class="input-group input-group-lg">
                    <span class="input-group-text" id="inputGroup-sizing-lg">Numero de Telephone</span>
                    <input type="number" class="form-control" aria-label="Sizing example input"
                         aria-describedby="inputGroup-sizing-lg">
               </div>
               <div class="input-group input-group-lg">
                    <span class="input-group-text" id="inputGroup-sizing-lg">Description</span>
                    <textarea class="form-control" aria-label="With textarea" rows="5"></textarea>
               </div>
                <div class="input-group input-group-lg">
                    <span class="input-group-text" id="inputGroup-sizing-lg">Montant</span>
                    <input type="number" class="form-control" aria-label="Sizing example input"
                         aria-describedby="inputGroup-sizing-lg">
               </div>
                <div class="input-group input-group-lg">
                    <span class="input-group-text" id="inputGroup-sizing-lg">Date du Paiement</span>
                    <input type="date" class="form-control" aria-label="Sizing example input"
                         aria-describedby="inputGroup-sizing-lg">
               </div>

                <div class="input-group input-group-lg">
                    <span class="input-group-text" id="inputGroup-sizing-lg">Type de Paiement</span>
                    <select class="form-select" id="inputGroupSelect01">
                         <option selected>Choose...</option>
                         <option value="1">Cinetpay</option>
                         <option value="2">Carte Visa</option>
                         <option value="3">Paypal</option>
                    </select>
               </div>

               <div style="text-align: right">
                    <button type="button" class="btn btn-danger" to="/portal">Payer</button>
               </div>
          </form>


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

     span {
          font-weight: bold;
          font-size: 25px;
          color: #006A4A;
     }
      form,
     .input-group {
          padding: 1rem;
     }

     .container {
          margin: 2rem auto;
          max-width: 75rem;
          text-align: center;
          padding: 1rem;
          border-radius: 12px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
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
          color: #006A4A;
          font-size: 45px;
     }

     p {
          color: #006A4A;
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