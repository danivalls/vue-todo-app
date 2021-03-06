<template>
  <div class="tasks-list-wrapper">
    <tasks-list-no-items v-if="listIsEmpty" />
    <tasks-list-item
      v-for="task in tasks"
      :key="`list-item-${task.id}`"
      :task="task"
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

  computed: {
    tasks() {
      return this.$store.getters.getTasks;
    },

    listIsEmpty() {
      return !this.tasks.length;
    }
  }
};
</script>

<style lang="scss" scoped></style>
