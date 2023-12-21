<script>
import Title from './Title.vue';
import { store } from '../store';

export default {
  name: 'Music is life',

  data() {
    return {
      store,
    };
  },

  components: { Title },
};
</script>

<template>
  <section class="music-is-life">
    <Title
      :title="store.titles.elementSection1.title"
      :paragraph="store.titles.elementSection1.paragraph"
    />
  </section>
</template>

<style lang="scss" scoped>
.music-is-life {
  background-color: #323844;
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
