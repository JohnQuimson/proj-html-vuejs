<script>
import SectionMain1 from './SectionMain1.vue';
import SectionMain2 from './SectionMain2.vue';

export default {
  name: 'Main',

  data() {
    return {};
  },

  components: {
    SectionMain1,
    SectionMain2,
  },
};
</script>

<template>
  <SectionMain1 />
  <SectionMain2 />
</template>

<style lang="scss" scoped></style>
