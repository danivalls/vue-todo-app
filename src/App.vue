<template>
  <div id="app">
    <Button label="Button" @click="onClick" />
  </div>
</template>

<script>
import Button from "@/components/ui/Button";

export default {
  name: "App",
  components: {
    Button
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
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
