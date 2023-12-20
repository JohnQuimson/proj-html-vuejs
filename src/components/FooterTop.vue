<script>
export default {
  name: 'Footer Top',
  data() {
    return {};
  },
  components: {},
};
</script>

<template>
  <div class="footer-top">
    <div class="cont-left">
      <div class="cont-logo">
        <img
          src="../../public/img/images/avada-music-logo.png"
          alt="logo-footer"
        />
      </div>
    </div>
    <div class="cont-right">
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Meet The Band</a></li>
        <li><a href="#">Live Dates</a></li>
        <li><a href="#">Latest News</a></li>
        <li><a href="#">Albums</a></li>
        <li><a href="#">Fans</a></li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
.footer-top {
  height: 10vh;
  background-color: #323844;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0;

  .cont-left {
    .cont-logo {
      height: 100%;

      img {
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
    }
  }

  .cont-right {
    ul {
      display: flex;
      gap: 15px;
      margin: 0;

      li {
        a {
          color: #797d86;
          font-size: 15px;
        }
      }
    }
  }
}
</style>
