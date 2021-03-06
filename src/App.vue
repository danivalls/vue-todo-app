<template>
  <div id="app">
    <the-add-task-input />
  </div>
</template>

<script>
import TheAddTaskInput from "@/components/TheAddTaskInput";

export default {
  name: "App",
  components: {
    TheAddTaskInput
  },

  data() {
    return {
      check: false,
      inputValue: undefined
    };
  },

  methods: {
    onClick(e) {
      console.log("click", e);
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: Poppins, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $secondary;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 15px;
}
</style>
