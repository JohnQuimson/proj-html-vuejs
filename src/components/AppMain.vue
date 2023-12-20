<script>
import SectionMain1 from './SectionMain1.vue';
import SectionMain2 from './SectionMain2.vue';
import SectionMain3 from './SectionMain3.vue';
import SectionMain4 from './SectionMain4.vue';

export default {
  name: 'Main',

  data() {
    return {};
  },

  components: {
    SectionMain1,
    SectionMain2,
    SectionMain3,
    SectionMain4,
  },
};
</script>

<template>
  <SectionMain1 />
  <SectionMain2 />
  <SectionMain3 />
  <SectionMain4 />
</template>

<style lang="scss" scoped></style>
