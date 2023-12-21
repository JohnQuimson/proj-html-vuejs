<script>
export default {
  name: 'Title',
  props: ['title', 'paragraph'],

  data() {
    return {};
  },

  components: {},
};
</script>

<template>
  <h2>{{ title }}</h2>
  <div class="separator"></div>
  <p>
    {{ paragraph }}
  </p>
</template>

<style lang="scss" scoped>
h2 {
  color: #ffffff;
  font-size: 50px;
}

.separator {
  width: 10%;
  border: 1px solid #444e62;
  margin: 8px 0;
}

p {
  color: #7d7b8d;
  width: 40%;
  text-align: center;
  margin-top: 20px;
}
</style>
