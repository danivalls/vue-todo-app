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
      const newTask = { ...this.task, checked: newState };

      this.$store.dispatch("updateTaskState", newTask);
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
}
</style>
