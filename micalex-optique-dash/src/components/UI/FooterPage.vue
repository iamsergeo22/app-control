<template>
  <div class="footer">
    <div>
      <div class="row">
        <div class="col-lg-3">
          <img class="img-fluid" src="" alt="">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Aut accusamus labore praesentium
            debitis beatae similique quia autem assumenda totam
          </p>
        </div>

        <div class="col-lg-3">
          <h1>Liens Utiles</h1>
          <ul>
            <li>
              <router-link class="link" to="/">Acceuil</router-link>
            </li>
            <li>
              <router-link class="link" to="/a-propos">A propos</router-link>
            </li>
            <li>
              <router-link class="link" to="/service">Services</router-link>
            </li>
            <li>
              <router-link class="link" to="/galerie">Galerie</router-link>
            </li>
          </ul>
        </div>
        <div class="col-lg-3">
          <h1>Contacts</h1>
          <ul>
            <li>contact@micalexoptique.com</li>
            <li>+228 93658616</li>
            <li>Lomé au quartier Dekon, en face de la Banque NSIA</li>
          </ul>
        </div>
        <div class="col-lg-3">
          <h1>Reseaux Sociaux</h1>
          <ul>
            <li><i class="fab fa-facebook"></i>
              <router-link class="link" to="/"> Micalex Optique</router-link>
            </li>
            <li><i class="fab fa-instagram"></i>
              <router-link class="link" to="/"> Micalex Optique</router-link>
            </li>
            <li><i class="fab fa-linkedin"></i>
              <router-link class="link" to="/"> Micalex Optique</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.footer {
  padding: 30px;
  background-color: #001D6E;

  p,
  h1,
  li {
    color: #fff;
    font-family: 'Jost', sans-serif;

  }

  p {
    font-size: 15px;
  }

  .col-lg-4 {
    padding: 5px;
  }

  ul,
  li {
    font-size: 17px;

  }

  .link {
    text-decoration: none;
    color: #fff;
    font-family: 'Jost', sans-serif;
  }


  h1 {
    text-transform: uppercase;
    font-size: 20px;


  }
}
</style>