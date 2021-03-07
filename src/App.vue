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
import { loadListFromLocalStorage } from "@/utils/localStorageManager";

export default {
  name: "App",

  components: {
    AddTaskInput,
    TasksList,
    ClearCompletedTasksButton
  },

  beforeMount() {
    loadListFromLocalStorage();
  }
};
</script>

<style lang="scss">
#app {
  font-family: Poppins, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $secondary;

  .card {
    width: 300px;
    padding: 10px 15px;
    margin: 30px auto;
    border-radius: 5px;
    box-shadow: 0 0 15px 5px $gray;
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
