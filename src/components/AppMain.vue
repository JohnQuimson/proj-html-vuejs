<script>
import SectionMain1 from './SectionMain1.vue';
import SectionMain2 from './SectionMain2.vue';
import SectionMain3 from './SectionMain3.vue';

export default {
  name: 'Main',

  data() {
    return {};
  },

  components: {
    SectionMain1,
    SectionMain2,
    SectionMain3,
  },
};
</script>

<template>
  <SectionMain1 />
  <SectionMain2 />
  <SectionMain3 />
</template>

<style lang="scss" scoped></style>
