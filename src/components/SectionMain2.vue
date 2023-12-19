<script>
import CardNews from './CardNews.vue';

export default {
  name: 'Latest Band News',

  data() {
    return {};
  },

  components: {
    CardNews,
  },
};
</script>

<template>
  <section class="latest-news">
    <h2>Music Is Life</h2>
    <hr />
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima amet
      distinctio praesentium eum corrupti. Cumque dolore recusandae tempore
      aliquid id maiores quos voluptatibus
    </p>
    <div class="news-container">
      <!-- LEFT -->
      <div class="left-cont col-md-8">
        <div class="col-12">sx alto</div>
        <div class="cont-sx-centro">
          <div class="col-6">sx centro sx</div>
          <div class="col-6">sx centro dx</div>
        </div>

        <div class="col-12">sx sotto</div>
      </div>
      <!-- RIGHT -->
      <div class="right-cont col-md-4">
        <div class="col-12">dx alto</div>
        <div class="col-12">dx basso</div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.latest-news {
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

  .news-container {
    border: 1px solid red;
    color: white;
    width: 55%;
    margin: 0 auto;
    display: flex;

    .left-cont {
      border: 1px solid yellow;

      .cont-sx-centro {
        display: flex;
      }

      & > * {
        border: 1px solid burlywood;
      }
    }

    .right-cont {
      border: 1px solid orange;

      & > * {
        border: 1px solid purple;
        height: 50%;
      }
    }
  }
}
</style>
