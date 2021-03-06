<template>
  <div id="app">
    <div class="card task-input-card">
      <add-task-input />
    </div>
    <div class="card tasks-list-card">
      <tasks-list />
    </div>
  </div>
</template>

<script>
import AddTaskInput from "@/components/AddTaskInput";
import TasksList from "@/components/TasksList";

export default {
  name: "App",
  components: {
    AddTaskInput,
    TasksList
  },

  data() {
    return {
      check: false,
      inputValue: undefined
    };
  }
};
</script>

<style lang="scss">
#app {
  font-family: Poppins, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $secondary;
  height: 100vh;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  row-gap: 15px;

  .card {
    width: 300px;
    padding: 15px;
    border-radius: 7px;
    box-shadow: 0 0 20px 10px $gray;
  }
}
</style>
