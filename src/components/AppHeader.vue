<script>
import Logo from './Logo.vue';
import Jumbotron from './Jumbotron.vue';
import Sidebar from './Sidebar.vue';

export default {
  name: 'Header',

  data() {
    return {};
  },

  components: {
    Logo,
    Jumbotron,
    Sidebar,
  },
};
</script>

<template>
  <header>
    <!-- Navbar -->
    <div class="navbar">
      <logo />
      <Sidebar />
    </div>
    <!-- Jumbotron -->
    <Jumbotron />
  </header>
</template>

<style lang="scss" scoped>
@use '../assets/scss/style.scss' as *;

header {
  background-image: url(../../public/img/images/home_slider.jpg);
  background-size: cover;

  background-repeat: no-repeat;
  height: 100vh;
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 30px;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
  }
}
</style>
