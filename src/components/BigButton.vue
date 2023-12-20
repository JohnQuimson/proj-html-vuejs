<script>
export default {
  name: 'Big button',

  data() {
    return {};
  },

  components: {},
};
</script>

<template>
  <button>View all latest news</button>
</template>

<style lang="scss" scoped>
button {
  width: 100%;
  height: 10vh;
  background-color: #ec4958;
  border: none;
  color: white;
  text-transform: uppercase;
  font-size: 14px;
  letter-spacing: 1px;

  &:hover {
    background-color: white;
    color: black;
  }
}
</style>
