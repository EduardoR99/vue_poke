import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import "nes.css/css/nes.min.css";
import  router  from './router';
import { RouterLink } from 'vue-router';

createApp(App).use(router).mount('#app')
