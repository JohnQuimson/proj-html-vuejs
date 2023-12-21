<script>
export default {
  name: 'Section Video',

  data() {
    return {
      visualVideo: true,
    };
  },

  components: {},

  methods: {
    togglePlay() {
      this.visualVideo = !this.visualVideo;
    },
  },
};
</script>

<template>
  <section class="section-video">
    <p>
      “I just listened to it and said to myself,“Man, I really love this album.”
      Still, today, it just sounds so fresh. It sounds full of ideas. These guys
      knew what they were doing. They're good. And they're inventive. I haven't
      heard anything this year that's as inventive. I don't really expect to.”
    </p>
    <div @click="togglePlay" v-if="visualVideo === true" class="cont-play-btn">
      <img
        src="../../public/img/images/band_interview_play_icon.png"
        alt="play-btn"
      />
    </div>
    <div v-else class="cont-video">
      <img src="../../public/img/images/concert-gif.gif" alt="" />
      <div @click.stop="togglePlay" class="close-video">
        <span>
          <font-awesome-icon icon="fa-solid fa-xmark" />
        </span>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '../assets/scss/style.scss' as *;
.section-video {
  height: 90vh;
  background-image: url(../../public/img/images/home-testimonial-parallax.jpg);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

  p {
    color: white;
    width: 40%;
    text-align: center;
    line-height: 30px;
    font-size: 20px;
    font-family: 'PT Serif', serif;
    letter-spacing: 1px;
  }

  .cont-play-btn {
    height: 80px;
    width: 80px;

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }

    &:hover img {
      cursor: pointer;
      filter: invert(100%);
    }
  }

  .cont-video {
    width: 500px;
    height: 200px;
    position: relative;

    .close-video {
      position: absolute;
      top: 10px;
      right: 20px;

      span {
        color: white;
        font-weight: 600;
        font-size: 30px;
      }

      &:hover span {
        cursor: pointer;
        color: rgb(255, 208, 0);
      }
    }
  }
}
</style>
