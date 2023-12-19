import { createApp } from 'vue';
import App from './App.vue';

// CSS entry point
import './assets/scss/style.scss';
// JS entry point
import './assets/js/main';

// FONT AWESOME
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
// //star
// import { faStar } from '@fortawesome/free-solid-svg-icons';

library.add();
// Vue App
createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app');
