<script>
export default {
  name: 'Music is life',

  data() {
    return {};
  },

  components: {},
};
</script>

<template>
  <section class="music-is-life">
    <h2>Music Is Life</h2>
    <hr />
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima amet
      distinctio praesentium eum corrupti. Cumque dolore recusandae tempore
      aliquid id maiores quos voluptatibus
    </p>
  </section>
</template>

<style lang="scss" scoped>
.music-is-life {
  background-color: #252a33;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 0;

  h2 {
    color: #ffffff;
    font-size: 50px;
  }

  hr {
    border-color: #444e62;
    width: 10%;
  }

  p {
    color: #7d7b8d;
    width: 40%;
    text-align: center;
    margin-top: 20px;
  }
}
</style>
