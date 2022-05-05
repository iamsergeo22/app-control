<template>

<navigation-bar></navigation-bar>
<div class="title">
     <h1>Visitor Board</h1>
</div>


<div class="board">

     <button type="button" class="btn btn-info">
       <router-link class="link" to="/add-visitor">Add Visitor</router-link>
     </button>
     <br>
     <table class="table table-striped table-hover">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">v_objet</th>
      <th scope="col">nom_visiteur</th>
      <th scope="col">carte_visiteur</th>
      <th scope="col">v_date</th>
      <th scope="col">v_heure_arrive</th>
      <th scope="col">v_heure_depart</th>
      <th scope="col">statut</th>
      <th scope="col">Actions</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
     <td>
          <button type="button" class="btn btn-danger">Delete</button>
          <button type="button" class="btn btn-success">Edit</button>
      </td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>
          <button type="button" class="btn btn-danger">Delete</button>
          <button type="button" class="btn btn-success">Edit</button>
      </td>
    </tr>

    
  </tbody>
</table>

</div>
  
</template>

<script>
import navigationBar from "../partials/navigationBar.vue"
export default {
     components: {
          navigationBar
     }
}
</script>

<style scoped>


ul,
      .link,
      .dropdown-item {
        font-weight: 500;
        color: #fff;
        list-style: none;
        text-decoration: none;
      }

.table td {
     padding: 2rem;
}
    .title {
          margin: 2rem;
          max-width: 90rem;
          text-align: center;
          padding: 1rem;
          border-radius: 5px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
     }


.board {
     padding: 5rem;
}

 li {
        padding: 10px;
        margin-left: 25px;
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
        padding-bottom: px;
        border-bottom: 1px solid transparent;

      }

      
        .dropdown-item:hover {
          color: #fff;
          border-color: #EBD671;


        }


</style>
./views/loginPage.vue