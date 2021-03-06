<template>
  <div class="tasks-list-item">
    <base-checkbox :value="task.checked" @input="onTaskStatusChange" />
    <tasks-list-item-label :label="task.name" :linethrough="task.checked" />
  </div>
</template>

<script>
import BaseCheckbox from "./ui/BaseCheckbox";
import TasksListItemLabel from "./TasksListItemLabel";

export default {
  name: "TasksListItem",

  components: { BaseCheckbox, TasksListItemLabel },

  props: {
    task: {
      type: Object,
      required: true
    }
  },

  methods: {
    onTaskStatusChange(newState) {
      this.$store.dispatch("updateTaskState", {
        ...this.task,
        checked: newState
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.tasks-list-item {
  width: 100%;
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  column-gap: 15px;
  animation-name: "slide-in-right";
  animation-duration: 0.5s;
  animation-timing-function: cubic-bezier(0, 0.35, 0.45, 1);
}
</style>
