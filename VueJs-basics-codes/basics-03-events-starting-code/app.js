const app = Vue.createApp({
  data() {
    return {
      counter: 20,
      name: '',
      lastName: '',
      fonction: '',
      employes: []
      // fullname: ''
    
    };
  },

  // Watchers : 
  watch: {
    /* name(value) {
      if (value === '') {
        this.fullname = '';
      } else {
        this.fullname = value + ' ' + this.lastName;
      }
    },

    lastName(value) {
      if (value === '') {
        this.fullname = '';
      } else {
        this.fullname = this.name + ' ' + value;
      }
    }, */
  },
// Computed properties
  computed: {
/*     fullname() {
      console.log('The app is runnig...');
      if (this.name === '' || this.lastName === '') {
        return '';
      }
      return this.name + '' + this.lastName;
    },
 */
  },

  

  methods: {

    submitForm() {
      console.log(this.lastName);
      this.employes.push(
        {'name' : this.name, 'lastName' : this.lastName,'fonction' : this.fonction}
      );
      this.name =""
      this.lastName=""
      this.fonction=""
    },
    /* setName() {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },

    reduceCounter(num) {
      this.counter = this.counter - num;

    } */
  },
});

app.mount('#events');
