const app = Vue.createApp({
     data() {
          return {
              firstName: 'Serge',
              lastName: 'Tassiga',
              email: 's.tassiga@alustudent.com',
              age: '22',
              gender: 'male',
              picture: ''
          }
     },

     methods: {
          getUser() {

          }
     },
})

app.mount('#app')