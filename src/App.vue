<template>
  <div id="app">
    <ui-button label="Button" @click="onClick" :disabled="check" />

    <ui-checkbox v-model="check" />

    <ui-input
      v-model="inputValue"
      placeholder="Item a añadir..."
      :disabled="check"
      @enter="inputValue = undefined"
    >
      <ui-button
        label="Añadir"
        type="negative"
        @click="inputValue = undefined"
        :disabled="!inputValue"
      />
    </ui-input>
  </div>
</template>

<script>
import uiButton from "@/components/ui/uiButton";
import uiCheckbox from "@/components/ui/uiCheckbox";
import uiInput from "@/components/ui/uiInput";

export default {
  name: "App",
  components: {
    uiButton,
    uiCheckbox,
    uiInput
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
