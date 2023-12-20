<script>
export default {
  name: 'Sidebar',

  data() {
    return {
      visibleSidebar: false,
    };
  },

  methods: {
    toggleSidebar() {
      this.visibleSidebar = !this.visibleSidebar;
    },
  },

  components: {},
};
</script>

<template>
  <div class="menu-icon" @click="toggleSidebar">
    <font-awesome-icon icon="fa-solid fa-bars" />
  </div>
  <div class="sidebar" v-show="visibleSidebar">
    <div class="sidebar-header">
      <div class="cont-logo">
        <img
          src="../../public/img/images/avada-music-logo-retina.png "
          alt=""
        />
      </div>
      <div class="icon" @click="toggleSidebar">
        <font-awesome-icon icon="fa-solid fa-xmark" />
      </div>
    </div>
    <div class="sidebar-content">
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Meet The Band</a>
        </li>
        <li>
          <a href="#">Live Dates</a>
        </li>
        <li>
          <a href="#">Latest News</a>
        </li>
        <li>
          <a href="#">Albums</a>
        </li>
        <li>
          <a href="#">Fans</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.menu-icon {
  font-size: 24px;
  color: white;

  &:hover {
    color: rgb(187, 187, 187);
    cursor: pointer;
  }
}

.sidebar {
  height: 60%;
  width: 100%;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #ec4858;
  overflow-x: hidden;
  transition: 0.5s;

  .sidebar-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 30px;

    .cont-logo {
      height: 50px;

      img {
        height: 100%;
        object-fit: cover;
      }
    }

    .icon {
      font-size: 30px;
      color: #f8959e;

      &:hover {
        color: white;
        cursor: pointer;
      }
    }
  }

  .sidebar-content {
    display: flex;
    justify-content: center;

    ul {
      margin-top: 60px;
      display: flex;
      flex-direction: column;
      text-align: center;
      gap: 30px;

      a {
        text-decoration: none;
        color: #f8959e;
        font-size: 18px;
        letter-spacing: 0.5px;

        &:hover {
          color: white;
        }
      }
    }
  }
}
</style>
