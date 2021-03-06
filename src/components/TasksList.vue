<template>
  <div class="tasks-list-wrapper">
    <tasks-list-no-items v-if="listIsEmpty" />
  </div>
</template>

<script>
import TasksListNoItems from "./TasksListNoItems";

export default {
  name: "TasksList",

  components: {
    TasksListNoItems
  },

  props: {
    items: {
      type: Array,
      default: () => []
    }
  },

  computed: {
    listIsEmpty() {
      return !this.items.length;
    }
  }
};
</script>

<style lang="scss" scoped></style>
