<script>
import FooterTop from './FooterTop.vue';
import FooterBottom from './FooterBottom.vue';

export default {
  name: 'Footer',
  data() {
    return {};
  },
  components: {
    FooterTop,
    FooterBottom,
  },
};
</script>

<template>
  <footer>
    <FooterTop />
    <FooterBottom />
  </footer>
</template>

<style lang="scss"></style>
