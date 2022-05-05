<template>
<div class="home" data-aos="zoom-in"
     data-aos-offset="500"
     data-aos-easing="ease-in-sine">
  <div class="title">
     <h1 data-aos="zoom-in"><i>Hi! I am {{ name }}</i></h1>
     <h3 data-aos="zoom-in"><em>{{ job }}</em></h3>
     <!-- <p><em>I'm</em> <span class="typed" data-typed-items=" Web Developer, Freelancer, Software Engineer"></span></p> -->
     <BaseButton @click.prevent="himeMe" data-aos="zoom-in">Hire me</BaseButton>
  </div>
     
     

     <div class="divider" data-aos="zoom-in">
       
    <h2>Who am I?</h2>
    <hr>
     <p>
       I am Serge Anan Year 3 Computer Science Student at African Leadership University in Rwanda. 
       I am originally Togolese, I am very passionate with Web development and using some programming Languages to build amazing things. 
       Web design is my Passion, and I believe with Design we will change the World.
       <br>
       <br>
       I'm a software programmer! I can assist you with developing a product, feature, or website. 
       Take a look at some of my previous work and experience! Please don't hesitate to contact me 
       if you like what you see and have a project that needs to be coded.
       I am very passionate with Web development and using some programming Languages to build amazing things. 
       Web design is my Passion, and I believe with Design we will change the World.
      
     </p>

     <BaseButton>
     <a href="./RW_CV_Togo_SergeAnan_TASSIGA.pdf" download class="download-btn"><i class="fa fa-download"></i> Get my resume</a>
     </BaseButton>

     <h2>
       Let's connect

     </h2>
    
     <div class="icons" data-aos="zoom-in">
       <a href=""><i class="fab fa-twitter-square"></i></a>
     <a href=""><i class="fab fa-facebook"></i></a>
   <a href=""><i class="fab fa-instagram"></i></a>
     <a href=""><i class="fab fa-skype"></i></a>
    <a href=""><i class="fab fa-github"></i></a>
    <a href=""><i class="fab fa-linkedin"></i></a>


     </div>

  
    </div>

    <div class="divi" data-aos="zoom-in">
    <div class="lang" data-aos="zoom-in">
      <h2>Programming Languages</h2>
      <hr>
      <ul data-aos="zoom-out" data-aos-offset="400">
        
        <li>CSS</li>
        <div class="bar_75"><h6>75%</h6></div>
        <li>JavaScript</li>
        <div class="bar_75"><h6>75%</h6></div>
        <li>C</li>
        <div class="bar_50"><h6>50%</h6></div>
        <li>Python/Java</li>
        <div class="bar_45"><h6>45%</h6></div>
        <li>HTML</li>
        <div class="bar_95"><h6>95%</h6></div>
       
      </ul>
    </div>
    <div class="lang" data-aos="zoom-in">
      <h2>FrameWorks</h2>
      <hr>
      <ul data-aos="zoom-out" data-aos-offset="400">
        <li>Angular</li>
        <div class="bar_45"><h6>45%</h6></div>
        <li>React Js</li>
        <div class="bar_45"><h6>45%</h6></div>
        <li>Vue Js</li>
        <div class="bar_75"><h6>75%</h6></div>
        
      
      </ul>

    </div>

    <div class="lang" data-aos="zoom-in">
    <h2>
      Skills
    </h2>
    <hr>
    <ul data-aos="zoom-out" data-aos-offset="400">
      <li>Wordpress</li>
      <div class="bar_75"><h6>75%</h6></div>
      <li>Web development</li>
      <div class="bar_75"><h6>75%</h6></div>
      <li>FrontEnd</li>
      <div class="bar_95"><h6>95%</h6></div>
      <li>Software Engineering</li>
      <div class="bar_50"><h6>50%</h6></div>
    </ul>
    </div>

    <div class="lang" data-aos="zoom-in">
      <h2>Languages</h2>
      <hr>
      <ul data-aos="zoom-out" data-aos-offset="400">
        <li>English</li>
        <div class="bar_95"><h6>95%</h6></div>
        <li>French</li>
        <div class="bar_75"><h6>75%</h6></div>
        <li>Ewe</li>
        <div class="bar_75"><h6>75%</h6></div>
        <li>Kabyé</li>
        <div class="bar_95"><h6>95%</h6></div>
        
      
      </ul>

    </div>

 
    </div>
    <!-- 
    <h2>
      My Recents Projects
    </h2>

    <div class="portfolio">


      <div class="box">
         <img src="../components/images/Capture2.png" alt="" width="700px" height="500px">
        <h2>Mek's Engineering Group website</h2>
      </div>
     
        
    </div>
    
  

    <div class="portfolio">

<div class="box">
  <h2>Sylviora Shop website</h2>
  <img src="../components/images/Capture4.png" alt="" width="700px" height="500px">
</div>
    
    </div>

    </div> -->




 </div>
 <div class="contact-title" data-aos="zoom-in">
     <h2>
  Contact me
  </h2>
  <hr>

   <p><em>If you have an application you are interested in developing, <br> 
     a feature that you need built or a project that needs coding. <br>
     I’d love to help with it</em></p>
