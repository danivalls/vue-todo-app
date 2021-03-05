<template>
  <div id="app">
    <Button label="Button" @click="onClick" :disabled="disableButton" />

    <Checkbox v-model="check" />
  </div>
</template>

<script>
import Button from "@/components/ui/Button";
import Checkbox from "@/components/ui/Checkbox";

export default {
  name: "App",
  components: {
    Button,
    Checkbox
  },

  data() {
    return {
      disableButton: false,
      check: false
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
