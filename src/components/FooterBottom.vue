<script>
export default {
  name: 'Footer Bottom',
  data() {
    return {};
  },
  components: {},
};
</script>

<template>
  <div class="footer-bottom">
    <div class="cont-left">
      <ul>
        <li><a href="#">© Copyright 2012 - 2020</a></li>
        <li>|</li>
        <li><a href="#">AVADA THEME BY THEMEFUSION</a></li>
        <li>|</li>
        <li><a href="#">ALL RIGHTS RESERVED</a></li>
        <li>|</li>
        <li><a href="#">POWERED BY WORDPRESS</a></li>
      </ul>
    </div>
    <div class="cont-right">
      <ul>
        <li>
          <a href="#">
            <font-awesome-icon icon="fa-brands fa-facebook-f" />
          </a>
        </li>
        <li>
          <a href="#">
            <font-awesome-icon icon="fa-brands fa-x-twitter" />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/john_qms/">
            <font-awesome-icon icon="fa-brands fa-instagram" />
          </a>
        </li>
        <li>
          <a href="#">
            <font-awesome-icon icon="fa-brands fa-youtube" />
          </a>
        </li>
      </ul>
    </div>
    <a class="back-up" href="#">
      <a href="#"> <font-awesome-icon icon="fa-solid fa-chevron-up" /></a>
    </a>
  </div>
</template>

<style lang="scss" scoped>
.footer-bottom {
  background-color: #252a33;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 30px;
  position: relative;

  .cont-left {
    ul {
      display: flex;
      gap: 5px;
      font-size: 12px;
      margin: 0;
      padding: 0;

      li {
        color: #7d7b8d;

        a {
          text-decoration: none;
          color: #7d7b8d;
        }
      }
    }
  }

  .cont-right {
    ul {
      display: flex;
      gap: 15px;
      margin: 0;

      li {
        width: 35px;
        height: 35px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #323844;
        border-radius: 5px;

        a {
          font-size: 15px;
          text-decoration: none;
          color: #7d7b8d;
        }

        &:hover {
          cursor: pointer;
          background-color: #464a53;
        }

        &:hover a {
          color: white;
        }
      }
    }
  }

  .back-up {
    background-color: #323233;
    color: white;
    position: absolute;
    bottom: 0;
    right: 50px;
    padding: 3px 15px 1px 15px;
    border-start-start-radius: 8px;
    border-start-end-radius: 8px;

    a {
      color: white;
      font-size: 14px;
    }

    &:hover {
      cursor: pointer;
      background-color: #505050;
    }
  }
}
</style>
