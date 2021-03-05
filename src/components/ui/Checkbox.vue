<template>
  <label
    class="ui-checkbox"
    :class="{
      'ui-checkbox--checked': value,
      'ui-checkbox--disabled': disabled
    }"
  >
    <input
      class="ui-checkbox-hidden-input"
      type="checkbox"
      :checked="value"
      :disabled="disabled"
      @input="onInput"
    />
    <font-awesome-icon
      icon="check"
      class="ui-checkbox-icon"
      :class="{ 'ui-checkbox-icon--checked': value }"
    />
  </label>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false
    },

    disabled: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    onInput({ target }) {
      this.$emit("input", target.checked);
    }
  }
};
</script>

<style lang="scss" scoped>
.ui-checkbox {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 0px 3px $primary;
  margin: 3px;
  border-radius: 5px;
  height: 25px;
  width: 25px;
  cursor: pointer;
  transition: box-shadow 0.1s ease-in-out;

  &--checked {
    box-shadow: 0px 0px 0px 0px $primary;
  }

  &--disabled {
    filter: saturate(0);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .ui-checkbox-hidden-input {
    display: none;
  }

  &-icon {
    opacity: 0;
    width: 0;
    color: $primary;
    transition: all 0.3s ease-in-out;

    &--checked {
      width: 1rem;
      opacity: 1;
    }
  }
}
</style>
