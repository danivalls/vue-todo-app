<template>
  <div id="app">
    <div class="card">
      <add-task-input />
    </div>
    <div class="card tasks-list-card">
      <tasks-list class="tasks-list" />
      <clear-completed-tasks-button class="clear-list-button" />
    </div>
  </div>
</template>

<script>
import AddTaskInput from "@/components/AddTaskInput";
import TasksList from "@/components/TasksList";
import ClearCompletedTasksButton from "@/components/ClearCompletedTasksButton";

export default {
  name: "App",

  components: {
    AddTaskInput,
    TasksList,
    ClearCompletedTasksButton
  }
};
</script>

<style lang="scss">
#app {
  font-family: Poppins, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $secondary;
  display: flex;
  flex-flow: column;
  align-items: center;
  padding: 30px;
  row-gap: 15px;

  .card {
    width: 300px;
    padding: 15px;
    border-radius: 7px;
    box-shadow: 0 0 20px 10px $gray;
    &.tasks-list-card {
      .tasks-list {
        max-height: 600px;
        overflow-y: auto;
        overflow-x: hidden;
      }
      .clear-list-button {
        margin-top: 15px;
      }
    }
  }
}
</style>
