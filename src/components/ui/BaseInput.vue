<template>
  <label
    class="ui-input-wrapper"
    :class="{ 'ui-input-wrapper--disabled': disabled }"
  >
    <input
      class="ui-input"
      :value="value"
      :placeholder="placeholder"
      :disabled="disabled"
      @input="onInput"
      @keypress.enter="onEnter"
    />
    <slot></slot>
  </label>
</template>

<script>
export default {
  name: "BaseInput",
  props: {
    value: {
      type: String
    },

    placeholder: {
      type: String
    },

    disabled: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    onInput({ target }) {
      this.$emit("input", target.value);
    },

    onEnter() {
      this.$emit("enter");
    }
  }
};
</script>

<style lang="scss" scoped>
.ui-input-wrapper {
  background-color: $gray;
  padding: 0.4rem;
  border-radius: 7px;
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  transition: all 0.5s;

  &--disabled {
    opacity: 0.5;
    .ui-input {
      cursor: not-allowed;
    }
  }

  .ui-input {
    background-color: transparent;
    border: none;
    outline: none;
    min-width: 75px;
  }
}
</style>
