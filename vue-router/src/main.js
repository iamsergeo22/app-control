import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import NotFound from './components/nav/NotFound.vue';
import TeamFooter from './components/teams/TeamFooter.vue';
import UsersFooter from './components/users/UsersFooter.vue';


const router =  createRouter({
     history: createWebHistory(),
     routes: [
          // Redirecting the routes (reirect there is also alias:)
          { path: '/', redirect: '/teams'},
          // Usng Nested Routes
          { 
               name: 'teams',
               path: '/teams', 
               components: { default: TeamsList, footer: TeamFooter}, 
               children: [
                    // params as props
               { name: 'team-members', path: ':teamId', component: TeamMembers, props: true}
          ]},
          { path: '/users', components: { default: UsersList , footer: UsersFooter}},
          
         
          // redirect and catch all routes
          { path: '/:notFound(.*)', component: NotFound}
     ],

     linkActiveClass: 'active',
     // scrollBehavior
     scrollBehavior (to, from, savedPosition) {
          console.log(to, from, savedPosition);
          if (savedPosition) {
               return savedPosition;
          }
          // ...
          return {left: 0, top: 0};
          
     }


})
// Nagivation Guards
router.beforeEach(function(to, from, next) {
     console.log('Global beforeEach');
     console.log(to, from);
     next();
});
const app = createApp(App)

app.use(router);


app.mount('#app');
