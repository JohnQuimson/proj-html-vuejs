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
    <div class="decoration"></div>
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
  padding: 70px 0;
  position: relative;

  .decoration {
    position: absolute;
    height: 15px;
    width: 20%;
    background-color: #ec4958;
    top: 0;
  }
}
</style>
