<template>
  <button
    class="ui-button"
    :class="uiButtonDynamicClass"
    :disabled="disabled"
    @click="event => $emit('click', event)"
  >
    {{ label }}
  </button>
</template>

<script>
export default {
  name: "ui-button",
  props: {
    type: {
      type: String,
      default: "primary"
    },

    disabled: {
      type: Boolean,
      default: false
    },

    label: {
      type: String,
      required: true
    }
  },

  computed: {
    uiButtonDynamicClass() {
      return `ui-button--${this.type}`;
    }
  }
};
</script>

<style lang="scss" scoped>
.ui-button {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 7px;
  color: white;
  cursor: pointer;
  outline: none;
  user-select: none;

  &.ui-button--primary {
    @include apply-button-type-styling($primary);
  }

  &.ui-button--secondary {
    @include apply-button-type-styling($secondary);
  }

  &.ui-button--negative {
    @include apply-button-type-styling($negative);
  }

  &.ui-button--warning {
    @include apply-button-type-styling($warning);
  }
}
</style>
