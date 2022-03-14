import { createApp } from 'vue';
import App from './App.vue';
import './assets/tailwind.css';
import router from './router';
import store from './store';
import Toaster from '@meforma/vue-toaster';
// import VueSocketIO from 'vue-socket.io';
// import { io } from "socket.io-client";
// export const socket = io("http://localhost:3333", {
//   withCredentials: true,
// });
createApp(App)
  .use(store)
  .use(router)
  .use(Toaster)
  // /.use(VueSocketIO, socket)
  .mount('#app');

