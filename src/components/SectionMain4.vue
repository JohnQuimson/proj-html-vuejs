<script>
import BigButton from './BigButton.vue';
import Accordion from './Accordion.vue';

export default {
  name: 'Live Dates',

  data() {
    return {};
  },

  components: {
    BigButton,
    Accordion,
  },
};
</script>

<template>
  <section class="live-dates">
    <h2>Live Dates</h2>
    <hr />
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima amet
      distinctio praesentium eum corrupti. Cumque dolore recusandae tempore
      aliquid id maiores quos voluptatibus
    </p>

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
