<template>
  <div class="item-label">
    <div
      class="item-label-text"
      :class="{ 'item-label-text--faded': linethrough }"
    >
      {{ label }}
    </div>
    <div
      class="item-label-line"
      :class="{ 'item-label-line--active': linethrough }"
    ></div>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true
    },

    linethrough: Boolean
  }
};
</script>

<style lang="scss" scoped>
.item-label {
  position: relative;

  .item-label-text {
    word-break: break-word;
    opacity: 1;
    transition: all 0.2s;
    &--faded {
      opacity: 0.3;
    }
  }

  .item-label-line {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 0;
    height: 0.25rem;
    background-color: $primary;
    transition: all 0.2s ease-out;

    &--active {
      width: 100%;
    }
  }
}
</style>
