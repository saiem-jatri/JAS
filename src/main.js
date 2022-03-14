import { createApp } from 'vue';
import App from './App.vue';
import './assets/tailwind.css';
import router from './router';
import store from './store';
import Toaster from '@meforma/vue-toaster';
import VueSocketIO from 'vue-3-socket.io'
import SocketIO from 'socket.io-client'

createApp(App)
  .use(store)
  .use(router)
  .use(Toaster)
  .use(new VueSocketIO({
      debug: true,
      connection: SocketIO('http://localhost:3333', {
        withCredentials: true,
      }), //options object is Optional
      vuex: {
        store,
        actionPrefix: "SOCKET_",
        mutationPrefix: "SOCKET_"
      }
    })
  )
  .mount('#app');

