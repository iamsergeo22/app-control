const app = Vue.createApp({
     data() {
          return {
               name: '',
               email: '',
               age: '',
               fonction: '',
               experience: '',
               studentLists: []
          }
     },

     methods: {
          submitForm() {
               console.log('Running the App....')
               this.studentLists.push(
                    {
                         'name' : this.name, 'email' : this.email, 'age' : this.age, 'fonction' : this.fonction, 'experience' : this.experience
                    }

               );

               this.name = ''
               this.email = ''
               this.age = ''
               this.fonction = ''
               this.experience = ''
          }
     },

})

app.mount('#form');