<template>
  <div class="tasks-list-wrapper">
    <tasks-list-no-items v-if="listIsEmpty" />
    <tasks-list-item
      v-for="(item, index) in items"
      :key="`list-item-${index}`"
      :task="item"
      :taskIndex="index"
    />
  </div>
</template>

<script>
import TasksListNoItems from "./TasksListNoItems";
import TasksListItem from "./TasksListItem";

export default {
  name: "TasksList",

  components: {
    TasksListNoItems,
    TasksListItem
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
