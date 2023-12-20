<script>
export default {
  name: 'News Card',
  props: ['img', 'title', 'paragraph'],

  data() {
    return {};
  },

  components: {},
};
</script>

<template>
  <div class="card-element">
    <!-- IMG -->
    <div class="cont-img">
      <img :src="`../../public/img/images/${img}`" :alt="title" />
    </div>
    <!-- TEXT -->
    <div class="cont-text">
      <h4>{{ title }}</h4>
      <p>{{ paragraph }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card-element {
  display: flex;
  flex-direction: column;
  .cont-img {
    width: 100%;
    height: 100%;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .cont-text {
    height: 100px;
    padding: 20px;

    h4 {
      color: #ec4958;
      font-size: 15px;
    }

    p {
      color: #7d7b8d;
    }
  }
}
</style>
