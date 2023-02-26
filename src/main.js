import { createApp } from 'vue';
import { Vue3Mq } from 'vue3-mq';

import App from './App.vue';
import store from './store';

createApp(App).use(store).use(Vue3Mq, {
  preset: 'devices',
}).mount('#app');
