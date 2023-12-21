<script>
export default {
  name: 'Jumbotron',

  data() {
    return {};
  },

  components: {},
};
</script>

<template>
  <div class="jumbotron">
    <h1>Untold Stories</h1>
    <p>There is an untold story behind every favourite song.</p>
    <div class="cont-buttons">
      <button class="active">lastest album</button>
      <button>live dates</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../assets/scss/style.scss' as *;
.jumbotron {
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 300px;

  h1 {
    font-size: 130px;
    font-weight: 700;
  }

  p {
    font-size: 19px;
    font-family: 'PT Serif', serif;
    letter-spacing: 1px;
    word-spacing: 1px;
  }

  .cont-buttons {
    margin-top: 50px;
    display: flex;
    gap: 15px;

    button {
      background: none;
      border: 1px solid white;
      color: white;
      text-transform: uppercase;
      padding: 8px 20px;

      &:hover {
        background-color: white;
        color: black;
      }
    }

    .active {
      background-color: #ec4958;
      border: none;
    }
  }
}
</style>
