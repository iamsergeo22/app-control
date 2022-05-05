Vue.createApp({
    data() {
      return {
        goals: [],
        enteredValue: '',
        employes: [
          'serge', 'kofi', 'anita', ''
        ]
      };
    },
    methods: {
      addGoal() {
        this.goals.push(this.enteredValue);
        this.enteredValue = '';
        console.log(this.employes);
      }
    }
  }).mount('#app');