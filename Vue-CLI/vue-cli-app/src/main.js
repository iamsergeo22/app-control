import { createApp } from 'vue'

// eslint-disable-next-line no-unused-vars
import App from './App.vue';
// eslint-disable-next-line no-unused-vars
import FriendContact from './components/FriendContact.vue';

import NewFriend from './components/NewFriend.vue'

const app = createApp(App);
app.component('friend-contact', FriendContact);
app.component('new-friend', NewFriend);

app.mount('#app');
