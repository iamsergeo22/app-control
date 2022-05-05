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
          <h1>Create User</h1>
     </div>


     <div class="back">


          <button type="button" class="btn btn-info">
               <router-link class="link" to="/user">Back to User Dashboard</router-link>
          </button>
          <br>

     </div>

     <div class="divider">
          <div class="form">

               <form class="mb-5"  @submit="addUser">
                    <div class="row">
                         <div class="col-md-6 form-group mb-5">
                              <label for="" class="col-form-label">Name *</label>
                              <input type="text" class="form-control" name="nom" id="name" placeholder="Name" required v-model="name">
                         </div>
                         <div class="col-md-6 form-group mb-5">
                              <label for="" class="col-form-label">Email *</label>
                              <input type="email" class="form-control" name="email" id="email" placeholder="Email" required v-model="email">
                         </div>
                    </div>

                    <div class="row">
                         <div class="col-md-6 form-group mb-5">
                              <label for="" class="col-form-label">Password</label>
                              <input type="password" class="form-control" name="password" id="phone" placeholder="Le Mot de Passe" required v-model="password">
                         </div>
                         <div class="col-md-6 form-group mb-5">
                              <label for="" class="col-form-label">Remember Token</label>
                              <input type="text" class="form-control" name="remember_token" 
                                   placeholder="remember_token" required v-model="remember_token">
                         </div>
                    </div>

                           <div class="row">
                         <div class="col-md-6 form-group mb-5">
                              <label for="" class="col-form-label">Create Date</label>
                              <input type="date" class="form-control" name="create_at" placeholder="create_at" required v-model="create_at">
                         </div>
                         <div class="col-md-6 form-group mb-5">
                              <label for="" class="col-form-label">Update Date</label>
                              <input type="date" class="form-control" name="update_at" 
                                   placeholder="update_at" required v-model="update_at">
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

     </div>
</template>

<script>
     export default {

          data() {
               return {
                    name: '',
                    email: '',
                    password: '',
                    remember_token: '',
                    create_at: '',
                    update_at: ''

               }
          },

          methods: {
               addUser() {

                    fetch('https://app-control-f04f4-default-rtdb.firebaseio.com//users.json', {
                              // It is to post data like send a data
                              method: 'POST',
                              mode: "no-cors",
                              headers: {
                                   'Content-Type': 'application/json',
                              },

                              body: JSON.stringify({
                                   name: this.name,
                                   email: this.email,
                                   password: this.password,
                                   remember_token: this.remember_token,
                                   create_at: this.create_at,
                                   update_at: this.update_at

                                   
                              }),
                    }).then(res => res.json())
                         .then(res => console.log(res));


               }
          },

     }
</script>
<style scoped>
     .back {
          padding: 1rem;
     }

     nav {
          padding: 2rem;
          background-color: #1461ac;
     }


     .title {
          margin: 2rem;
          max-width: 90rem;
          text-align: center;
          padding: 1rem;
          border-radius: 5px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
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


     .image {
          margin: 2rem auto;
          max-width: 70rem;
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
          padding-bottom: 1px;
          border-bottom: 1px solid transparent;

     }


     .dropdown-item:hover {
          color: #fff;
          border-color: #EBD671;


     }
</style>