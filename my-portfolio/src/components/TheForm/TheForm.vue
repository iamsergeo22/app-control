<template>
   <form data-aos="zoom-out-left" data-aos-duration="1000">
    <div class="form-control" :class="{invalid: userNameValidity === 'invalid', valid: userNameValidity === 'valid'}">
      <label for="user-name" data-aos="zoom-out-left" data-aos-duration="1000">Your Name</label>
      <input id="user-name" name="user-name" type="text" placeholder="Full Name"  v-model.trim="userName" @blur="validateInput" />
      <p v-if="userNameValidity === 'invalid' ">Please enter a valid name</p>
      <p v-else-if="userNameValidity === 'valid' ">Very Strong Name</p>
    </div>
    <div class="form-control" :class="{invalid: userNameValidity === 'invalid', valid: userNameValidity === 'valid'}">
      <label for="email" data-aos="zoom-out-left" data-aos-duration="1000">Email</label>
      <input id="email" name="email" type="email" placeholder="Email Address" v-model.trim="email" @blur="validateInput"/>
      <p v-if="userNameValidity === 'invalid' ">Please enter a valid email</p>
      <p v-else-if="userNameValidity === 'valid' ">Very Strong Email</p>
    </div>
    <div class="form-control" :class="{invalid: userNameValidity === 'invalid', valid: userNameValidity === 'valid'}">
      <label for="age" data-aos="zoom-out-left" data-aos-duration="1000">Subject</label>
      <input id="subject" name="subject" type="text" placeholder="Subject" v-model.trim="subject" @blur="validateInput"/>
      <p v-if="userNameValidity === 'invalid' ">Please enter a valid Subject</p>
      <p v-else-if="userNameValidity === 'valid' ">Very Good subject</p>
    </div>
    
   
    <div class="form-control">
    <textarea name="message" id="message" class="form-control" placeholder="Write your message" cols="60" rows="10" required="" v-model.trim="message"  @blur="validateInput"></textarea>
    </div>
   
    <div>
      <BaseButton @click="submitData" data-aos="zoom-out-left" data-aos-duration="1000">Send Message</BaseButton>
     <teleport to="body">
    <AlertError v-if="inputIsInvalid" data-aos="zoom-out-left" data-aos-duration="1000">
      <h2>Input is invalid!</h2>
      <p>Please enter at least a few characters...</p>
      <BaseButton @click="confirmError" data-aos="zoom-out-left" data-aos-duration="1000">OK</BaseButton>
    </AlertError>
    <!-- <AlertError v-else-if="inputIsInvalid === false">
      <h2>Sucessful Sent!</h2>
      <p>In couple of days We will get back to you...</p>
      <BaseButton @click="confirmError">OK</BaseButton>
    </AlertError> -->
  </teleport>
    </div>
  </form>
</template>

<script>
import BaseButton from "../UI/BaseButton.vue"
import AlertError from '../UI/AlertError.vue'
import AOS from "aos";
export default {
   setup() {
     AOS.init();
  
  },
     components: {
         BaseButton,
         AlertError
     },

     data() {
          return {
               userName: '',
               email: '',
               subject: '',
               message: '',
               inputIsInvalid: false,
               userNameValidity: 'pending'
          }
     },

     methods: {
    submitData() {
      
      if (this.userName === '' || this.email === '' || this.message === '' || this.subject === '') {
        this.inputIsInvalid = true;
      }
      fetch('https://my-demo-portfolio-bf78d-default-rtdb.firebaseio.com/users.json', {
        method: 'POST',
        headers: {'Content-Type' : 'application/json',
        },
        body: JSON.stringify({
          name: this.userName,
          email: this.email,
          subject: this.subject,
          message: this.message
        })
      }).then(res => res.json())
      .then(res => console.log(res));
    },
    confirmError() {
      this.inputIsInvalid = false;
    },

    validateInput() {
      if (this.userName === '' || this.email === '' || this.subject === '') {
        this.userNameValidity = 'invalid';
      } else {
        this.userNameValidity = 'valid';
      }
    }
  },
};
       
</script>

<style scoped>
form {
  margin: 2rem auto;
  max-width: 70rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 5rem;
  background-color: #ffffff;
  font-family: 'Josefin Sans', sans-serif;
  font-family: 'Jost', sans-serif;
}

.form-control {
  margin: 0.5rem 0;
}
.form-control.invalid input {
  border-color: #FF1818;
}
.form-control.valid input {
  border-color: #064635;
}
.form-control.invalid label {
  color: #FF1818;
}
.form-control.valid label {
  color: #064635;
}

label {
  font-weight: bold;
  font-family: 'Josefin Sans', sans-serif;
  font-family: 'Jost', sans-serif;
  text-align: left;
  
}
input,
select {
  display: block;
  width: 100%;
  height: 100%;
  font: inherit;
  margin-top: 0.5rem;
  font-family: 'Josefin Sans', sans-serif;
  font-family: 'Jost', sans-serif;
  
}

select {
  width: 100%;
}

input[type='checkbox'],
input[type='radio'] {
  display: inline-block;
  width: auto;
  margin-right: 1rem;
  font-family: 'Josefin Sans', sans-serif;
  font-family: 'Jost', sans-serif;
}

input[type='checkbox'] + label,
input[type='radio'] + label {
  font-weight: normal;
}

</style>