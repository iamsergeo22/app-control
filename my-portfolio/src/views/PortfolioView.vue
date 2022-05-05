<template>

  <div class="about">
    <h1>My Recents Projects</h1>
  </div>
      
  <div class="divi" data-aos="zoom-out-left" data-aos-duration="1000">
    <h2>Mek's Engineering Group website</h2>
      <hr>
    <div class="lang">
      
       <br>
      <img src="../components/images/Capture2.png" alt="" width="50%">
      <br>
      
      <div class="langs" data-aos="fade-right">
        
      <p>
       <strong>Website</strong> <br>
      <strong>MEG· Wordpress· 2022</strong> <br>
        A daily selection of privately personalized reads; no accounts or sign-ups required.
        <br>
        <br>
        <a href="http://mekengroup.com/">View the Wesbite</a>
      </p>
      </div>
        
     
    </div>

    <h2>Sylviora e-commerce Platform</h2>
    <hr>
    <div class="lang" data-aos="zoom-out-left" data-aos-duration="1000">

         <div class="langs" data-aos="fade-right">
        <p>
        <strong>E-commerce Platform</strong> <br>
        <strong>Sylviora· Wordpress · 2022</strong> <br>
        A daily selection of privately personalized reads; no accounts or sign-ups required.
        <br>
        <br>
        <a href="http://sylviora.com/">View the Wesbite</a>
        </p>
      </div>
      
      <br>
      <img src="../components/images/Capture4.png" alt="" width="50%">
      <br>

   

    </div>

     

    

    
  </div>

  <hr>
  <h5>{{ copyright }}</h5>

</template>

<script>
import AOS from "aos";
export default {
  setup() {
     AOS.init();
  
  },
  component: {
   
  },
  data() {
    return {
      copyright: 'Copyright © 2022. All rights reserved by Serge Tassiga',
    }
  },

}
</script>

<style scoped>
p {
  font-family: 'Josefin Sans', sans-serif;
  font-family: 'Jost', sans-serif;
  font-size: 20px;
  text-align: left;
  line-height: 35px;
}
h2 {
  font-family: 'Josefin Sans', sans-serif;
  font-family: 'Jost', sans-serif;
  color: #0F044C;
  font-size: 20px;
  text-align: center;


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
.divi {
  margin: 4rem auto;
  max-width: 70rem;
  max-height: 90rem;
  text-align: left;
  padding: 2rem;
  border-radius: 12px;
  
  
}

.lang{
  margin: 2rem auto;
  max-width: 80rem;
  text-align: left;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding-bottom: 2rem;
  display: flex;
  justify-content: space-between;
  

}

a {
  text-decoration: none;
  color: #ce5c00;
}

a:hover,
a:active {
  color: #c89300;
}

.langs{
  margin: 5rem auto;
  max-width: 40rem;
  padding: 5rem;
  text-align: left;
  border-radius: 12px;
  padding-bottom: 2rem;
  display: flex;
  justify-content: space-between;
  
}
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

h1 {
  font-family: 'Josefin Sans', sans-serif;
  font-family: 'Jost', sans-serif;
  color: #0F044C;
  font-size: 50px;
  text-align: center;


}

</style>
