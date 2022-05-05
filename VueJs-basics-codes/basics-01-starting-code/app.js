// Creating Vue App
const app = Vue.createApp({
    // Data function
    data() {
        return {
            courseGoalA: 'Finish this course and Learn Vue!',
            courseGoalB: 'Master vue and build some amazing Apps!',
            vueLink: 'https://vuejs.org/'
        }
    },
    // Methods in Vue
    methods: {
        outGoal() {
            const randomNumber = math.random();
            if (randomNumber < 0.5) {
                return this.courseGoalA;
            } else {
                return this.courseGoalB;
            }
        }
    },
});


// This function is to select which part of html page that vue should focus on 
app.mount('#user-goal');