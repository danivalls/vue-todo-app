<template>
  <div>
    <ui-input v-model="taskName" placeholder="Nueva tarea" @enter="onAddTask">
      <ui-button
        label="Añadir"
        type="negative"
        :disabled="!taskName"
        @click="onAddTask"
      />
    </ui-input>
  </div>
</template>

<script>
import uiInput from "./ui/uiInput";
import uiButton from "./ui/uiButton";

export default {
  name: "TheAddTaskInput",
  components: {
    uiInput,
    uiButton
  },

  data() {
    return {
      taskName: undefined
    };
  },

  computed: {
    newTask() {
      return { checked: false, name: this.taskName };
    }
  },

  methods: {
    onAddTask() {
      this.$emit("newTask", this.newTask);
      this.taskName = undefined;
    }
  }
};
</script>

<style lang="scss" scoped></style>
