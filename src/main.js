import { createApp } from 'vue';
import App from './App.vue';

// CSS entry point
import './assets/scss/style.scss';
// JS entry point
import './assets/js/main';

// // FONT AWESOME
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
// //star
// import { faStar } from '@fortawesome/free-solid-svg-icons';
// //empty star
// import { faStar as faStarVuota } from '@fortawesome/free-regular-svg-icons';
// //lente ingrandimento
// import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

// library.add(faStar, faStarVuota, faMagnifyingGlass);
// Vue App
// createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app');
createApp(App).mount('#app');
