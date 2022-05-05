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
          <h1>DashBoard</h1>
     </div>

     <br>

     <div class="row" id="boxes">
          <div class="features-box col-lg-4">
               <div class="visit">
                    <h1>1500</h1>
                    <p><em>Visit Todays</em></p>
               </div>
          </div>

          <div class="features-box col-lg-4">
               <div class="users">
                    <h1>200</h1>
                    <p><em>Users</em></p>
               </div>
          </div>

          <div class="features-box col-lg-4">
               <div class="total">
                    <h1>255</h1>
                    <p><em>Totals of Visitors in a Year</em></p>
               </div>
          </div>
     </div>

     <br>

     <div class="visit-list">
          <h3>All Visitor</h3>
          <br>
          <table class="table table-striped table-hover">
               <thead>
                    <tr>
                         <th scope="col">Person Id</th>
                         <th scope="col">Libellé</th>
                         <th scope="col">Motif</th>
                         <th scope="col">Heure d'Arrivé</th>
                         <th scope="col">Heure de Depart</th>


                    </tr>
               </thead>
               <tbody>
                    <tr>
                         <th scope="row">1</th>
                         <td>Mark</td>
                         <td>Otto</td>
                         <td>@mdo</td>
                         <td>@mdo</td>

                    </tr>
                    <tr>
                         <th scope="row">2</th>
                         <td>Jacob</td>
                         <td>Thornton</td>
                         <td>@fat</td>
                         <td>@mdo</td>

                    </tr>

                    <tr>
                         <th scope="row">3</th>
                         <td>Jacob</td>
                         <td>Thornton</td>
                         <td>@fat</td>
                         <td>@mdo</td>

                    </tr>


               </tbody>
          </table>

     </div>


     <div class="visit-list">

           <h3>Progress Bar</h3>
          <br>

          <div class="progress">
               <div class="progress-bar bg-success" role="progressbar" style="width: 25%" aria-valuenow="25"
                    aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <br>
          <div class="progress">
               <div class="progress-bar bg-info" role="progressbar" style="width: 50%" aria-valuenow="50"
                    aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <br>
          <div class="progress">
               <div class="progress-bar bg-warning" role="progressbar" style="width: 75%" aria-valuenow="75"
                    aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <br>
          <div class="progress">
               <div class="progress-bar bg-danger" role="progressbar" style="width: 100%" aria-valuenow="100"
                    aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <br>
     </div>

     <div class="user-list">
               <h3>User List</h3>
               <br>
               <table class="table table-striped table-hover">
                    <thead>
                         <tr>
                              <th scope="col">id</th>
                              <th scope="col">Name</th>
                              <th scope="col">Email</th>
                              <th scope="col">Verified Email</th>
                              <th scope="col">Create Time</th>


                         </tr>
                    </thead>
                    <tbody>
                         <tr>
                              <th scope="row">1</th>
                              <td>Mark</td>
                              <td>Otto</td>
                              <td>@mdo</td>
                              <td>@mdo</td>

                         </tr>
                         <tr>
                              <th scope="row">2</th>
                              <td>Jacob</td>
                              <td>Thornton</td>
                              <td>@fat</td>
                              <td>@mdo</td>
                         </tr>

                         <tr>
                              <th scope="row">2</th>
                              <td>Jacob</td>
                              <td>Thornton</td>
                              <td>@fat</td>
                              <td>@mdo</td>
                         </tr>


                    </tbody>
               </table>

          </div>


     <div class="list">

          <div class="static">
               <h3>Bar Chart</h3>
               <br>
               <PieChartPage></PieChartPage>
          </div>

     </div>
</template>

<script>
     import PieChartPage from "./PieChartPage.vue"

     export default {
          components: {
               PieChartPage,

          }
     }
</script>

<style scoped>

#boxes {
     padding: 1rem;
     margin: 1rem;
}
     h1,
     h3,
     p {
          font-family: 'Montserrat';
     }

     .title h1 {
          margin: 2rem;
          max-width: 90rem;
          text-align: center;
          padding: 1rem;
          border-radius: 5px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
     }

     .visit-list {

          margin: 1rem;
          max-width: 90rem;
          text-align: left;
          padding: 2rem;
          border-radius: 5px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);

     }


     .static {

          margin: 1rem;
          max-width: 60rem;
          text-align: left;
          padding: 2rem;
          border-radius: 5px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);

     }

     .table td {
          padding: 2rem;
     }


     .user-list {

          margin: 1rem;
          max-width: 90rem;
          text-align: left;
          padding: 2rem;
          border-radius: 5px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);

     }

     .divider {
          display: flex;

     }

     .list {
          display: flex;
          text-align: center;

     }

     .visit {
          background-color: aqua;
          margin: .5rem auto;
          max-width: 30rem;
          padding: 5rem;
          border-radius: 5px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
          height: 30vh;
     }

     nav {
          background-color: #1461ac;
     }


     .users {

          background-color: #066163;
          margin: .5rem auto;
          max-width: 30rem;
          text-align: left;
          padding: 5rem;
          border-radius: 5px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
          height: 30vh;
     }


     .total {
          background-color: #EBD671;
          margin: .5rem auto;
          max-width: 30rem;
          text-align: left;
          padding: 5rem;
          border-radius: 5px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
          height: 30vh;
     }


     nav {
          padding: 2rem;

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
          font-family: 'Josefin Sans', sans-serif;
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