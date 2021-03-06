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
  name: "BaseButton",
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

  &--primary {
    @include apply-button-type-styling($primary);
  }

  &--secondary {
    @include apply-button-type-styling($secondary);
  }

  &--negative {
    @include apply-button-type-styling($negative);
  }

  &--warning {
    @include apply-button-type-styling($warning);
  }
}
</style>
