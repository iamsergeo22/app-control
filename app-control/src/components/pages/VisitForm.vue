<template>
     <div class="menu">
          <nav class="navbar navbar-expand-lg navbar-light">
               <div class="container-fluid">
                    <a class="navbar-brand" href="#">
                         <img src="../../images/meg1.png" alt="">
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                         data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown"
                         aria-expanded="false" aria-label="Toggle navigation">
                         <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
                         <ul class="navbar-nav">


                              <li><a class="dropdown-item" href="/Dashboard">Dashboard</a></li>
                              <li><a class="dropdown-item" href="/user">Users</a></li>
                              <li><a class="dropdown-item" href="/visit">Visiteur</a></li>


                         </ul>
                    </div>
               </div>
          </nav>
     </div>


     <div class="title">
          <h1>Adding Visitor</h1>
     </div>

     <div class="back">
          <button type="button" class="btn btn-info">
               <router-link class="link" to="/visit">Back to Visit Dashboard</router-link>
          </button>
          <br>
     </div>
     <div class="form">
          <form  @submit="submitData">
               <div class="row">
                    <div class="col-md-6 form-group mb-5">
                         <label for="" class="col-form-label">Object*</label>
                         <input type="text" class="form-control" name="nom" id="name" placeholder="Object" required
                              v-model="v_object">
                    </div>
                    <div class="col-md-6 form-group mb-5">
                         <label for="" class="col-form-label">Nom du Visiteur *</label>
                         <input type="text" class="form-control" placeholder="Nom du Visiteur" required
                              v-model="nom_visiteur">
                    </div>
               </div>

               <div class="row">
                    <div class="col-md-6 form-group mb-5">
                         <label for="" class="col-form-label">Carte</label>
                         <select class="form-select" aria-label="Default select example" required v-model="carte_visiteur">
                              <option selected>Open this select menu</option>
                              <option value="Card">Id card</option>
                              <option value="Passport">Passport</option>
                              <option value="CNI">CNI</option>
                         </select>
                       
                    </div>
                    <div class="col-md-6 form-group mb-5">
                         <label for="" class="col-form-label">Date de la Visite</label>
                         <input type="date" class="form-control" name="remember_token" placeholder="Date de la Visite"
                              required v-model="v_date">
                    </div>
               </div>

               <div class="row">
                    <div class="col-md-6 form-group mb-5">
                         <label for="" class="col-form-label">Heure d'arrivé</label>
                         <input type="time" class="form-control" name="create_at" placeholder="Heure d'arrivé" required
                              v-model="v_heure_arrive">
                    </div>
                    <div class="col-md-6 form-group mb-5">
                         <label for="" class="col-form-label">Heure de Depart</label>
                         <input type="time" class="form-control" name="update_at" placeholder="Heure de Depart" required
                              v-model="v_heure_depart">
                    </div>
                    <div class="col-md-6 form-group mb-5">
                         <label for="" class="col-form-label">Statut</label>
                         <input type="option" class="form-control" name="update_at" placeholder="Statut" required
                              v-model="statut">
                    </div>
               </div>



               <div class="row">
                    <div class="col-md-12 form-group">
                         <input type="submit" value="Send Message" class="btn btn-primary rounded-0 py-2 px-4">
                         <span class="submitting"></span>
                    </div>
               </div>
          </form>



     </div>
</template>

<script>
     export default {
          data() {
               return {
                    v_objet: '',
                    nom_visiteur: '',
                    carte_visiteur: '',
                    v_date: '',
                    v_heure_arrive: '',
                    v_heure_depart: '',
                    statut: ''

               }
          },

          methods: {

               submitData() {

                    fetch('http://127.0.0.1:8000/api/visite/', {
                              method: 'POST',
                              headers: {
                                   'Content-Type': 'application/json',
                              },
                              body: JSON.stringify({
                                   v_objet: this.v_objet,
                                   nom_visiteur: this.nom_visiteur,
                                   carte_visiteur: this.carte_visiteur,
                                   v_date: this.v_date,
                                   v_heure_arrive: this.v_heure_arrive,
                                   v_heure_depart: this.v_heure_depart,
                                   statut: this.statut,
                              }),                          
                         }).then(res => res.json())
                         .then(res => console.log(res));
               },
          },
     }
</script>


<style scoped>
     .title h1 {
          margin: 2rem;
          max-width: 90rem;
          text-align: center;
          padding: 1rem;
          border-radius: 5px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
     }

     .back {
          padding: 1rem;
     }

     .form {
          padding: 5rem;
     }

     form {
          margin: 2rem auto;
          max-width: 90rem;
          border-radius: 12px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
          padding: 5rem;
          background-color: #ffffff;
          font-family: 'Josefin Sans', sans-serif;
          font-family: 'Jost', sans-serif;
     }

     li {
          padding: 20px;
          margin-left: 70px;
          font-family: 'Josefin Sans', sans-serif;

     }


     #dropdown {
          text-align: right;
     }


     nav {
          padding: 2rem;
          background-color: #1461ac;
     }

     ul,
     .link,
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
          padding-bottom: px;
          border-bottom: 1px solid transparent;

     }


     .dropdown-item:hover {
          color: #fff;
          border-color: #EBD671;


     }
</style>