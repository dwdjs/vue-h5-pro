import Vue from 'vue';
import App from './App';
import router from '@/router';

import '@/registerServiceWorker';
import '@/permission';

new Vue({
  router,
  el: '#app',
  render: h => h(App)
});
