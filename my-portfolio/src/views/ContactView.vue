<template>
    <div class="about">
    <h1>Contact me</h1>
  </div>

<br>
<br>
<div data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="300"
     data-aos-offset="0">
<h3>Get An Appoinment</h3>
  <p><em>If you have an application you are interested in developing, <br> 
     a feature that you need built or a project that needs coding. <br>
     I’d love to help with it</em></p>
</div>

  <div class="resume" data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="300"
     data-aos-offset="0">>
    <ContactInfo></ContactInfo>
   <TheForm></TheForm> 
  </div>
   <hr>
  <h5>{{ copyright }}</h5>
</template>

<script>
import TheForm from '../components/TheForm/TheForm.vue'
import ContactInfo from '../components/TheForm/ContactInfo.vue'
import AOS from "aos";
export default {
   setup() {
     AOS.init();
  
  },
     components: {
          TheForm,
          ContactInfo
     },

     data() {
          return {
               name: 'Serge A. TASSIGA',
               phoneNumber: '+228 91584474',
               location: 'Lomé, Togo',
               emailAddress: 's.tassiga@alustudent.com',
               copyright: 'Copyright © 2022. All rights reserved by Serge Tassiga',
          }
     },
}
</script>

<style scoped>

.about {
  background-image: url(../components/images/bbg.jpg);
  margin: 1rem auto;
  text-align: left;
  padding: 2rem;
  text-align: center;
  border-radius: 12px;
  font-family: 'Josefin Sans', sans-serif;
  font-family: 'Jost', sans-serif;
 
  
}
a {
  text-decoration: none;
  color: #548CA8;
  justify-content: space-between;
  padding: 0.2rem;
}

a:hover,
a:active {
  color: #B2F9FC;
}
h5 {
   font-family: 'Josefin Sans', sans-serif;
   font-family: 'Jost', sans-serif;
}
hr {
  border: 2px solid;
  width: 70px;
  color: #0F044C;
  background-color: #0F044C;
}

h1 {
  font-family: 'Josefin Sans', sans-serif;
  font-family: 'Jost', sans-serif;
  color: #0F044C;
  font-size: 50px;
  text-align: center;


}
p {
  font-family: 'Josefin Sans', sans-serif;
  font-family: 'Jost', sans-serif;
  font-size: 19px;
  line-height: 30px;
  
}
h2 {
  font-family: 'Josefin Sans', sans-serif;
  font-family: 'Jost', sans-serif;
  color: #0F044C;
  font-size: 40px;
  text-align: center;


}
h3 {
   font-family: 'Josefin Sans', sans-serif;
   font-family: 'Jost', sans-serif;
   color: #0F044C;
   font-size: 30px;
   text-align: center;  
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
.resume {
  max-width: 90rem;
  max-height: 90rem;
  text-align: left;
  padding: 2rem;
  border-radius: 12px;
  display: flex;
  background-color: #fff;
  
}


.contact {
  margin: 2rem auto;
  max-width: 90rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 5rem;
  background-color: #ffffff;
  text-align: left;
}


</style>