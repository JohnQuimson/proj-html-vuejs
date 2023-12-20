<script>
export default {
  name: 'Section Video',

  data() {
    return {};
  },

  components: {},
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
    <div class="cont-play-btn">
      <img
        src="../../public/img/images/band_interview_play_icon.png"
        alt="play-btn"
      />
    </div>
  </section>
</template>

<style lang="scss" scoped>
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
  }

  .cont-play-btn {
    height: 80px;
    width: 80px;

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
}
</style>
