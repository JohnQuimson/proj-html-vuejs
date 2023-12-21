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
  <hr />
  <p>
    {{ paragraph }}
  </p>
</template>

<style lang="scss" scoped>
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
</style>
