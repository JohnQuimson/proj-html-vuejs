import { createApp } from 'vue';
import App from './App.vue';

// CSS entry point
import './assets/scss/style.scss';
// JS entry point
import './assets/js/main';

// // BOOTSTRAP
// import 'bootstrap/js/bootstrap';

// FONT AWESOME
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// IMPORT ICONS
// Menu Header
import { faBars } from '@fortawesome/free-solid-svg-icons';
// facebook
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
// twitter
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
// instagram
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
// youtube
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

// chevron up
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

// LIBRARY
library.add(
  faBars,
  faFacebookF,
  faXTwitter,
  faInstagram,
  faYoutube,
  faChevronUp
);
// Vue App
createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app');
