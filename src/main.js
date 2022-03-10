import { createApp } from 'vue';
import App from './App.vue';
import './assets/tailwind.css';
import router from './router';
import store from './store';
import Toaster from '@meforma/vue-toaster';
// Import the CSS or use your own!




createApp(App)
  .use(store)
  .use(router)
  .use(Toaster)
  .mount('#app');

