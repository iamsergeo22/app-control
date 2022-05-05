<template>
     <div class="menu">
          <nav class="navbar navbar-expand-lg navbar-light">
               <div class="container-fluid">
                    <a class="navbar-brand" href="#"><img src="../../images/meg1.png" alt=""></a>
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



</template>

<script>
     export default {

     }
</script>
<style scoped>


     nav {
          padding: 1rem;
          
     }


.form {
     padding: 5rem;
}

nav {
          background-color: #1461ac;
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