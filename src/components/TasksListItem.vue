<template>
  <div class="tasks-list-item">
    <base-checkbox :value="task.checked" @input="onTaskStatusChange" />
    <div class="label">{{ task.name }}</div>
  </div>
</template>

<script>
import BaseCheckbox from "./ui/BaseCheckbox";

export default {
  name: "TasksListItem",

  components: { BaseCheckbox },

  props: {
    task: {
      type: Object,
      required: true
    },

    taskIndex: {
      type: Number,
      required: true
    }
  },

  methods: {
    onTaskStatusChange(newState) {
      // TODO dispatch store action
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
