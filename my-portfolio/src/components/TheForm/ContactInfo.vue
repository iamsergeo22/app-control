<template>
  <div class="contact" data-aos="zoom-out-left" data-aos-duration="1000">
      <h3 data-aos="zoom-out-left" data-aos-duration="1000">Contact Info</h3>
      <p data-aos="zoom-out-left" data-aos-duration="1000">
        <span><i class="fa-solid fa-location-dot"></i></span> <strong>Location:</strong>
      </p>
      <em data-aos="zoom-out-left" data-aos-duration="1000">{{ location }}</em>

      <p data-aos="zoom-out-left" data-aos-duration="1000"><span><i class="fa-solid fa-phone"></i></span>  <strong>Phone Number:</strong></p>
      <em data-aos="zoom-out-left" data-aos-duration="1000">{{ phoneNumber }}</em>
       <p data-aos="zoom-out-left" data-aos-duration="1000"><span><i class="fa-solid fa-at"></i></span> <strong>Email:</strong></p>
      <em data-aos="zoom-out-left" data-aos-duration="1000">{{ emailAddress }}</em>

      <br>
       <p data-aos="zoom-out-left" data-aos-duration="1000"><span><i class="fa-solid fa-square-share-nodes"></i></span> <strong>Social Media:</strong></p>
      <em>

  <div data-aos="zoom-out-left" data-aos-duration="1000">
       <a href=""><i class="fab fa-twitter-square"></i></a>
     <a href=""><i class="fab fa-facebook"></i></a>
   <a href=""><i class="fab fa-instagram"></i></a>
     <a href=""><i class="fab fa-skype"></i></a>
    <a href=""><i class="fab fa-github"></i></a>
    <a href=""><i class="fab fa-linkedin"></i></a>
  </div>
  
      </em>
   
    </div>
</template>

<script>
import AOS from "aos";
export default {
  setup() {
     AOS.init();
  
  },
     data() {
          return {
               name: 'Serge A. TASSIGA',
               phoneNumber: '+228 91584474',
               location: 'Lomé, Togo',
               emailAddress: 's.tassiga@alustudent.com',
          }
     },

}
</script>

<style scoped>
.contact {
  margin: 2rem auto;
  max-width: 90rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 4rem;
  background-color: #ffffff;
  text-align: left;
}
h3 {
  font-size: 40px;
  font-family: 'Josefin Sans', sans-serif;
  font-family: 'Jost', sans-serif;
  color: #0F044C;
}
a {
  text-decoration: none;
  color: #40DFEF;
  justify-content: space-between;
  padding: 0.2rem;
}

a:hover,
a:active {
  color: #40DFEF;
}

span {
  font-size: 30px;
  color:#40DFEF;
}

h5 {
  text-align: center;
  font-size: 15px;
  font-family: 'Josefin Sans', sans-serif;
  font-family: 'Jost', sans-serif;
}

p {
  font-family: 'Josefin Sans', sans-serif;
  font-family: 'Jost', sans-serif;
  font-size: 19px;
  line-height: 35px;
  
}
strong {
  color: #0F044C;
  font-family: 'Josefin Sans', sans-serif;
  font-family: 'Jost', sans-serif;
}
em {
  font-family: 'Josefin Sans', sans-serif;
  font-family: 'Jost', sans-serif;
  font-size: 20px;
}
h1 {
  
  font-size: 50px;
  font-family: 'Josefin Sans', sans-serif;
  font-family: 'Jost', sans-serif;
  color: #fff;
  
}

</style>