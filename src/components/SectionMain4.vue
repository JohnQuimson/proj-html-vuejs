<script>
import BigButton from './BigButton.vue';
import Accordion from './Accordion.vue';
import Title from './Title.vue';
import { store } from '../store';

export default {
  name: 'Live Dates',

  data() {
    return {
      store,
    };
  },

  components: {
    BigButton,
    Accordion,
    Title,
  },
};
</script>

<template>
  <section class="live-dates">
    <Title
      :title="store.titles.elementSection4.title"
      :paragraph="store.titles.elementSection4.paragraph"
    />

    <!-- accordion -->
    <div class="cont-accordion">
      <Accordion />
    </div>
    <BigButton />
  </section>
</template>

<style lang="scss" scoped>
.live-dates {
  background-color: #252a33;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 0 0 0;

  .cont-accordion {
    width: 70%;

    .accordion-item {
      button {
        background-color: #323844;
        color: #ec4958;
        border: none;

        &::after {
          display: none;
        }

        &::before {
          content: '+';
          position: absolute;
          left: 10px;
          top: 50%;
          transform: translateY(-50%);
          font-size: 18px;
        }
      }
    }
  }
}
</style>