</div>
  <div class="resume" data-aos="zoom-in">

    <ContactInfo></ContactInfo>
    <TheForm></TheForm> 
</div>

  <hr>
  <h5>{{ copyright }}</h5>

 
</template>

<script>
// @ is an alias to /src
//import BaseCard from '@/components/UI/BaseCard.vue'
import BaseButton from '@/components/UI/BaseButton.vue'
import TheForm from '@/components/TheForm/TheForm.vue'
import ContactInfo from '@/components/TheForm/ContactInfo.vue'
import AOS from "aos";

export default {
   setup() {
     AOS.init();
  
  },
  name: 'HomeView',
  components: {
    BaseButton,
    TheForm,
    ContactInfo
    //BaseCard
  },

  data() {
    return {
      name: 'Serge A. TASSIGA',
      phoneNumber: '+228 91584474',
      location: 'Lomé, Togo',
      emailAddress: 's.tassiga@alustudent.com',
      copyright: 'Copyright © 2022. All rights reserved by Serge Tassiga',
      job: 'I am Web and Mobile Developer',
      languages: [
        {
          html:'HTML',
          css: 'CSS', 
          js: 'JavaScript', 
          py: 'Python', 
          c: 'C', 
          java: 'Java'
        }
      ],
      framework: ['React Js', 'Vue Js'],
      skills: ['Wordpress', 'Web development', 'FrontEnd']
      

    }
  },


  methods: {
    himeMe() {
      this.$router.push('/contact')
    }
  },
}
</script>


<style scoped>
.icons {
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
h1 {
  
  font-size: 50px;
  font-family: 'Josefin Sans', sans-serif;
  font-family: 'Jost', sans-serif;
  color: #fff;
  
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

h2 {
  font-family: 'Josefin Sans', sans-serif;
  font-family: 'Jost', sans-serif;
  color: #0F044C;
  font-size: 20px;
  text-align: center;


}
h6 {
  font-family: 'Josefin Sans', sans-serif;
  font-family: 'Jost', sans-serif;
  color: black;
  font-size: 11px;
  
}
.contact-title {
  margin-top: 700px;
}

hr {
  border: 2px solid;
  width: 70px;
  color: #0F044C;
  background-color: #0F044C;
}
.box {
  display: flex;
  justify-content: space-between;

}

li {
  font-family: 'Josefin Sans', sans-serif;
  font-family: 'Jost', sans-serif;
  font-size: 20px;
}
h3 {
  font-size: 40px;
  font-family: 'Josefin Sans', sans-serif;
  font-family: 'Jost', sans-serif;
  color: #0F044C;
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

.divider {
  margin: 4rem auto;
  max-width: 70rem;
  max-height: 90rem;
  text-align: left;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);

  
}
.bar_95 {
  background-color: #B2F9FC;
  width: 85%;
  height: 100%;
  text-align: right;
  font-size: medium;
  color: black;
  font-family: 'Josefin Sans', sans-serif;
  font-family: 'Jost', sans-serif;
}
.bar_50 {
  background-color: #B2F9FC;
  width: 50%;
  height: 100%;
  text-align: right;
  font-size: medium;
  color: black;
  font-family: 'Josefin Sans', sans-serif;
  font-family: 'Jost', sans-serif;
}
.bar_75 {
  background-color: #B2F9FC;
  width: 75%;
  height: 100%;
  border: 2px black;
  text-align: right;
  font-size: medium;
  color: black;
  font-family: 'Josefin Sans', sans-serif;
  font-family: 'Jost', sans-serif;
}
.bar_45 {
  background-color: #B2F9FC;
  width: 45%;
  height: 100%;
  text-align: right;
  font-size: medium;
  color: black;
  font-family: 'Josefin Sans', sans-serif;
  font-family: 'Jost', sans-serif;
}
/* .home {
  
  
} */

.divi {
  margin: 2rem auto;
  max-width: 70rem;
  max-height: 90rem;
  text-align: left;
  padding: 1rem;
  border-radius: 12px;
  
  
}


.contact h2 {
  text-align: left;
}

.title {
  background-image: url(../components/WhatsApp\ Image\ 2022-04-09\ at\ 15.57.22.jpeg);
  margin: 0.5rem auto;
  text-align: left;
  padding: 20rem;
  border-radius: 12px;
 
  
}

.lang{
  margin: 2rem auto;
  padding: 0.5rem;
  max-width: 80rem;
  text-align: left;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);

  

}
.pf h2 {
  margin: 2rem auto;
  max-width: 40rem;
  text-align: left;
  padding: 1rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin-top: 500px;
  
}

.portfolio {
  margin: 4rem auto;
  max-width: 80rem;
  max-height: 100rem;
  text-align: left;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  
  
}

.resume {
  max-width: 100rem;
  text-align: left;
  border-radius: 12px;
  display: flex;
  background-color: #fff;
  
}


</style>
