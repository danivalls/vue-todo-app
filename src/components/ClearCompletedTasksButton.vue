<template>
  <base-button
    v-show="displayButton"
    class="clear-list-button"
    label="Eliminar completados"
    :disabled="!canClearTasks"
    @click="clearList"
  />
</template>

<script>
import BaseButton from "@/components/ui/BaseButton";

export default {
  name: "ClearCompletedTasksButton",

  components: {
    BaseButton
  },

  computed: {
    tasks() {
      return this.$store.getters.getTasks;
    },

    displayButton() {
      return Boolean(this.tasks.length);
    },

    canClearTasks() {
      return Boolean(this.tasks.some(({ checked }) => checked));
    }
  },

  methods: {
    clearList() {
      this.$store.dispatch("clearListOfCompletedTasks");
    }
  }
};
</script>

<style lang="scss" scoped>
.clear-list-button {
  width: 100%;
}
</style>
