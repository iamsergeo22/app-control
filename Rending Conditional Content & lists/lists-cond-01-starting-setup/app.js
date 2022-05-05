const app = Vue.createApp({
  data() {
    return { 
      goal: '',
      goals: []
    };
  },

  methods: {
    addGoal() {
      this.goals.push(this.goal)
      this.goal = ''
    },

    removeGoal(idx) {
      this.goals.splice(idx, 1)
    }

    
  },
});

app.mount('#user-goals');
